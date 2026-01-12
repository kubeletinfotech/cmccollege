import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Gallery from '../models/Gallery';
import Announcement from '../models/Announcement';
import connectDB from '../config/db';

dotenv.config();

const galleryMockData = [
    {
        title: 'Integrated Science Lab Session',
        imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200',
        category: 'Classroom',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Annual Sports Day 2024',
        imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200',
        category: 'Events',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Main Campus Building Night View',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756eaa539?auto=format&fit=crop&q=80&w=1200',
        category: 'Campus',
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'School Library - Quiet Study Zone',
        imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200',
        category: 'Campus',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Cultural Fest - Traditional Performance',
        imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
        category: 'Events',
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Premium Hostel Accommodation',
        imageUrl: 'https://images.unsplash.com/photo-1555854817-40e098ee7f27?auto=format&fit=crop&q=80&w=1200',
        category: 'Hostel',
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Interactive Smart Classroom',
        imageUrl: 'https://images.unsplash.com/photo-1509062522246-373b1e771108?auto=format&fit=crop&q=80&w=1200',
        category: 'Classroom',
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Science Exhibition Award Ceremony',
        imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=1200',
        category: 'Events',
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Modern Chemistry Laboratory',
        imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?auto=format&fit=crop&q=80&w=1200',
        category: 'Classroom',
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000)
    }
];

const announcementMockData = [
    {
        title: 'Admissions Open for Academic Year 2025-26',
        description: 'Applications are now being accepted for +1 Science and Commerce streams. Visit the admissions office or apply online through our portal.',
        isImportant: true,
        createdAt: new Date()
    },
    {
        title: 'Annual Sports Day Multi-Category Events',
        description: 'The much-awaited annual sports day will be held this Friday. All students are requested to be in their respective house uniforms.',
        isImportant: false,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Ramadan Timing Schedule Update',
        description: 'School timings during the holy month of Ramadan have been revised. Standard classes will now conclude at 1:30 PM.',
        isImportant: true,
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Science Exhibition 2024 Winners Announced',
        description: 'Congratulations to the winners of the "Inno-Tech" science exhibition. Merit certificates will be distributed during Monday assembly.',
        isImportant: false,
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'New Library Membership Cards',
        description: 'All students can now collect their updated RFID-enabled library cards from the main administrative block.',
        isImportant: false,
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    }
];

const seedData = async () => {
    try {
        await connectDB();

        console.log('Clearing existing data...');
        await Gallery.deleteMany({});
        await Announcement.deleteMany({});
        console.log('Collections cleared.');

        console.log('Inserting mock gallery images...');
        await Gallery.insertMany(galleryMockData);
        console.log(`${galleryMockData.length} gallery items inserted.`);

        console.log('Inserting mock announcements...');
        await Announcement.insertMany(announcementMockData);
        console.log(`${announcementMockData.length} announcements inserted.`);

        console.log('Database seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
