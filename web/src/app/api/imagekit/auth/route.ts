import { NextResponse } from 'next/server';
import ImageKit from 'imagekit';
import { ensureAdmin } from '@/lib/ensureAdmin';

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || '',
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || '',
});

export async function GET() {
    try {
        // Protect this endpoint so only admins can get auth parameters for uploading
        await ensureAdmin();

        const authenticationParameters = imagekit.getAuthenticationParameters();
        return NextResponse.json(authenticationParameters);
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ message: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        console.error('ImageKit auth error:', error);
        return NextResponse.json(
            { error: 'Failed to generate auth parameters' },
            { status: 500 }
        );
    }
}

