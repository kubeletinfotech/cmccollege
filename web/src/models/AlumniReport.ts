import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAlumniReport extends Document {
    title: string;
    details?: string;
    link?: string;
    fileUrl?: string; // Deprecated but kept for backward compatibility if needed
    fileId?: string; // Deprecated
    date?: string;
    createdAt: Date;
}

const AlumniReportSchema: Schema = new Schema({
    title: { type: String, required: true },
    details: { type: String },
    link: { type: String },
    fileUrl: { type: String },
    fileId: { type: String },
    date: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const AlumniReport: Model<IAlumniReport> =
    mongoose.models.AlumniReport || mongoose.model<IAlumniReport>('AlumniReport', AlumniReportSchema);

export default AlumniReport;
