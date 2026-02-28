import { NextResponse } from "next/server";

// Career applications are currently sent via email only, not stored in the database.
// This mock endpoint prevents the 404 error from the AdminNotificationBell component.
export async function GET() {
    return NextResponse.json({ count: 0 });
}
