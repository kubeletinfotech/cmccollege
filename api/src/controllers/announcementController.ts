import { Request, Response } from 'express';
import Announcement from '../models/Announcement';

/**
 * @desc    Create a new announcement
 * @route   POST /api/announcements
 * @access  Admin (Public for now)
 */
export const createAnnouncement = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description, isImportant } = req.body;

        if (!title || !description) {
            res.status(400).json({ success: false, message: 'Please provide title and description' });
            return;
        }

        const announcement = await Announcement.create({
            title,
            description,
            isImportant: isImportant || false,
        });

        res.status(201).json({
            success: true,
            data: announcement,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: (error as Error).message,
        });
    }
};

/**
 * @desc    Get all announcements
 * @route   GET /api/announcements
 * @access  Public
 */
export const getAnnouncements = async (req: Request, res: Response): Promise<void> => {
    try {
        const announcements = await Announcement.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: announcements.length,
            data: announcements,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: (error as Error).message,
        });
    }
};

/**
 * @desc    Delete an announcement
 * @route   DELETE /api/announcements/:id
 * @access  Admin (Public for now)
 */
export const deleteAnnouncement = async (req: Request, res: Response): Promise<void> => {
    try {
        const announcement = await Announcement.findByIdAndDelete(req.params.id);

        if (!announcement) {
            res.status(404).json({ success: false, message: 'Announcement not found' });
            return;
        }

        res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: (error as Error).message,
        });
    }
};
