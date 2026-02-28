'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit2, X, Loader2, Briefcase } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface VacancyItem {
    _id: string;
    title: string;
    department: string;
    description: string;
    experienceRequired: string;
    isActive: boolean;
    createdAt: string;
}

export default function AdminVacanciesPage() {
    const [vacancies, setVacancies] = useState<VacancyItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState<VacancyItem | null>(null);
    const { getToken } = useAuth();
    const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<VacancyItem>({
        defaultValues: {
            isActive: true,
            department: 'Computer Science'
        }
    });

    const fetchVacancies = async () => {
        try {
            const token = await getToken();
            const res = await fetch("/api/admin/vacancies", {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json();
            if (data.success) setVacancies(data.data);
        } catch (error) {
            console.error('Failed to fetch vacancies:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchVacancies();
    }, []);

    const onSubmit = async (data: VacancyItem) => {
        try {
            const token = await getToken();
            const method = editingItem ? 'PUT' : 'POST';
            const url = editingItem
                ? `/api/admin/vacancies/${editingItem._id}`
                : `/api/admin/vacancies`;

            const { _id, ...submitData } = data;

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(submitData)
            });

            const result = await res.json();

            if (res.ok) {
                toast.success(editingItem ? 'Vacancy updated successfully' : 'Vacancy published successfully');
                setShowModal(false);
                reset();
                setEditingItem(null);
                fetchVacancies();
            } else {
                toast.error(result.error || 'Operation failed');
            }
        } catch (error) {
            console.error('Operation failed:', error);
            toast.error('Something went wrong. Please try again.');
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this vacancy?')) return;
        try {
            const token = await getToken();
            const res = await fetch(`/api/admin/vacancies/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) fetchVacancies();
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

    const openEdit = (item: VacancyItem) => {
        setEditingItem(item);
        setValue('title', item.title);
        setValue('department', item.department);
        setValue('description', item.description);
        setValue('experienceRequired', item.experienceRequired);
        setValue('isActive', !!item.isActive);
        setShowModal(true);
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-zinc-900">Job Vacancies</h1>
                    <p className="text-zinc-500 mt-1">Manage open career positions on the website</p>
                </div>
                <button
                    onClick={() => {
                        setEditingItem(null);
                        reset({ isActive: true });
                        setShowModal(true);
                    }}
                    className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                    <Plus size={20} />
                    Add Vacancy
                </button>
            </div>

            {isLoading ? (
                <div className="flex justify-center py-20"><Loader2 className="animate-spin text-emerald-600" /></div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vacancies.map((item) => (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`px-2 py-1 rounded text-xs font-bold uppercase border ${item.isActive
                                            ? 'bg-emerald-100/90 text-emerald-800 border-emerald-200'
                                            : 'bg-zinc-100 text-zinc-600 border-zinc-200'
                                        }`}>
                                        {item.isActive ? 'Active' : 'Closed'}
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={() => openEdit(item)} className="p-1 hover:bg-zinc-100 rounded text-blue-600">
                                            <Edit2 size={16} />
                                        </button>
                                        <button onClick={() => handleDelete(item._id)} className="p-1 hover:bg-zinc-100 rounded text-red-600">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg text-zinc-900 line-clamp-1 mb-1">{item.title}</h3>
                                <p className="text-sm text-emerald-700 font-semibold mb-3 flex items-center gap-1.5"><Briefcase size={14} /> {item.department}</p>
                                <p className="text-sm text-zinc-500 line-clamp-3 mb-4 flex-1">{item.description || "No description provided."}</p>
                                <div className="pt-3 border-t border-zinc-100 text-xs text-zinc-400 font-medium flex justify-between">
                                    <span>Added: {new Date(item.createdAt).toLocaleDateString()}</span>
                                    <span>Exp: {item.experienceRequired || 'N/A'}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-[32px] w-full max-w-2xl shadow-2xl border border-white/20 relative flex flex-col max-h-[90vh]"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="p-8 border-b border-zinc-100 flex justify-between items-center relative z-10">
                                <div>
                                    <h2 className="text-2xl font-black text-zinc-900 tracking-tight">
                                        {editingItem ? 'Edit Job Vacancy' : 'Create Job Vacancy'}
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-3 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400 hover:text-zinc-600"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6 relative z-10 overflow-y-auto">
                                <div className="space-y-4">
                                    <div className="group">
                                        <label className="block text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 ml-1">Job Title *</label>
                                        <input
                                            {...register('title', { required: "Title is required" })}
                                            className="w-full px-5 py-4 bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-semibold text-zinc-800 placeholder:text-zinc-400"
                                            placeholder="e.g., Assistant Professor (Guest)"
                                        />
                                        {errors.title && <p className="text-red-500 text-xs mt-1 ml-1">{errors.title.message}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 ml-1">Department *</label>
                                            <input
                                                {...register('department', { required: "Department is required" })}
                                                className="w-full px-5 py-4 bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-zinc-800"
                                                placeholder="e.g., Computer Science"
                                            />
                                            {errors.department && <p className="text-red-500 text-xs mt-1 ml-1">{errors.department.message}</p>}
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 ml-1">Experience Required</label>
                                            <input
                                                {...register('experienceRequired')}
                                                className="w-full px-5 py-4 bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-zinc-800"
                                                placeholder="e.g., 2+ Years"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 ml-1">Job Description</label>
                                        <textarea
                                            {...register('description')}
                                            rows={4}
                                            className="w-full px-5 py-4 bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium text-zinc-800 placeholder:text-zinc-400 resize-none"
                                            placeholder="Briefly describe the requirements and duties..."
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 cursor-pointer group hover:bg-emerald-100/50 transition-colors">
                                        <input
                                            type="checkbox"
                                            id="isActive"
                                            {...register('isActive')}
                                            className="w-5 h-5 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                                        />
                                        <label htmlFor="isActive" className="text-sm font-bold text-emerald-800 cursor-pointer select-none">
                                            Status: Active
                                            <span className="block text-[10px] text-emerald-600/70 font-medium">If unchecked, this job will not appear on the application form.</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-zinc-100 mt-8">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 px-6 py-4 border-2 border-zinc-100 text-zinc-600 font-bold rounded-2xl hover:bg-zinc-50 hover:text-zinc-900 transition-all active:scale-95"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-2 px-6 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 size={20} className="animate-spin" />
                                        ) : (
                                            <>
                                                {editingItem ? 'Save Updates' : 'Publish Vacancy'}
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
