import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import JobVacancy from "@/models/JobVacancy";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await params;
        const body = await req.json();

        await connectToDatabase();
        const vacancy = await JobVacancy.findByIdAndUpdate(id, body, { new: true, runValidators: true });

        if (!vacancy) {
            return NextResponse.json({ success: false, error: "Vacancy not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: vacancy }, { status: 200 });
    } catch (error: any) {
        console.error("Error updating vacancy:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        const { id } = await params;
        await connectToDatabase();

        const deletedVacancy = await JobVacancy.findByIdAndDelete(id);

        if (!deletedVacancy) {
            return NextResponse.json({ success: false, error: "Vacancy not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} }, { status: 200 });
    } catch (error: any) {
        console.error("Error deleting vacancy:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
