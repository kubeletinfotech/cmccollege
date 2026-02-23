import mongoose from 'mongoose';

const QuestionPaperSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
    },
    code: {
        type: String,
        required: [true, 'Please provide a course code'],
    },
    department: {
        type: String,
        required: [true, 'Please provide a department'],
        enum: [
            "Computer Science",
            "Management",
            "Mass Communication",
            "Economics",
            "English",
            "Commerce",
            "Human Resource Management",
            "Sociology",
            "Multimedia",
            "Malayalam",
            "Arabic",
        ],
    },
    semester: {
        type: String,
        required: [true, 'Please provide a semester'],
        enum: ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"],
    },
    year: {
        type: String,
        required: [true, 'Please provide a year'],
    },
    type: {
        type: String,
        required: [true, 'Please provide a type'],
        enum: ["Main Exam", "Supplementary", "Internal"],
        default: "Main Exam",
    },
    pdfUrl: {
        type: String,
        required: [true, 'Please provide a Google Drive link'],
    },
}, {
    timestamps: true,
});

export default mongoose.models.QuestionPaper || mongoose.model('QuestionPaper', QuestionPaperSchema);
