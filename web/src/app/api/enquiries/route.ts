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
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; margin: 0; padding: 0; }
                            .container { max-w: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
                            .header { background-color: #7B0046; color: #ffffff; padding: 30px; text-align: center; }
                            .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px; }
                            .content { padding: 40px 30px; color: #3f3f46; }
                            .field { margin-bottom: 25px; }
                            .label { font-size: 13px; text-transform: uppercase; color: #71717a; font-weight: 700; letter-spacing: 1px; margin-bottom: 6px; }
                            .value { font-size: 16px; color: #18181b; background-color: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #10b981; }
                            .message-value { font-size: 15px; color: #18181b; background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; line-height: 1.6; white-space: pre-wrap; }
                            .footer { background-color: #f4f4f5; padding: 20px; text-align: center; font-size: 13px; color: #a1a1aa; border-top: 1px solid #e4e4e7; }
                        </style>
                    </head>
                    <body>
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f5; font-family: sans-serif;">
                            <tr>
                                <td align="center" style="padding: 40px 10px;">
                                    <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); max-width: 600px; margin: 0 auto;">
                                        <tr>
                                            <td class="header" style="background-color: #7B0046; color: #ffffff; padding: 30px; text-align: center;">
                                                <h1 style="margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Enquiry Received</h1>
                                                <p style="margin: 10px 0 0; font-size: 15px; color: #fbcfe8; opacity: 0.9;">Via CM College Website Contact Form</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="content" style="padding: 40px 30px; color: #3f3f46;">
                                                <div class="field" style="margin-bottom: 25px;">
                                                    <div class="label" style="font-size: 13px; text-transform: uppercase; color: #71717a; font-weight: 700; letter-spacing: 1px; margin-bottom: 6px;">Full Name</div>
                                                    <div class="value" style="font-size: 16px; color: #18181b; background-color: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #10b981;">${name}</div>
                                                </div>
                                                
                                                <div class="field" style="margin-bottom: 25px;">
                                                    <div class="label" style="font-size: 13px; text-transform: uppercase; color: #71717a; font-weight: 700; letter-spacing: 1px; margin-bottom: 6px;">Phone Number</div>
                                                    <div class="value" style="font-size: 16px; color: #18181b; background-color: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #10b981;">
                                                        <a href="tel:${phone}" style="color: #047857; text-decoration: none; font-weight: 600;">${phone}</a>
                                                    </div>
                                                </div>
                                                
                                                <div class="field" style="margin-bottom: 25px;">
                                                    <div class="label" style="font-size: 13px; text-transform: uppercase; color: #71717a; font-weight: 700; letter-spacing: 1px; margin-bottom: 6px;">Email Address</div>
                                                    <div class="value" style="font-size: 16px; color: #18181b; background-color: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #10b981;">
                                                        ${email ? `<a href="mailto:${email}" style="color: #047857; text-decoration: none; font-weight: 600;">${email}</a>` : '<em>Not provided</em>'}
                                                    </div>
                                                </div>
                                                
                                                <div class="field" style="margin-bottom: 10px;">
                                                    <div class="label" style="font-size: 13px; text-transform: uppercase; color: #71717a; font-weight: 700; letter-spacing: 1px; margin-bottom: 6px;">Message</div>
                                                    <div class="message-value" style="font-size: 15px; color: #18181b; background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="footer" style="background-color: #f4f4f5; padding: 20px; text-align: center; font-size: 13px; color: #a1a1aa; border-top: 1px solid #e4e4e7;">
                                                <p style="margin: 0;">This email was automatically generated from your website's contact form.</p>
                                                <p style="margin: 5px 0 0;">&copy; ${new Date().getFullYear()} CM College Admin System</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </body>
                    </html>
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
