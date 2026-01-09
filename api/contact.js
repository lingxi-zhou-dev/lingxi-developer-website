import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // 1. Capture the captchaToken from the request body
  const { name, email, message, captchaToken } = req.body;

  // 2. Verify the token with Google
  const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`, {
    method: "POST",
  });
  const verifyData = await verifyRes.json();

  // 3. If Google says no, stop here
  if (!verifyData.success) {
    return res.status(400).json({ message: "Captcha verification failed" });
  }

  try {
    const data = await resend.emails.send({
      from: 'Lingxi Portfolio Website <onboarding@resend.dev>',
      to: ['lingxizhou.dev@gmail.com'],
      subject: `New message from ${name}`,
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}