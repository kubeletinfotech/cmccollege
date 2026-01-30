import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import CareerApplication from '@/models/CareerApplication';
import { currentUser } from '@clerk/nextjs/server';

export async function GET() {
    try {
        const user = await currentUser();

        // Check if user is admin (simple check based on metadata or email if needed, 
        // but here we just check if logged in for now, ideally strictly check role)
        if (!user) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // In a real app, strict role check: 
        // if (user.publicMetadata.role !== 'admin') return NextResponse.json({ message: 'Forbidden' }, { status: 403 });

        await connectDB();

        const count = await CareerApplication.countDocuments({ seen: false });

        return NextResponse.json({ count });
    } catch (error) {
        console.error('Error fetching unseen count:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
