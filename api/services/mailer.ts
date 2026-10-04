import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const SMTP_HOST = process.env.SMTP_HOST || process.env.EMAIL_SERVER_HOST || '';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || process.env.EMAIL_SERVER_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || process.env.EMAIL_SERVER_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || process.env.EMAIL_SERVER_PASSWORD || '';
const SMTP_FROM = process.env.SMTP_FROM || process.env.EMAIL_FROM || '"JBI Crafts & Artisans" <orders@jbicrafts.com>';
const SMTP_SECURE = process.env.SMTP_SECURE === 'true' || SMTP_PORT === 465;

let transporter: nodemailer.Transporter | null = null;

if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
  try {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
    console.log(`[SMTP Mailer Initialized] Connected to ${SMTP_HOST}:${SMTP_PORT}`);
  } catch (err) {
    console.warn('[SMTP Mailer Init Warning]', err);
  }
}

export async function sendOtpEmail(toEmail: string, code: string, recipientName?: string): Promise<{ success: boolean; error?: string; messageId?: string }> {
  const cleanEmail = toEmail.trim().toLowerCase();
  const name = recipientName || 'Valued Patron';

  if (!transporter) {
    // If local SMTP is not configured in .env, log diagnostic note
    console.log(`[Email Dispatch Simulation] OTP ${code} generated for ${cleanEmail}. (Configure SMTP_HOST in .env for direct Node sending or check Supabase Auth Logs)`);
    return { success: true, messageId: 'simulated-local' };
  }

  try {
    const info = await transporter.sendMail({
      from: SMTP_FROM,
      to: cleanEmail,
      subject: `🏺 Your JBI Crafts Verification Code: ${code}`,
      text: `Hello ${name},\n\nYour 6-digit verification code is: ${code}\n\nThis code will expire in 10 minutes.\n\nWarm regards,\nJBI Crafts & Odisha Artisans Guild`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 24px; background: #fffaf4; border: 1px solid #fed7aa; rounded: 16px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #9a3412; font-family: Georgia, serif; margin: 0;">🏺 JBI Crafts & Artisans</h2>
            <p style="color: #78350f; font-size: 13px; margin: 4px 0 0 0;">Odisha Handcrafted Heritage Guild</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-radius: 12px; border: 1px solid #fde68a; text-align: center;">
            <h3 style="color: #1c1917; margin-top: 0;">Your Verification Code</h3>
            <p style="color: #57534e; font-size: 14px;">Please use the following 6-digit one-time confirmation code to complete your login or registration:</p>
            <div style="font-size: 32px; font-weight: bold; font-family: monospace; letter-spacing: 6px; color: #b85d18; background: #fff7ed; padding: 14px; border-radius: 8px; border: 1px dashed #ea580c; display: inline-block; margin: 16px 0;">
              ${code}
            </div>
            <p style="color: #a8a29e; font-size: 12px; margin-bottom: 0;">This code will expire in 10 minutes. If you did not request this code, please ignore this email.</p>
          </div>
        </div>
      `,
    });
    console.log(`[SMTP Email Sent] Dispatched to ${cleanEmail}, messageId: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (err: any) {
    console.error(`[SMTP Email Error] Failed sending to ${cleanEmail}:`, err.message);
    return { success: false, error: err.message };
  }
}
