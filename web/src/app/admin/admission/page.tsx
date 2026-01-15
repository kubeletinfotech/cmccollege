"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { Calendar, Save, Megaphone, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

const getApiUrl = () => {
    const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    return url.endsWith('/api') ? url : `${url.replace(/\/$/, '')}/api`;
};
const API_URL = getApiUrl();

type AdmissionSettings = {
    _id?: string;
    startDate: string;
    endDate: string;
    academicYear: string;
    isActive: boolean;
    title: string;
    description: string;
};

export default function AdmissionSettingsPage() {
    const { getToken, isLoaded } = useAuth();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [settings, setSettings] = useState<AdmissionSettings>({
        startDate: "",
        endDate: "",
        academicYear: "",
        isActive: true,
        title: "Admissions Open",
        description: "",
    });

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch(`${API_URL}/admission/settings`);
                if (!res.ok) throw new Error("Failed to fetch settings");
                const data = await res.json();

                // Format dates for input type="date"
                const formatDate = (dateString: string) => {
                    if (!dateString) return "";
                    return new Date(dateString).toISOString().split('T')[0];
                };

                setSettings({
                    ...data,
                    startDate: formatDate(data.startDate),
                    endDate: formatDate(data.endDate),
                });
            } catch (error) {
                console.error("Error fetching settings:", error);
                toast.error("Failed to load admission settings");
            } finally {
                setLoading(false);
            }
        };

        fetchSettings();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setSettings((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleToggle = (checked: boolean) => {
        setSettings((prev) => ({ ...prev, isActive: checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            const token = await getToken();
            const res = await fetch(`${API_URL}/admission/settings`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(settings),
            });

            if (!res.ok) throw new Error("Failed to update settings");

            const data = await res.json();
            toast.success("Admission settings updated successfully");

            // Format dates back for the form
            const formatDate = (dateString: string) => {
                if (!dateString) return "";
                return new Date(dateString).toISOString().split('T')[0];
            };

            setSettings({
                ...data,
                startDate: formatDate(data.startDate),
                endDate: formatDate(data.endDate),
            });

        } catch (error) {
            console.error("Error updating settings:", error);
            toast.error("Failed to update admission settings");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-zinc-900">Admission Popup Settings</h1>
                <p className="text-zinc-500 mt-2">Manage the visibility and content of the admission announcement popup.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6 md:p-8 space-y-8">
                {/* Status Toggle */}
                <div className="flex items-center justify-between p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                    <div>
                        <h3 className="font-semibold text-zinc-900">Popup Status</h3>
                        <p className="text-sm text-zinc-500">Enable or disable the popup globally.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={settings.isActive}
                            onChange={(e) => handleToggle(e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-700">Academic Year</label>
                        <input
                            type="text"
                            name="academicYear"
                            value={settings.academicYear}
                            onChange={handleChange}
                            placeholder="e.g. 2026-27"
                            className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-700">Popup Title</label>
                        <input
                            type="text"
                            name="title"
                            value={settings.title}
                            onChange={handleChange}
                            placeholder="e.g. Admissions Open"
                            className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2 space-y-2">
                        <label className="text-sm font-medium text-zinc-700">Description</label>
                        <textarea
                            name="description"
                            value={settings.description}
                            onChange={handleChange}
                            placeholder="Enter a brief description..."
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-700">Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            value={settings.startDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-700">End Date</label>
                        <input
                            type="date"
                            name="endDate"
                            value={settings.endDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-zinc-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                            required
                        />
                    </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex justify-end">
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
}
