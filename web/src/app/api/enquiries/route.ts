import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';
import { ensureAdmin } from '@/lib/ensureAdmin';
import { Resend } from 'resend';

export async function GET() {
    try {
        await ensureAdmin();

        await connectDB();
        const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
        return NextResponse.json({
            success: true,
            data: enquiries,
        });
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ message: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        console.error('Error fetching enquiries:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch enquiries' },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, phone, email, message } = body;

        // Basic validation
        if (!name || !phone || !message) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        await connectDB();
        const enquiry = await Enquiry.create({
            name,
            phone,
            email,
            message,
            status: 'Pending' // Explicitly set status to default
        });

        // Send email via Resend
        if (process.env.RESEND_API_KEY) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const { data, error } = await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
                to: process.env.RESEND_TO_EMAIL || 'delivery@resend.dev', // Fallback, normally you provide this in .env
                subject: `New Enquiry from ${name}`,
                html: `
                    <h2>New Enquiry Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email || 'Not provided'}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
            });

            if (error) {
                console.error('Error sending email with Resend:', error);
            } else {
                console.log('Successfully sent email with Resend:', data);
            }
        } else {
            console.log("No RESEND_API_KEY found, not sending email");
        }

        return NextResponse.json({
            success: true,
            data: enquiry,
        });
    } catch (error: any) {

        console.error('Error creating enquiry:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to create enquiry' },
            { status: 500 }
        );
    }
}
