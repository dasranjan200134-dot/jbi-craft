import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const RAW_SUPABASE_URL = (process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '').trim();
const SUPABASE_URL = RAW_SUPABASE_URL.startsWith('http') ? RAW_SUPABASE_URL : 'https://xgnojcorciyjwtakhbny.supabase.co';
const RAW_KEY = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '').trim();
const SUPABASE_KEY = RAW_KEY.length > 5 ? RAW_KEY : 'sb_publishable_3g8OGbFIGEICKpcuGCYryw_pWAU2xkF';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false }
});

export async function syncAllCatalogToSupabase() {
  console.log('🚀 [JBI Craft] Starting Master Product Catalog & Artisan Sync to Supabase...');
  console.log(`🔗 Target Supabase URL: ${SUPABASE_URL}`);

  // 1. Load Artisans & Products JSON
  const artisansPath = path.join(process.cwd(), 'public/assets/artisans-catalog.json');
  const productsPath = path.join(process.cwd(), 'public/assets/products-catalog.json');

  if (!fs.existsSync(artisansPath) || !fs.existsSync(productsPath)) {
    throw new Error('Catalog JSON files not found in public/assets/');
  }

  const rawArtisans = JSON.parse(fs.readFileSync(artisansPath, 'utf8'));
  const rawProducts = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

  console.log(`📦 Loaded ${rawArtisans.length} master artisans and ${rawProducts.length} handcrafted products.`);

  // 2. Sync Artisans
  const artisanRows = rawArtisans.map((a: any) => ({
    id: a.id,
    name: a.name,
    guild_name: a.heritageLineage || a.specialty || 'Master Artisan Guild',
    craft_specialty: a.craft || a.specialty || 'Traditional Odisha Handicraft',
    district: (a.location || '').split(',')[0] || 'Puri',
    village: a.location || 'Odisha Heritage Cluster',
    bio: a.fullStory || a.story || 'Generational master craftsperson preserving Odisha GI heritage.',
    experience_years: Number(a.yearsOfExperience) || 25,
    avatar_image: a.image || '',
    national_awards: Array.isArray(a.awards) ? a.awards.join(', ') : (a.awards || 'State Handicraft Excellence Award'),
    is_active: true,
    created_at: new Date().toISOString()
  }));

  const { data: syncedArtisans, error: artErr } = await supabase
    .from('artisans')
    .upsert(artisanRows, { onConflict: 'id' })
    .select();

  if (artErr) {
    console.error('❌ Failed to sync artisans:', artErr.message);
  } else {
    console.log(`✅ Successfully synced ${syncedArtisans?.length || artisanRows.length} master artisans into public.artisans!`);
  }

  // 3. Upload images to Supabase Storage 'products' bucket if available
  const imageUrlMap: { [localPath: string]: string } = {};

  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const hasProductsBucket = buckets?.some(b => b.name === 'products' || b.id === 'products');

    if (hasProductsBucket) {
      console.log('📂 Found Supabase Storage bucket "products". Uploading product images...');
      for (const p of rawProducts) {
        const localImg = p.image;
        if (localImg && localImg.startsWith('/assets/')) {
          const diskPath = path.join(process.cwd(), 'public', localImg.replace(/^\//, ''));
          if (fs.existsSync(diskPath)) {
            const fileName = path.basename(diskPath);
            const fileBuf = fs.readFileSync(diskPath);
            const ext = path.extname(fileName).toLowerCase();
            const mimeType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : ext === '.svg' ? 'image/svg+xml' : 'image/jpeg';

            const { error: upErr } = await supabase.storage.from('products').upload(fileName, fileBuf, {
              contentType: mimeType,
              upsert: true
            });

            if (!upErr) {
              const { data: pubData } = supabase.storage.from('products').getPublicUrl(fileName);
              if (pubData?.publicUrl) {
                imageUrlMap[localImg] = pubData.publicUrl;
              }
            }
          }
        }
      }
      console.log(`🖼️ Uploaded ${Object.keys(imageUrlMap).length} images to Supabase Storage "products" bucket.`);
    } else {
      console.log('ℹ️ "products" storage bucket not created yet in Supabase. Using robust asset URLs.');
    }
  } catch (storageErr) {
    console.warn('⚠️ Supabase storage check note:', storageErr);
  }

  // 4. Map & Upsert Products
  const productRows = rawProducts.map((p: any) => {
    let hsn = '9701';
    let gst = 12.0;
    if (p.collection === 'textiles') { hsn = '5208'; gst = 5.0; }
    else if (p.collection === 'filigree') { hsn = '7113'; gst = 18.0; }
    else if (p.collection === 'metal') { hsn = '7419'; gst = 12.0; }

    const primaryImage = imageUrlMap[p.image] || p.image || '';
    const additionalImgs = Array.isArray(p.additionalImages) 
      ? p.additionalImages.map((img: string) => imageUrlMap[img] || img)
      : [];

    return {
      id: p.id,
      title: p.title,
      craft: p.craft || 'ODISHA HANDICRAFT',
      category: p.category || 'Handloom & Crafts',
      collection: p.collection || 'all',
      categories_list: Array.isArray(p.categoriesList) ? p.categoriesList : [p.category || 'Handicrafts'],
      price: Number(p.price),
      original_price: Number(p.originalPrice || p.price),
      hsn_code: hsn,
      gst_rate: gst,
      weight_grams: p.details?.weight ? parseInt(p.details.weight) || 500 : 450,
      rating: Number(p.rating || 5.0),
      reviews_count: Number(p.reviewsCount || 0),
      stock_quantity: Number(p.stock || 15),
      min_stock_alert: 3,
      origin: p.origin || 'Odisha Heritage Cluster',
      artisan_id: p.artisanId || null,
      artisan_name: p.artisanName || 'Master Guild Artisan',
      image_url: primaryImage,
      additional_images: additionalImgs,
      description: p.description || '',
      details: p.details || {},
      features: Array.isArray(p.features) ? p.features : [],
      is_new: Boolean(p.isNew),
      is_featured: Boolean(p.featured),
      is_active: true,
      updated_at: new Date().toISOString()
    };
  });

  const { data: syncedProducts, error: prodErr } = await supabase
    .from('products')
    .upsert(productRows, { onConflict: 'id' })
    .select();

  if (prodErr) {
    console.error('❌ Failed to sync products:', prodErr.message);
    return { success: false, error: prodErr.message };
  }

  console.log(`✨ Successfully synced ${syncedProducts?.length || productRows.length} products with details & images into public.products!`);
  return {
    success: true,
    artisansCount: syncedArtisans?.length || artisanRows.length,
    productsCount: syncedProducts?.length || productRows.length,
    storageImagesCount: Object.keys(imageUrlMap).length
  };
}

// Auto-run if executed directly
if (process.argv[1]?.includes('sync-catalog')) {
  syncAllCatalogToSupabase()
    .then(res => {
      console.log('🎉 Catalog sync finished:', res);
      process.exit(0);
    })
    .catch(err => {
      console.error('💥 Catalog sync failed:', err);
      process.exit(1);
    });
}
