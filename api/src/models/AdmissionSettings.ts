import mongoose from 'mongoose';

const admissionSettingsSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    academicYear: {
        type: String,
        required: true,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    title: {
        type: String,
        required: false,
        default: "Admissions Open"
    },
    description: {
        type: String,
        required: false,
    }
}, {
    timestamps: true
});

// Helper to ensure only one settings document exists
admissionSettingsSchema.statics.getSettings = async function () {
    let settings = await this.findOne();
    if (!settings) {
        // Default settings if none exist
        settings = await this.create({
            startDate: new Date(),
            endDate: new Date(new Date().setMonth(new Date().getMonth() + 3)),
            academicYear: `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`,
            isActive: true,
            title: "Admissions Open",
            description: "Secure your future with our specialized Undergraduate (UG) and Postgraduate (PG) programs combined with Islamic values."
        });
    }
    return settings;
};

export const AdmissionSettings = mongoose.model('AdmissionSettings', admissionSettingsSchema);
