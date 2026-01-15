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
