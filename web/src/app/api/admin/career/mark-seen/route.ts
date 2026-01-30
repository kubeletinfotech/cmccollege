import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import CareerApplication from '@/models/CareerApplication';
import { currentUser } from '@clerk/nextjs/server';

export async function PATCH() {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();

        await CareerApplication.updateMany({ seen: false }, { $set: { seen: true } });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error marking applications as seen:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
