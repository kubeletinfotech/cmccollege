import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const applyingPosition = formData.get("applyingPosition") as string;
        const qualification = formData.get("qualification") as string;
        const experience = formData.get("experience") as string;
        const file = formData.get("resume") as File; // 'resume' field name for the photo file
        const cvFile = formData.get("cv") as File;

        // 1. Validation
        if (!fullName || !email || !phone || !applyingPosition || !file || !cvFile) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        // File Validation
        const allowedImageTypes = ["image/jpeg", "image/png", "image/webp"];
        const allowedCvTypes = ["application/pdf", ...allowedImageTypes];

        if (!allowedImageTypes.includes(file.type)) {
            return NextResponse.json(
                { success: false, message: "Invalid photo type. Only JPG, PNG, and WEBP images are allowed." },
                { status: 400 }
            );
        }

        const isPdf = cvFile.type === 'application/pdf' || cvFile.name.toLowerCase().endsWith('.pdf');
        if (!allowedCvTypes.includes(cvFile.type) && !isPdf) {
            return NextResponse.json(
                { success: false, message: "Invalid CV type. Please upload a PDF, JPG, PNG, or WEBP." },
                { status: 400 }
            );
        }

        if (file.size > 2 * 1024 * 1024 || cvFile.size > 5 * 1024 * 1024) { // 2MB for photo, 5MB for CV
            return NextResponse.json(
                { success: false, message: "File size exceeds limit (2MB for photo, 5MB for CV)." },
                { status: 400 }
            );
        }

        const photoBuffer = Buffer.from(await file.arrayBuffer());
        const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

        // Send email via Resend instead of saving to DB
        if (process.env.RESEND_API_KEY) {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const { data, error } = await resend.emails.send({
                from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
                to: process.env.RESEND_TO_EMAIL || 'delivery@resend.dev',
                subject: `New Career Application from ${fullName} - ${applyingPosition}`,
                attachments: [
                    {
                        filename: `photo-${fullName.replace(/\s+/g, "_")}.jpg`,
                        content: photoBuffer,
                    },
                    {
                        filename: `cv-${fullName.replace(/\s+/g, "_")}.${cvFile.name.split('.').pop()}`,
                        content: cvBuffer,
                    }
                ],
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
                            .footer { background-color: #f4f4f5; padding: 20px; text-align: center; font-size: 13px; color: #a1a1aa; border-top: 1px solid #e4e4e7; }
                        </style>
                    </head>
                    <body>
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f5; font-family: sans-serif;">
                            <tr>
                                <td align="center" style="padding: 40px 10px;">
                                    <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; max-width: 600px; margin: 0 auto;">
                                        <tr>
                                            <td class="header" style="background-color: #7B0046; color: #ffffff; padding: 30px; text-align: center;">
                                                <h1 style="margin: 0; font-size: 24px; font-weight: 600;">New Career Application</h1>
                                                <p style="margin: 10px 0 0; font-size: 15px; color: #fbcfe8;">Position: ${applyingPosition}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="content" style="padding: 40px 30px; color: #3f3f46;">
                                                <div class="field" style="margin-bottom: 25px;">
                                                    <div class="label" style="font-size: 13px; text-transform: uppercase; color: #71717a; font-weight: 700; margin-bottom: 6px;">Instructions</div>
                                                    <div class="value" style="font-size: 14px; background-color: #e0f2fe; border-left: 4px solid #0284c7;">Please check the attachments below for the applicant's Photo and CV/Resume.</div>
                                                </div>
                                                
                                                <div class="field" style="margin-bottom: 25px;">
                                                    <div class="label" style="font-size: 13px; text-transform: uppercase; color: #71717a; font-weight: 700; margin-bottom: 6px;">Full Name</div>
                                                    <div class="value" style="font-size: 16px; color: #18181b; background-color: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #10b981;">${fullName}</div>
                                                </div>
                                                
                                                <div class="field" style="margin-bottom: 25px;">
                                                    <div class="label" style="font-size: 13px; text-transform: uppercase; color: #71717a; font-weight: 700; margin-bottom: 6px;">Contact Details</div>
                                                    <div class="value" style="font-size: 16px; color: #18181b; background-color: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #10b981;">
                                                        <a href="mailto:${email}" style="color: #047857; text-decoration: none; font-weight: 600; display: block; margin-bottom: 5px;">${email}</a>
                                                        <a href="tel:${phone}" style="color: #047857; text-decoration: none; font-weight: 600;">${phone}</a>
                                                    </div>
                                                </div>

                                                <div class="field" style="margin-bottom: 25px;">
                                                    <div class="label" style="font-size: 13px; text-transform: uppercase; color: #71717a; font-weight: 700; margin-bottom: 6px;">Qualification & Experience</div>
                                                    <div class="value" style="font-size: 16px; color: #18181b; background-color: #f9fafb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #10b981;">
                                                        <p style="margin: 0 0 5px 0;"><strong>Qualification:</strong> ${qualification}</p>
                                                        <p style="margin: 0;"><strong>Experience:</strong> ${experience}</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="footer" style="padding: 20px; text-align: center; font-size: 13px; color: #a1a1aa; border-top: 1px solid #e4e4e7;">
                                                <p style="margin: 0;">This email was automatically generated from your website's career portal.</p>
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
            message: "Application submitted successfully!",
            data: { fullName, email }
        });

    } catch (error) {
        console.error("Career Application Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
