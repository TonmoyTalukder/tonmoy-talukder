import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

// Force Next.js to treat this API route as dynamic
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDING_EMAIL,
        pass: process.env.SENDING_APP_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"Portfolio Mail" <${email}>`,
      to: "tonmoytalukder2000@gmail.com",
      subject: subject,
      text: `Message from: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Message sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
}
