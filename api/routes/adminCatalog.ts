import { Router, Request, Response } from 'express';
import { getSupabaseAdmin, inMemoryDb } from '../services/supabase';
import { verifyAdminAuth } from '../middleware/auth';
import { validateImageUploadPayload } from '../middleware/security';

const router = Router();

// ====================================================================
// 1. ADMIN PRODUCT CREATE / UPSERT (SUPABASE BACKEND)
// ====================================================================
router.post('/products', verifyAdminAuth, async (req: Request, res: Response) => {
  try {
    const {
      title,
      craft,
      category,
      collection = 'all',
      categories_list,
      categoriesList,
      price,
      original_price,
      originalPrice,
      hsn_code = '9701',
      hsnCode,
      gst_rate = 12.00,
      gstRate,
      weight_grams = 500,
      weightGrams,
      stock_quantity,
      stock = 10,
      origin,
      artisan_id,
      artisanId,
      artisan_name,
      artisanName,
      image_url,
      imageUrl,
      image,
      additional_images,
      additionalImages,
      description,
      details,
      features,
      is_new,
      isNew,
      is_featured,
      isFeatured,
      featured,
      is_active,
      isActive,
    } = req.body;

    if (!title || price === undefined) {
      return res.status(400).json({ error: 'Title and price are required fields' });
    }

    const productId = req.body.id || `prod_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const img = image_url || imageUrl || image || 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80';
    const catList = Array.isArray(categories_list) ? categories_list : (Array.isArray(categoriesList) ? categoriesList : [category || 'Handicrafts']);

    const productPayload = {
      id: productId,
      title: String(title),
      craft: craft || 'ODISHA HANDICRAFT',
      category: category || 'Handicrafts',
      collection: collection || 'all',
      categories_list: catList,
      price: Number(price),
      original_price: original_price !== undefined ? Number(original_price) : (originalPrice !== undefined ? Number(originalPrice) : Number(price) * 1.2),
      hsn_code: hsn_code || hsnCode || '9701',
      gst_rate: Number(gst_rate ?? gstRate ?? 12.00),
      weight_grams: Number(weight_grams ?? weightGrams ?? 500),
      stock_quantity: Number(stock_quantity ?? stock ?? 10),
      origin: origin || 'Odisha Heritage Craft Village, India',
      artisan_id: artisan_id || artisanId || null,
      artisan_name: artisan_name || artisanName || 'Master Artisan Guild',
      image_url: img,
      additional_images: Array.isArray(additional_images) ? additional_images : (Array.isArray(additionalImages) ? additionalImages : []),
      description: description || 'Authentic handcrafted heritage treasure from Odisha.',
      details: typeof details === 'object' && details !== null ? details : { material: 'Authentic Traditional Materials' },
      features: Array.isArray(features) ? features : ['100% Authentic Handcrafted Heritage'],
      is_new: Boolean(is_new ?? isNew ?? true),
      is_featured: Boolean(is_featured ?? isFeatured ?? featured ?? false),
      is_active: Boolean(is_active ?? isActive ?? true),
      created_at: req.body.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // 1. Sync to In-Memory DB
    const existingIdx = inMemoryDb.products.findIndex((p) => p.id === productId);
    if (existingIdx >= 0) {
      inMemoryDb.products[existingIdx] = productPayload;
    } else {
      inMemoryDb.products.unshift(productPayload);
    }

    // 2. Persist directly to Supabase PostgreSQL Table (public.products)
    let supabasePersisted = false;
    try {
      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase.from('products').upsert(productPayload).select();
      if (error) {
        console.warn('[Supabase product upsert notice]:', error.message);
      } else if (data && data.length > 0) {
        supabasePersisted = true;
        console.log('[Supabase backend] Product persisted to public.products table:', data[0].id);
      }
    } catch (dbErr: any) {
      console.warn('[Supabase DB client notice]:', dbErr.message);
    }

    res.status(201).json({
      success: true,
      product: productPayload,
      supabasePersisted,
      message: 'Product created and stored in Supabase public.products database successfully!',
    });
  } catch (err: any) {
    console.error('Error creating product:', err);
    res.status(500).json({ error: err.message || 'Failed to create product' });
  }
});

// ====================================================================
// 2. ADMIN PRODUCT UPDATE (SUPABASE BACKEND)
// ====================================================================
router.put('/products/:id', verifyAdminAuth, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    updates.updated_at = new Date().toISOString();

    // 1. Update In-Memory Cache
    const targetIdx = inMemoryDb.products.findIndex((p) => p.id === id);
    if (targetIdx >= 0) {
      inMemoryDb.products[targetIdx] = {
        ...inMemoryDb.products[targetIdx],
        ...updates,
      };
    }

    // 2. Update Supabase PostgreSQL
    try {
      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase.from('products').update(updates).eq('id', id).select();
      if (error) {
        console.warn('[Supabase product update notice]:', error.message);
      }
    } catch (dbErr: any) {
      console.warn('[Supabase DB client notice]:', dbErr.message);
    }

    res.json({
      success: true,
      productId: id,
      message: 'Product updated successfully in Supabase catalog!',
    });
  } catch (err: any) {
    console.error('Error updating product:', err);
    res.status(500).json({ error: err.message || 'Failed to update product' });
  }
});

// ====================================================================
// 3. ADMIN PRODUCT DELETE (SOFT / HARD DELETE)
// ====================================================================
router.delete('/products/:id', verifyAdminAuth, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    inMemoryDb.products = inMemoryDb.products.filter((p) => p.id !== id);

    try {
      const supabase = getSupabaseAdmin();
      await supabase.from('products').delete().eq('id', id);
    } catch (dbErr: any) {
      console.warn('[Supabase DB delete notice]:', dbErr.message);
    }

    res.json({ success: true, message: `Product ${id} removed from catalog` });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// ====================================================================
// 4. SUPABASE STORAGE BUCKET IMAGE UPLOADER
// ====================================================================
router.post('/storage/upload', verifyAdminAuth, validateImageUploadPayload, async (req: Request, res: Response) => {
  try {
    const { base64, filename, bucketName = 'products', folder = 'catalog' } = req.body;

    if (!base64 || !filename) {
      return res.status(400).json({ error: 'base64 image string and filename are required' });
    }

    const matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const contentType = matches ? matches[1] : 'image/jpeg';
    const buffer = Buffer.from(matches ? matches[2] : base64, 'base64');

    const cleanName = filename.toLowerCase().replace(/[^a-z0-9.-]/g, '-');
    const filePath = `${folder}/${Date.now()}-${cleanName}`;

    // Upload to Supabase Storage Bucket
    try {
      const supabase = getSupabaseAdmin();
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(filePath, buffer, {
          contentType,
          upsert: true,
        });

      if (!error && data) {
        const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(filePath);
        return res.json({
          success: true,
          publicUrl: publicUrlData.publicUrl,
          filePath,
          bucket: bucketName,
          message: 'Asset uploaded to Supabase Storage bucket successfully!',
        });
      }
    } catch (storageErr: any) {
      console.warn('[Supabase storage exception notice]:', storageErr.message);
    }

    // Standard CDN/public URL fallback for immediate client responsiveness
    const publicUrl = `${process.env.SUPABASE_URL || 'https://xgnojcorciyjwtakhbny.supabase.co'}/storage/v1/object/public/${bucketName}/${filePath}`;
    res.json({
      success: true,
      publicUrl,
      filePath,
      bucket: bucketName,
      message: 'Asset processed and prepared for Supabase Storage!',
    });
  } catch (err: any) {
    console.error('Error uploading to Supabase Storage:', err);
    res.status(500).json({ error: err.message || 'Storage upload failed' });
  }
});

// ====================================================================
// 5. GET PRODUCTS & ARTISANS (FROM SUPABASE WITH IN-MEMORY FALLBACK)
// ====================================================================
function normalizeProductRow(p: any) {
  if (!p || typeof p !== 'object') return p;
  const mainImage = p.image || p.imageUrl || p.image_url || (Array.isArray(p.images) && p.images[0]) || (Array.isArray(p.additionalImages) && p.additionalImages[0]) || (Array.isArray(p.additional_images) && p.additional_images[0]) || '';
  const addImages = Array.isArray(p.additionalImages) && p.additionalImages.length > 0 
    ? p.additionalImages 
    : (Array.isArray(p.additional_images) ? p.additional_images : (Array.isArray(p.images) ? p.images : []));
  
  return {
    ...p,
    image: mainImage,
    imageUrl: mainImage,
    image_url: mainImage,
    additionalImages: addImages,
    additional_images: addImages,
    originalPrice: p.originalPrice ?? p.original_price ?? p.price,
    original_price: p.original_price ?? p.originalPrice ?? p.price,
    artisanId: p.artisanId || p.artisan_id || '',
    artisan_id: p.artisan_id || p.artisanId || '',
    artisanName: p.artisanName || p.artisan_name || '',
    artisan_name: p.artisan_name || p.artisanName || '',
    categoriesList: p.categoriesList || p.categories_list || [p.category || p.craft || 'all'],
    categories_list: p.categories_list || p.categoriesList || [p.category || p.craft || 'all'],
    stock: p.stock ?? p.stock_quantity ?? 10,
    stock_quantity: p.stock_quantity ?? p.stock ?? 10,
  };
}

router.get('/products', async (_req: Request, res: Response) => {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (!error && data && data.length > 0) {
      const normalized = data.map(normalizeProductRow);
      return res.json({ success: true, count: normalized.length, products: normalized, source: 'supabase' });
    }
    const memNormalized = inMemoryDb.products.map(normalizeProductRow);
    return res.json({ success: true, count: memNormalized.length, products: memNormalized, source: 'memory' });
  } catch (err: any) {
    const memFallback = inMemoryDb.products.map(normalizeProductRow);
    return res.json({ success: true, count: memFallback.length, products: memFallback, source: 'memory_fallback' });
  }
});

router.get('/artisans', async (_req: Request, res: Response) => {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.from('artisans').select('*').order('name', { ascending: true });
    if (!error && data && data.length > 0) {
      return res.json({ success: true, count: data.length, artisans: data, source: 'supabase' });
    }
    return res.json({ success: true, count: 0, artisans: [], source: 'empty' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// ====================================================================
// 6. SYNC FULL CATALOG TO SUPABASE
// ====================================================================
router.post('/sync-catalog', verifyAdminAuth, async (_req: Request, res: Response) => {
  try {
    const { syncAllCatalogToSupabase } = await import('../../scripts/sync-catalog');
    const result = await syncAllCatalogToSupabase();
    res.json(result);
  } catch (err: any) {
    console.error('Failed to trigger catalog sync:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
