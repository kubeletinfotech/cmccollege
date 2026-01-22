import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Announcement from '@/models/Announcements';

export async function GET() {
    try {
        await connectDB();

        const announcements = await Announcement.find({}).sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            data: announcements,
        });
    } catch (error: any) {
        console.error('Error fetching announcements:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch announcements',
            },
            { status: 500 }
        );
    }
}
