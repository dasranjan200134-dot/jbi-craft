import { Request, Response, NextFunction } from 'express';

const ALLOWED_IMAGE_MIMES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/svg+xml',
]);

const MAX_IMAGE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

/**
 * Validate and sanitize image uploads
 */
export function validateImageUploadPayload(req: Request, res: Response, next: NextFunction) {
  const { base64, filename } = req.body;

  if (!base64 || typeof base64 !== 'string') {
    return res.status(400).json({ error: 'Valid base64 image data is required' });
  }

  // Check approximate size (base64 is ~4/3 larger than binary)
  const approximateSizeBytes = (base64.length * 3) / 4;
  if (approximateSizeBytes > MAX_IMAGE_SIZE_BYTES) {
    return res.status(413).json({
      error: `File payload exceeds the maximum permitted limit of 10MB (Received: ${(approximateSizeBytes / (1024 * 1024)).toFixed(1)}MB)`,
    });
  }

  // Validate MIME type
  const match = base64.match(/^data:([A-Za-z-+\/]+);base64,/);
  if (match) {
    const mime = match[1].toLowerCase();
    if (!ALLOWED_IMAGE_MIMES.has(mime)) {
      return res.status(415).json({
        error: `Unsupported media type: ${mime}. Only JPEG, PNG, WebP, and SVG images are allowed.`,
      });
    }
  }

  // Sanitize filename against directory traversal
  if (filename) {
    req.body.filename = filename
      .replace(/\.\./g, '')
      .replace(/[^a-zA-Z0-9._-]/g, '_');
  }

  next();
}

/**
 * Security Headers Middleware (Production Hardening)
 */
export function setSecurityHeaders(req: Request, res: Response, next: NextFunction) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
}
