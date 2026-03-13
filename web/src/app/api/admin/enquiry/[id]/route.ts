import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { ensureAdmin } from "@/lib/ensureAdmin";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await ensureAdmin();

        const { id } = await params;

        await connectDB();

        const enquiry = await Enquiry.findByIdAndDelete(id);

        if (!enquiry) {
            return NextResponse.json({ message: "Enquiry not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Enquiry deleted successfully" });
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ message: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        console.error("Error deleting enquiry:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
