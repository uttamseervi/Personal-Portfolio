// app/api/contact/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message } = body;

    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'seerviu690@gmail.com',
            subject: `New Contact Form Message from ${name}`,
            text: `Email: ${email}\n\nMessage:\n${message}`,
        });
        console.log("the messge is sent")

        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
            status: 200,
        });
    } catch (error) {
        console.error('Email failed:', error);
        return new Response(JSON.stringify({ message: 'Email failed to send.' }), {
            status: 500,
        });
    }
}
