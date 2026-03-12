import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGallery extends Document {
    title: string;
    imageUrl: string;
    fileId?: string;
    category: 'Campus' | 'Events' | 'Hostel' | 'Classroom' | 'Alumni' | 'Sports' | 'Others';
    createdAt: Date;
}

const GallerySchema: Schema = new Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    fileId: { type: String },
    category: {
        type: String,
        required: true,
        enum: ['Campus', 'Events', 'Hostel', 'Classroom', 'Alumni', 'Sports', 'Others'],
    },
    createdAt: { type: Date, default: Date.now },
});

// In Next.js dev mode, models can be cached. To ensure schema changes are picked up,
// we can use this pattern to force re-registration if needed, or stick to the standard check.
if (mongoose.models && mongoose.models.Gallery) {
    delete (mongoose.models as any).Gallery;
}

const Gallery: Model<IGallery> = mongoose.model<IGallery>('Gallery', GallerySchema);

export default Gallery;
