import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function photoSaverPlugin() {
  return {
    name: 'photo-saver-plugin',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url && req.url.startsWith('/assets/')) {
          const cleanUrl = req.url.split('?')[0];
          const relPath = cleanUrl.replace(/^\/assets\//, '');
          const publicFile = path.resolve(__dirname, 'public/assets', relPath);
          const distFile = path.resolve(__dirname, 'dist/assets', relPath);
          const targetFile = fs.existsSync(publicFile) ? publicFile : (fs.existsSync(distFile) ? distFile : null);
          if (targetFile) {
            const ext = path.extname(targetFile).toLowerCase();
            let mimeType = 'application/octet-stream';
            if (ext === '.js') mimeType = 'text/javascript';
            else if (ext === '.css') mimeType = 'text/css';
            else if (ext === '.png') mimeType = 'image/png';
            else if (ext === '.svg') mimeType = 'image/svg+xml';
            else if (ext === '.webp') mimeType = 'image/webp';
            else if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
            
            res.setHeader('Content-Type', mimeType);
            res.setHeader('Cache-Control', 'no-cache');
            return fs.createReadStream(targetFile).pipe(res);
          }
        }
        if (req.url === '/api/save-about-photo' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const { id, filename, base64 } = data;
              if (base64) {
                const matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
                const buffer = Buffer.from(matches ? matches[2] : base64, 'base64');
                
                const aboutDirPublic = path.resolve(__dirname, 'public/assets/about');
                const aboutDirDist = path.resolve(__dirname, 'dist/assets/about');
                if (!fs.existsSync(aboutDirPublic)) fs.mkdirSync(aboutDirPublic, { recursive: true });
                if (!fs.existsSync(aboutDirDist)) fs.mkdirSync(aboutDirDist, { recursive: true });

                const ext = filename && filename.toLowerCase().endsWith('.jpg') ? '.jpg' : '.jpeg';
                
                if (id) {
                  fs.writeFileSync(path.join(aboutDirPublic, `${id}${ext}`), buffer);
                  fs.writeFileSync(path.join(aboutDirDist, `${id}${ext}`), buffer);
                  fs.writeFileSync(path.join(aboutDirPublic, `${id}.jpg`), buffer);
                  fs.writeFileSync(path.join(aboutDirDist, `${id}.jpg`), buffer);

                  if (id === 'photo-3' || id === 'founder-office-photo') {
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
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoSaverPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
