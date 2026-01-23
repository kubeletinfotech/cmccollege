"use server";

import { ensureAdmin } from "@/lib/ensureAdmin";
import { revalidatePath } from "next/cache";

/**
 * Example of a protected admin server action.
 * This action will throw an error if the caller is not an admin.
 */
export async function updateSystemSettings(data: { siteName: string; maintenanceMode: boolean }) {
    // 1. Enforce admin role at the data level
    await ensureAdmin();

    try {
        console.log("Updating system settings:", data);

        // Simulate database operation
        await new Promise(resolve => setTimeout(resolve, 1000));

        // 2. Revalidate paths if necessary
        revalidatePath("/admin");

        return { success: true, message: "Settings updated successfully" };
    } catch (error) {
        console.error("Failed to update settings:", error);
        return { success: false, error: "Internal Server Error" };
    }
}

/**
 * Another example action for deleting content.
 */
export async function deleteSensitiveData(id: string) {
    await ensureAdmin();

    try {
        console.log("Deleting data with ID:", id);

        // Simulating deletion...
        await new Promise(resolve => setTimeout(resolve, 500));

        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        return { success: false, error: "Deletion failed" };
    }
}
