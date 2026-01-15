import { Request, Response } from 'express';
import { News } from '../models/News';

// Get all news
export const getNews = async (req: Request, res: Response) => {
    try {
        const news = await News.find().sort({ date: -1 });
        res.json({ success: true, data: news });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Create news
export const createNews = async (req: Request, res: Response) => {
    try {
        const news = await News.create(req.body);
        res.status(201).json({ success: true, data: news });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Invalid data' });
    }
};

// Update news
export const updateNews = async (req: Request, res: Response) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!news) {
            return res.status(404).json({ success: false, message: 'News item not found' });
        }
        res.json({ success: true, data: news });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Update failed' });
    }
};

// Delete news
export const deleteNews = async (req: Request, res: Response) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) {
            return res.status(404).json({ success: false, message: 'News item not found' });
        }
        res.json({ success: true, message: 'News item deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Delete failed' });
    }
};

export const seedNews = async (req: Request, res: Response) => {
    try {
        await News.deleteMany({});
        const mockNews = [
            {
                title: "National Seminar on Artificial Intelligence",
                description: "Faculty and students participated in an academic seminar led by industry experts covering the future of AI in education and ethics.",
                date: new Date("2026-08-12"),
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
                tag: "Seminar"
            },
            {
                title: "Annual Sports Meet 2026 Successfully Conducted",
                description: "Students showcased talent and teamwork across multiple sports events including track, field, and team games. The event was a massive success.",
                date: new Date("2026-07-28"),
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2940&auto=format&fit=crop",
                tag: "Sports"
            },
            {
                title: "Cultural Fest “Harmony 2026”",
                description: "A celebration of creativity, music, and student engagement on campus. The arts club organized various performances attracting visitors from across the district.",
                date: new Date("2026-07-10"),
                image: "https://images.unsplash.com/photo-1514525253440-b39345208668?q=80&w=2940&auto=format&fit=crop",
                tag: "Cultural"
            }
        ];
        await News.insertMany(mockNews);
        res.json({ success: true, message: 'Seeded successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
};
