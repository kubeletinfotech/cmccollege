import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import JobVacancy from "@/models/JobVacancy";
import { ensureAdmin } from "@/lib/ensureAdmin";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await ensureAdmin();

        const { id } = await params;
        const body = await req.json();

        await connectToDatabase();
        const vacancy = await JobVacancy.findByIdAndUpdate(id, body, { new: true, runValidators: true });

        if (!vacancy) {
            return NextResponse.json({ success: false, error: "Vacancy not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: vacancy }, { status: 200 });
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ success: false, error: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        console.error("Error updating vacancy:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await ensureAdmin();

        const { id } = await params;
        await connectToDatabase();

        const deletedVacancy = await JobVacancy.findByIdAndDelete(id);

        if (!deletedVacancy) {
            return NextResponse.json({ success: false, error: "Vacancy not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} }, { status: 200 });
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ success: false, error: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        console.error("Error deleting vacancy:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
