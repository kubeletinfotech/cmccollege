import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { ensureAdmin } from '@/lib/ensureAdmin';

import Announcements from '@/models/Announcements';
import Gallery from '@/models/Gallery';
import News from '@/models/News';
import User from '@/models/User';

import QuestionPaper from '@/models/QuestionPaper';

export async function GET() {
    try {
        await ensureAdmin();
        await connectDB();


        // Fetch counts in parallel
        const [announcementCount, galleryCount, newsCount, userCount, questionCount] = await Promise.all([
            Announcements.countDocuments(),
            Gallery.countDocuments(),
            News.countDocuments(),
            User.countDocuments(),
            QuestionPaper.countDocuments()
        ]);

        const recentAnnouncements = await Announcements.find()
            .sort({ createdAt: -1 })
            .limit(3);



        return NextResponse.json({
            success: true,
            data: {
                counts: {
                    announcements: announcementCount,
                    gallery: galleryCount,
                    news: newsCount,
                    users: userCount,
                    questions: questionCount,
                },
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
