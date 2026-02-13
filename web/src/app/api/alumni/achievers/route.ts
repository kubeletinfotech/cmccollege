import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import AlumniAchiever from '@/models/AlumniAchiever';
import ImageKit from 'imagekit';

async function dbConnect() {
    const mongodbUri = process.env.MONGODB_URI;
    if (!mongodbUri) {
        throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }

    if (mongoose.connection.readyState >= 1) return;
    return mongoose.connect(mongodbUri);
}

// Initialize ImageKit
const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || '',
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || '',
});

export async function GET() {
    try {
        await dbConnect();
        const achievers = await AlumniAchiever.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: achievers });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to fetch achievers' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const achiever = await AlumniAchiever.create(body);
        return NextResponse.json({ success: true, data: achiever }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to create achiever' }, { status: 500 });
    }
}
