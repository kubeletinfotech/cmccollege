import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: string;
        };
    }
}

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isSyncRoute = createRouteMatcher(["/api/sync-user"]);

export default clerkMiddleware(async (auth, req) => {
    // Protect all routes starting with `/admin`
    if (isAdminRoute(req)) {
        const { userId, sessionClaims, redirectToSignIn } = await auth();

        // Redirect to sign-in if not authenticated
        if (!userId) {
            return redirectToSignIn();
        }

        // Check for admin role in metadata
        // OPTION A: Fast (reads from JWT). Requires Clerk Dashboard configuration:
        // { "metadata": "{{user.public_metadata}}" }
        let role = (sessionClaims as any)?.metadata?.role;

        // OPTION B: Fallback (fetches from API). Works without configuration but is slower.
        if (!role) {
            const { clerkClient } = await import('@clerk/nextjs/server');
            const client = await clerkClient();
            const user = await client.users.getUser(userId);
            role = (user.publicMetadata as any)?.role;
        }

        if (role !== 'admin') {
            return NextResponse.redirect(new URL('/', req.url));
        }
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
