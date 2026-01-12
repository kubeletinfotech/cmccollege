import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Gallery from '../models/Gallery';
import Announcement from '../models/Announcement';
import connectDB from '../config/db';

dotenv.config();

const galleryMockData = [
    {
        title: 'Science Practical Session',
        imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
        category: 'Classroom',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Annual Sports Day',
        imageUrl: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&q=80&w=1200',
        category: 'Events',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Main Campus View',
        imageUrl: 'https://images.unsplash.com/photo-1523050853063-bd8012fec21b?auto=format&fit=crop&q=80&w=1200',
        category: 'Campus',
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Library Study Zone',
        imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200',
        category: 'Campus',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Cultural Fest Performance',
        imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
        category: 'Events',
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Premium Hostel Stay',
        imageUrl: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&q=80&w=1200',
        category: 'Hostel',
        createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Advanced Computer Lab',
        imageUrl: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&q=80&w=1200',
        category: 'Classroom',
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Exhibition Awards',
        imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=1200',
        category: 'Events',
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
    },
    {
        title: 'Chemistry Lab Work',
        imageUrl: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1200',
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
