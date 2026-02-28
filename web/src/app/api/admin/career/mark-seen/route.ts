import { NextResponse } from "next/server";

// Fallback mock endpoint to resolve 404s when the bell icon is clicked
export async function PATCH() {
    return NextResponse.json({ success: true, count: 0 });
}
