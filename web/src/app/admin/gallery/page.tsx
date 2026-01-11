"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryItem {
    _id: string;
    title: string;
    imageUrl: string;
    category: string;
    createdAt: string;
}

const CATEGORIES = ['All', 'Campus', 'Events', 'Hostel', 'Classroom'];

export default function GalleryAdminPage() {
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [activeFilter, setActiveFilter] = useState('All');
    const [showForm, setShowForm] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        title: "",
        imageUrl: "",
        category: "Campus"
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchGallery = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/gallery");
            const data = await response.json();
            if (response.ok) {
                setItems(data.data);
            } else {
                setError(data.message || "Failed to fetch gallery");
            }
        } catch (err) {
            setError("Could not connect to backend.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch("http://localhost:5000/api/gallery", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setItems(prev => [data.data, ...prev]);
                setFormData({ title: "", imageUrl: "", category: "Campus" });
                setShowForm(false);
            } else {
                alert(data.message || "Error adding image");
            }
        } catch (err) {
            alert("Network error.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Remove this image from gallery?")) return;
        try {
            const response = await fetch(`http://localhost:5000/api/gallery/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setItems(prev => prev.filter(item => item._id !== id));
            } else {
                alert("Failed to delete");
            }
        } catch (err) {
            alert("Network error");
        }
    };

    const filteredItems = activeFilter === 'All'
        ? items
        : items.filter(item => item.category === activeFilter);

    return (
        <div className="space-y-8">
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-900">Gallery Management</h2>
                    <p className="text-zinc-500 mt-1 font-medium italic">Update the school gallery with the latest moments.</p>
                </div>
                {!showForm && (
                    <button
                        onClick={() => setShowForm(true)}
                        className="w-full sm:w-auto px-6 py-4 bg-emerald-800 text-white font-bold rounded-2xl hover:bg-emerald-900 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 group"
                    >
                        <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add New Image
                    </button>
                )}
            </div>

            {/* Add Image Form */}
            {showForm && (
                <div className="bg-white p-8 rounded-[32px] shadow-2xl border border-emerald-100 animate-in fade-in zoom-in duration-300">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-emerald-950 uppercase tracking-tight">Add Gallery Image</h3>
                        <button onClick={() => setShowForm(false)} className="text-zinc-400 hover:text-zinc-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-zinc-600 ml-1">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Science Lab Session"
                                    className="w-full px-5 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-emerald-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-zinc-600 ml-1">Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full px-5 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-emerald-500 outline-none transition-all"
                                >
                                    {CATEGORIES.filter(c => c !== 'All').map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-zinc-600 ml-1">Image URL</label>
                            <input
                                type="url"
                                name="imageUrl"
                                required
                                value={formData.imageUrl}
                                onChange={handleInputChange}
                                placeholder="Paste image link here..."
                                className="w-full px-5 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-emerald-500 outline-none transition-all"
                            />
                        </div>
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3.5 bg-emerald-800 text-white font-bold rounded-2xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? "Uploading..." : "Publish to Gallery"}
                            </button>
                            <button type="button" onClick={() => setShowForm(false)} className="px-8 py-3.5 bg-zinc-100 text-zinc-600 font-bold rounded-2xl">Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeFilter === cat
                            ? 'bg-emerald-600 text-white shadow-md scale-105'
                            : 'bg-white text-zinc-400 hover:bg-zinc-100 border border-zinc-100'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]">
                {loading ? (
                    <div className="col-span-full py-32 text-center">
                        <div className="w-10 h-10 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-zinc-400 font-bold italic tracking-widest text-sm">Loading Gallery...</p>
                    </div>
                ) : error ? (
                    <div className="col-span-full py-32 text-center">
                        <p className="text-red-500 font-bold">{error}</p>
                    </div>
                ) : filteredItems.length === 0 ? (
                    <div className="col-span-full py-32 text-center bg-zinc-50 rounded-[40px] border-2 border-dashed border-zinc-100">
                        <p className="text-zinc-400 font-bold italic tracking-widest text-lg">No images found.</p>
                    </div>
                ) : (
                    filteredItems.map((item) => (
                        <div key={item._id} className="group relative aspect-square bg-zinc-100 rounded-[32px] overflow-hidden border border-zinc-100 hover:shadow-2xl transition-all duration-500">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                unoptimized
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="p-3 bg-white/20 hover:bg-red-500 text-white rounded-2xl backdrop-blur-md transition-all group/del"
                                    >
                                        <svg className="w-5 h-5 transform group-hover/del:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300 mb-1 block">{item.category}</span>
                                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
