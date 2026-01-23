import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import AdminLayoutClient from './AdminLayoutClient';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { userId, sessionClaims } = await auth();

    // 1. Check if user is logged in
    if (!userId) {
        redirect('/sign-in');
    }

    // 2. Check for admin role
    const user = await currentUser();
    const role = (sessionClaims as any)?.metadata?.role || (user?.publicMetadata as any)?.role;

    if (role !== 'admin') {
        redirect('/');
    }

    // 3. Get user details for UI
    const userFullName = user?.fullName || user?.firstName || 'Admin User';
    const userRole = (role as string) || 'Admin';

    return (
        <AdminLayoutClient
            userFullName={userFullName}
            userRole={userRole}
        >
            {children}
        </AdminLayoutClient>
    );
}
