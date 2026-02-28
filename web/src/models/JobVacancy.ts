import mongoose, { Schema, Document } from "mongoose";

export interface IJobVacancy extends Document {
    title: string;
    department: string;
    description: string;
    experienceRequired: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const JobVacancySchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Job title is required"],
            trim: true,
        },
        department: {
            type: String,
            required: [true, "Department is required"],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
            default: "",
        },
        experienceRequired: {
            type: String,
            trim: true,
            default: "",
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.JobVacancy || mongoose.model<IJobVacancy>("JobVacancy", JobVacancySchema);
