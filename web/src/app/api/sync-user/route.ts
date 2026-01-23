import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { auth, currentUser, clerkClient, verifyToken } from '@clerk/nextjs/server';

export async function GET() {
    return NextResponse.json({ message: 'Sync API is alive' });
}

export async function POST(req: Request) {
    const authHeader = req.headers.get('authorization');

    try {
        const body = await req.json().catch(() => ({}));
        const { clerkId: bodyClerkId, email: bodyEmail } = body;

        await connectDB();

        const authData = await auth();
        let userId: string | null | undefined = authData.userId;

        // Fallback 1: Manual verifyToken
        if (!userId && authHeader) {
            const token = authHeader.replace('Bearer ', '');
            try {
                const verified = await verifyToken(token, {
                    secretKey: process.env.CLERK_SECRET_KEY
                });
                userId = verified.sub;
            } catch (err: any) {
                // Verification failed
            }
        }

        // Fallback 2: Development-only body trust
        if (!userId && process.env.NODE_ENV === 'development' && bodyClerkId) {
            userId = bodyClerkId;
        }

        // Fallback 3: currentUser()
        if (!userId) {
            const userDetails = await currentUser();
            userId = userDetails?.id;
        }

        if (!userId) {
            return NextResponse.json({
                error: 'Unauthorized',
                details: 'No userId found in any method.',
            }, { status: 401 });
        }

        const client = await clerkClient();
        const fullUser = await client.users.getUser(userId);

        // Fetch email and role from Clerk
        const email = bodyEmail || fullUser.emailAddresses[0]?.emailAddress;

        if (!email) {
            return NextResponse.json({ error: 'Email not found' }, { status: 400 });
        }

        const role = (fullUser.publicMetadata as any)?.role || 'user';

        // Update DB with the role from Clerk (source of truth)
        const dbUser = await User.findOneAndUpdate(
            { clerkId: userId },
            {
                clerkId: userId,
                email: email,
                role: role
            },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        // Ensure Clerk has the metadata (in case it was just created in DB)
        await client.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: dbUser.role,
            },
        });

        return NextResponse.json({
            success: true,
            message: 'User synced successfully',
            user: {
                id: dbUser._id,
                email: dbUser.email,
                role: dbUser.role
            }
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Internal server error', details: error.message },
            { status: 500 }
        );
    }
}
