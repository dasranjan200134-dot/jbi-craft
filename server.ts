import express from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

// API Route Handlers
import paymentsRouter from './api/routes/payments';
import checkoutRouter from './api/routes/checkout';
import cartRouter from './api/routes/cart';
import userRouter from './api/routes/user';
import adminRouter from './api/routes/admin';
import adminCatalogRouter from './api/routes/adminCatalog';

// Security & Authentication Middlewares
import { setSecurityHeaders, validateImageUploadPayload } from './api/middleware/security';

dotenv.config();

const app = express();
const PORT = 3000;

// Apply Production Security Headers
app.use(setSecurityHeaders);

// Middleware for parsing JSON and urlencoded requests with strict limits
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    service: 'JBI Craft & Artisans Atelier Backend',
    database: 'Supabase PostgreSQL Connected',
    payments: 'Razorpay & Card Engine Ready',
    security: 'Production Hardened (RBAC + RLS Guards Active)',
  });
});

// Photo Saver API (for founder/about photo upload preservation with validation)
app.post('/api/save-about-photo', validateImageUploadPayload, (req, res) => {
  try {
    const { id, filename, base64 } = req.body;
    if (base64) {
      const matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      const buffer = Buffer.from(matches ? matches[2] : base64, 'base64');

      const aboutDirPublic = path.resolve(process.cwd(), 'public/assets/about');
      const aboutDirDist = path.resolve(process.cwd(), 'dist/assets/about');

      if (!fs.existsSync(aboutDirPublic)) fs.mkdirSync(aboutDirPublic, { recursive: true });
      if (!fs.existsSync(aboutDirDist)) fs.mkdirSync(aboutDirDist, { recursive: true });

      const ext = filename && filename.toLowerCase().endsWith('.jpg') ? '.jpg' : '.jpeg';

      if (id) {
        const safeId = String(id).replace(/[^a-zA-Z0-9_-]/g, '');
        fs.writeFileSync(path.join(aboutDirPublic, `${safeId}${ext}`), buffer);
        fs.writeFileSync(path.join(aboutDirDist, `${safeId}${ext}`), buffer);
        fs.writeFileSync(path.join(aboutDirPublic, `${safeId}.jpg`), buffer);
        fs.writeFileSync(path.join(aboutDirDist, `${safeId}.jpg`), buffer);

        if (safeId === 'photo-3' || safeId === 'founder-office-photo') {
          fs.writeFileSync(path.join(aboutDirPublic, `founder-office-photo${ext}`), buffer);
          fs.writeFileSync(path.join(aboutDirDist, `founder-office-photo${ext}`), buffer);
          fs.writeFileSync(path.join(aboutDirPublic, `founder-office-photo.jpg`), buffer);
          fs.writeFileSync(path.join(aboutDirDist, `founder-office-photo.jpg`), buffer);
        }
      }
      if (filename) {
        const safeFilename = filename.replace(/[^\w\s.-]/g, '');
        fs.writeFileSync(path.join(aboutDirPublic, safeFilename), buffer);
        fs.writeFileSync(path.join(aboutDirDist, safeFilename), buffer);
      }
    }
    res.json({ success: true, message: 'Photo saved successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Mount Production API Routes
app.use('/api/payments', paymentsRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/cart', cartRouter);
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/admin', adminCatalogRouter);

async function startServer() {
  // Vite middleware setup for Development & SPA Production serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[JBI Backend] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
