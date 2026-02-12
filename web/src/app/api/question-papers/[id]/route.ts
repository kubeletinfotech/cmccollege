import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import QuestionPaper from '@/models/QuestionPaper';
import { ensureAdmin } from '@/lib/ensureAdmin';

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await ensureAdmin();
        const { id } = await params;
        const body = await req.json();

        await connectDB();
        const updated = await QuestionPaper.findByIdAndUpdate(id, body, { new: true });

        return NextResponse.json({
            success: true,
            data: updated,
        });
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ message: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await ensureAdmin();
        const { id } = await params;

        await connectDB();
        await QuestionPaper.findByIdAndDelete(id);

        return NextResponse.json({
            success: true,
            message: 'Deleted successfully',
        });
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ message: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        return NextResponse.json({ success: false, error: 'Failed' }, { status: 500 });
    }
}
