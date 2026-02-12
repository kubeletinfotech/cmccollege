import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { ensureAdmin } from '@/lib/ensureAdmin';
import Enquiry from '@/models/Enquiry';
import Announcements from '@/models/Announcements';
import Gallery from '@/models/Gallery';
import News from '@/models/News';
import User from '@/models/User';
import CareerApplication from '@/models/CareerApplication';
import QuestionPaper from '@/models/QuestionPaper';

export async function GET() {
    try {
        await ensureAdmin();
        await connectDB();


        // Fetch counts in parallel
        const [enquiryCount, announcementCount, galleryCount, newsCount, userCount, careerCount, questionCount] = await Promise.all([
            Enquiry.countDocuments(),
            Announcements.countDocuments(),
            Gallery.countDocuments(),
            News.countDocuments(),
            User.countDocuments(),
            CareerApplication.countDocuments(),
            QuestionPaper.countDocuments()
        ]);

        // Get latest items for activity
        const pendingEnquiries = await Enquiry.find({ status: 'Pending' })
            .sort({ createdAt: -1 })
            .limit(4);

        const recentAnnouncements = await Announcements.find()
            .sort({ createdAt: -1 })
            .limit(3);

        // Calculate this month's enquiries
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);
        const enquiriesThisMonth = await Enquiry.countDocuments({
            createdAt: { $gte: startOfMonth }
        });

        return NextResponse.json({
            success: true,
            data: {
                counts: {
                    enquiries: enquiryCount,
                    announcements: announcementCount,
                    gallery: galleryCount,
                    news: newsCount,
                    users: userCount,
                    careers: careerCount,
                    questions: questionCount,
                },
                enquiriesThisMonth,
                pendingEnquiries,
                recentAnnouncements
            }
        });

    } catch (error: any) {
        if (error.message === "Unauthorized" || error.message === "Forbidden") {
            return NextResponse.json({ message: error.message }, { status: error.message === "Unauthorized" ? 401 : 403 });
        }
        console.error('Stats API Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

}
