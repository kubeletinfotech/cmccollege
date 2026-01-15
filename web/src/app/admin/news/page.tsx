'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit2, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';
import ImageUpload from '@/components/ImageUpload';

interface NewsItem {
    _id: string;
    title: string;
    description: string;
    date: string;
    image: string;
    tag: string;
}

export default function AdminNewsPage() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
    const { getToken } = useAuth();
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<NewsItem>();

    const imageUrl = watch('image');

    const fetchNews = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news`);
            const data = await res.json();
            if (data.success) setNews(data.data);
        } catch (error) {
            console.error('Failed to fetch news:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const onSubmit = async (data: NewsItem) => {
        try {
            const token = await getToken();
            const method = editingItem ? 'PUT' : 'POST';
            const url = editingItem
                ? `${process.env.NEXT_PUBLIC_API_URL}/api/news/${editingItem._id}`
                : `${process.env.NEXT_PUBLIC_API_URL}/api/news`;

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                setShowModal(false);
                reset();
                setEditingItem(null);
                fetchNews();
            }
        } catch (error) {
            console.error('Operation failed:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this item?')) return;
        try {
            const token = await getToken();
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) fetchNews();
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

    const openEdit = (item: NewsItem) => {
        setEditingItem(item);
        setValue('title', item.title);
        setValue('description', item.description);
        setValue('date', item.date.split('T')[0]); // Format date for input
        setValue('tag', item.tag);
        setValue('image', item.image);
        setShowModal(true);
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-zinc-900">News & Events</h1>
                    <p className="text-zinc-500 mt-1">Manage latest updates and campus happenings</p>
                </div>
                <button
                    onClick={() => {
                        setEditingItem(null);
                        reset();
                        setShowModal(true);
                    }}
                    className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                    <Plus size={20} />
                    Add New
                </button>
            </div>

            {isLoading ? (
                <div className="flex justify-center py-20"><Loader2 className="animate-spin text-emerald-600" /></div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((item) => (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="relative h-48 bg-zinc-100">
                                <Image
                                    src={item.image || '/placeholder.png'}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-emerald-800 uppercase">
                                    {item.tag}
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs text-zinc-400 font-medium">
                                        {new Date(item.date).toLocaleDateString()}
                                    </span>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => openEdit(item)} className="p-1 hover:bg-zinc-100 rounded text-blue-600">
                                            <Edit2 size={16} />
                                        </button>
                                        <button onClick={() => handleDelete(item._id)} className="p-1 hover:bg-zinc-100 rounded text-red-600">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                                <h3 className="font-bold text-zinc-900 line-clamp-1 mb-1">{item.title}</h3>
                                <p className="text-sm text-zinc-500 line-clamp-2">{item.description}</p>
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
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-xl"
                        >
                            <div className="p-4 border-b border-zinc-100 flex justify-between items-center">
                                <h2 className="text-xl font-bold text-zinc-900">
                                    {editingItem ? 'Edit News' : 'Add News'}
                                </h2>
                                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-zinc-100 rounded-full">
                                    <X size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">Title</label>
                                    <input
                                        {...register('title', { required: true })}
                                        className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Event Title"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-1">Date</label>
                                        <input
                                            type="date"
                                            {...register('date', { required: true })}
                                            className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-1">Tag</label>
                                        <select
                                            {...register('tag', { required: true })}
                                            className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        >
                                            <option value="General">General</option>
                                            <option value="Seminar">Seminar</option>
                                            <option value="Sports">Sports</option>
                                            <option value="Cultural">Cultural</option>
                                            <option value="Academic">Academic</option>
                                            <option value="Workshop">Workshop</option>
                                            <option value="Events">Events</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">Description</label>
                                    <textarea
                                        {...register('description', { required: true })}
                                        rows={3}
                                        className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        placeholder="Short description..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">Cover Image</label>
                                    <ImageUpload
                                        currentImage={imageUrl}
                                        onUploadComplete={(url: string) => setValue('image', url)}
                                        folder="/news"
                                    />
                                    <input type="hidden" {...register('image', { required: true })} />
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 px-4 py-2 border border-zinc-200 text-zinc-700 font-medium rounded-lg hover:bg-zinc-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700"
                                    >
                                        {editingItem ? 'Update' : 'Create'}
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
