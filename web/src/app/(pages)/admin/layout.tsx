import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import AdminLayoutClient from './AdminLayoutClient';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
        redirect('/');
    }

    const role = (user.publicMetadata as any)?.role;
    if (role !== "admin" && role !== "super_admin") {
        redirect('/');
    }

    const userFullName = user.firstName
        ? `${user.firstName}${user.lastName ? ' ' + user.lastName : ''}`
        : user.username || 'Admin User';

    return (
        <AdminLayoutClient
            userFullName={userFullName}
            userRole={role || 'admin'}
        >
            {children}
        </AdminLayoutClient>
    );
}
