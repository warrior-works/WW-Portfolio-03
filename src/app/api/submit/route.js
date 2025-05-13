import { adminEmail, userEmail } from '@/lib/userEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json().catch(e => {
            console.error('Failed to parse request body:', e);
            return null;
        });

        if (!body) {
            return new Response(JSON.stringify({ message: 'Invalid request body' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        console.log('Form data received:', { name, email, message });

        let userEmailResponse;
        try {
            userEmailResponse = await resend.emails.send({
                from: 'hello@resend.dev',
                to: email,
                subject: 'Thank you for contacting aashuu',
                html: userEmail(name),
            });
            console.log('Resend user email response:', userEmailResponse);
        } catch (emailError) {
            console.error('Error sending user email:', emailError);
        }

        let adminEmailResponse;
        try {
            adminEmailResponse = await resend.emails.send({
                from: 'hello@resend.dev',
                to: 'hellow.ashutosh@gmail.com',
                subject: 'New Form Submission',
                html: adminEmail(name, email, message),
            });
            console.log('Resend admin email response:', adminEmailResponse);
        } catch (emailError) {
            console.error('Error sending admin email:', emailError);
        }

        return new Response(JSON.stringify({
            message: 'Form submitted successfully!',
            userEmail: userEmailResponse ? 'Sent' : 'Failed',
            adminEmail: adminEmailResponse ? 'Sent' : 'Failed'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('API route error:', error);
        return new Response(JSON.stringify({
            message: 'Something went wrong.',
            error: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}