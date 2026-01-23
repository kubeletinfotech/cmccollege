import { auth } from "@clerk/nextjs/server";

/**
 * Ensures the current user is an authenticated admin.
 * Throws an error if the user is not authenticated or not an admin.
 * 
 * @throws {Error} "Unauthorized" if no user is logged in
 * @throws {Error} "Forbidden" if user doesn't have the admin role
 */
export async function ensureAdmin() {
    const { userId, sessionClaims } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    let role = (sessionClaims as any)?.metadata?.role;

    // Fallback if metadata is not in session claims
    if (!role) {
        const { clerkClient } = await import("@clerk/nextjs/server");
        const client = await clerkClient();
        const user = await client.users.getUser(userId);
        role = (user.publicMetadata as any)?.role;
    }

    if (role !== "admin") {
        throw new Error("Forbidden");
    }

    return { userId, role };
}
