import { Resend } from 'resend';

// This pulls the secret key added to Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Lingxi Portfolio Website <onboarding@resend.dev>', // Resend's default test sender
      to: ['lingxizhou.dev@gmail.com'], // CHANGE THIS to your actual email
      subject: `New message from ${name}`,
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}