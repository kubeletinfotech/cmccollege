import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import JobVacancy from "@/models/JobVacancy";
import { ensureAdmin } from "@/lib/ensureAdmin";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        await ensureAdmin();
        await connectToDatabase();
        const vacancies = await JobVacancy.find().sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: vacancies });
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ success: false, error: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        console.error("Error fetching vacancies:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch job vacancies" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        await ensureAdmin();

        const body = await req.json();
        await connectToDatabase();
        const vacancy = await JobVacancy.create(body);

        return NextResponse.json({ success: true, data: vacancy }, { status: 201 });
    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ success: false, error: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        console.error("Error creating vacancy:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
