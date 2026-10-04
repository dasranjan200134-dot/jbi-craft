export default function handler(req: any, res: any) {
  res.status(200).json({
    status: 'ok',
    environment: 'vercel',
    timestamp: new Date().toISOString(),
    service: 'JBI Craft API'
  });
}
