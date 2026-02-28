import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import JobVacancy from "@/models/JobVacancy";

export async function GET() {
    try {
        await connectToDatabase();

        // Fetch only active job vacancies sorted by newest
        const vacancies = await JobVacancy.find({ isActive: true })
            .select("title department experienceRequired")
            .sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: vacancies });
    } catch (error) {
        console.error("Error fetching vacancies:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch job vacancies" },
            { status: 500 }
        );
    }
}
