import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAnnouncement extends Document {
    title: string;
    description: string;
    isImportant: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const announcementSchema = new Schema<IAnnouncement>(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
        isImportant: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Announcement: Model<IAnnouncement> =
    mongoose.models.Announcement || mongoose.model<IAnnouncement>('Announcement', announcementSchema);

export default Announcement;
