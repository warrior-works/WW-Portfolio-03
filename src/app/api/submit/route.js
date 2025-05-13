import { adminEmail, userEmail } from '@/lib/userEmail';

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

        // Simulate form submission success
        return new Response(JSON.stringify({
            message: 'Form submitted successfully!',
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