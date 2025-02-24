import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;

      await mailService.send({
        to: 'rahulankam1234@gmail.com',
        from: 'your-verified-sender@yourdomain.com', // Must be verified with SendGrid
        subject: `Portfolio Contact Form: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.json({ success: true });
    } catch (error) {
      console.error('Email error:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}