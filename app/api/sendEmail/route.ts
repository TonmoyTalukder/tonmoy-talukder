import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { senderEmail, message } = await req.json();

        // Define the email HTML directly
        const emailHtml = `
            <div>
                <p><strong>From:</strong> ${senderEmail}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            </div>
        `;

        // Send the email
        const emailResponse = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "tonmoytalukder2000@gmail.com",
            subject: "Contact Form Message",
            html: emailHtml,
        });

        return NextResponse.json({ success: true, emailResponse });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }
}
