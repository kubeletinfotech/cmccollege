import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import QuestionPaper from '@/models/QuestionPaper';
import { ensureAdmin } from '@/lib/ensureAdmin';

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const dept = searchParams.get('department');
        const sem = searchParams.get('semester');

        const filter: any = {};
        if (dept && dept !== 'All') filter.department = dept;
        if (sem && sem !== 'All') filter.semester = sem;

        const questions = await QuestionPaper.find(filter).sort({ createdAt: -1 });
        return NextResponse.json({
            success: true,
            data: questions,
        });
    } catch (error: any) {
        console.error('Error fetching question papers:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch question papers' },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        await ensureAdmin();
        const body = await req.json();

        await connectDB();
        const questionPaper = await QuestionPaper.create(body);

        return NextResponse.json({
            success: true,
            data: questionPaper,
        });
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ message: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        console.error('Error creating question paper:', error);
        return NextResponse.json(
            { success: false, error: 'Failed' },
            { status: 500 }
        );
    }
}
