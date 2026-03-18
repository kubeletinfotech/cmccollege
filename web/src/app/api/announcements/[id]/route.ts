import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Announcement from '@/models/Announcements';
import { ensureAdmin } from '@/lib/ensureAdmin';

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await ensureAdmin();

        const { id } = await params;
        await connectDB();
        const deleted = await Announcement.findByIdAndDelete(id);

        if (!deleted) {
            return NextResponse.json({ message: 'Announcement not found' }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: 'Announcement deleted successfully',
        });
    } catch (error: any) {
        console.error('Error deleting announcement:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to delete announcement' },
            { status: 500 }
        );
    }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await ensureAdmin();

        const { id } = await params;
        const body = await req.json();
        const { title, description, isImportant } = body;

        await connectDB();
        
        const updated = await Announcement.findByIdAndUpdate(
            id,
            { title, description, isImportant },
            { new: true, runValidators: true }
        );

        if (!updated) {
            return NextResponse.json({ message: 'Announcement not found' }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: updated,
            message: 'Announcement updated successfully',
        });
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ message: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        console.error('Error updating announcement:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to update announcement' },
            { status: 500 }
        );
    }
}
