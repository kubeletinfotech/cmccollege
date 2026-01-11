import { Request, Response } from 'express';
import Gallery from '../models/Gallery';

/**
 * @desc    Create a new gallery image entry
 * @route   POST /api/gallery
 * @access  Admin (Public for now)
 */
export const createImage = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, imageUrl, category } = req.body;

        if (!title || !imageUrl || !category) {
            res.status(400).json({ success: false, message: 'Please provide title, imageUrl and category' });
            return;
        }

        const image = await Gallery.create({
            title,
            imageUrl,
            category
        });

        res.status(201).json({
            success: true,
            data: image,
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
 * @desc    Get all gallery images
 * @route   GET /api/gallery
 * @access  Public
 */
export const getImages = async (req: Request, res: Response): Promise<void> => {
    try {
        const { category } = req.query;
        let query = {};

        if (category) {
            query = { category };
        }

        const images = await Gallery.find(query).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: images.length,
            data: images,
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
 * @desc    Delete a gallery image entry
 * @route   DELETE /api/gallery/:id
 * @access  Admin (Public for now)
 */
export const deleteImage = async (req: Request, res: Response): Promise<void> => {
    try {
        const image = await Gallery.findByIdAndDelete(req.params.id);

        if (!image) {
            res.status(404).json({ success: false, message: 'Gallery image not found' });
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
