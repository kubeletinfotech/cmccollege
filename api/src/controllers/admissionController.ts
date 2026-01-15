import { Request, Response } from 'express';
import { AdmissionSettings } from '../models/AdmissionSettings';

export const getAdmissionSettings = async (req: Request, res: Response) => {
    try {
        // Cast to any to access the static method if TS complains, or defined properly in model
        const settings = await (AdmissionSettings as any).getSettings();
        res.json(settings);
    } catch (error) {
        console.error('Error fetching admission settings:', error);
        res.status(500).json({ message: 'Server error fetching settings' });
    }
};

export const updateAdmissionSettings = async (req: Request, res: Response) => {
    try {
        const { startDate, endDate, academicYear, isActive, title, description } = req.body;

        let settings = await AdmissionSettings.findOne();

        if (!settings) {
            settings = new AdmissionSettings({
                startDate,
                endDate,
                academicYear,
                isActive,
                title,
                description
            });
        } else {
            settings.startDate = startDate || settings.startDate;
            settings.endDate = endDate || settings.endDate;
            settings.academicYear = academicYear || settings.academicYear;
            settings.isActive = isActive !== undefined ? isActive : settings.isActive;
            settings.title = title || settings.title;
            settings.description = description || settings.description;
        }

        const updatedSettings = await settings.save();
        res.json(updatedSettings);
    } catch (error) {
        console.error('Error updating admission settings:', error);
        res.status(500).json({ message: 'Server error updating settings' });
    }
};
