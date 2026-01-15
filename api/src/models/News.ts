import mongoose, { Schema, Document } from 'mongoose';

export interface INews extends Document {
    title: string;
    description: string;
    date: Date;
    image: string;
    tag: string;
    createdAt: Date;
}

const NewsSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    image: { type: String, required: true },
    tag: {
        type: String,
        required: true,
        enum: ['Seminar', 'Sports', 'Cultural', 'Academic', 'General', 'Workshop', 'Events'],
        default: 'General'
    },
    createdAt: { type: Date, default: Date.now }
});

export const News = mongoose.model<INews>('News', NewsSchema);
