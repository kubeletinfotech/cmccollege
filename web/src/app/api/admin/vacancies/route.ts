import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import JobVacancy from "@/models/JobVacancy";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        await connectToDatabase();
        const vacancies = await JobVacancy.find().sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: vacancies });
    } catch (error) {
        console.error("Error fetching vacancies:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch job vacancies" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        await connectToDatabase();
        const vacancy = await JobVacancy.create(body);

        return NextResponse.json({ success: true, data: vacancy }, { status: 201 });
    } catch (error: any) {
        console.error("Error creating vacancy:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
