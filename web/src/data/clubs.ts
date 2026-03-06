export interface Coordinator {
    name: string;
    designation: string;
    image?: string;
}

export interface Club {
    id: number;
    name: string;
    image: string;
    description: string;
    activities: string[];
    coordinator?: Coordinator;
}

export const clubs: Club[] = [
    {
        id: 1,
        name: "Color Club",
        image: "https://ik.imagekit.io/1yxtj9qun/Clubs/color-club",
        description: "The Color Club dedicated to fostering creativity and artistic expression among students. We organize art exhibitions, painting competitions, and workshops on various art forms.",
        activities: ["Art Exhibitions", "Painting Competitions", "Art Workshops", "Creative Activities"],
        coordinator: {
            name: "Dr. Sumesh K.P.",
            designation: "Assistant Professor, Dept. of Botany"
        }
    },
    {
        id: 2,
        name: "Literary Club",
        image: "https://ik.imagekit.io/1yxtj9qun/Clubs/literary-club",
        description: "The Literary Club is a hub for literature enthusiasts. We focus on reading, writing, and the latest trends in literature.",
        activities: ["Reading Sessions", "Writing Workshops", "Debates", "Poetry Slam"],
        coordinator: {
            name: "Mr. Jithu P.M.",
            designation: "Assistant Professor, Dept. of English"
        }
    },
    {
        id: 3,
        name: "Women's Club",
        image: "https://ik.imagekit.io/1yxtj9qun/Clubs/womens-club",
        description: "The Women Development Cell works towards gender sensitization and empowerment on campus. We organize sessions on self-defense, health awareness, and workshops on professional skills for women.",
        activities: ["Self-Defense Training", "Gender Awareness Workshops", "Counseling Sessions", "Skill Development"],
        coordinator: {
            name: "Mrs. Sajitha K.",
            designation: "Assistant Professor, Dept. of English"
        }
    },
    {
        id: 4,
        name: "Tourism Club",
        image: "https://ik.imagekit.io/1yxtj9qun/Clubs/tourism-club",
        description: "The Tourism Club is a hub for travel enthusiasts. We organize trips to various tourist destinations, promoting cultural awareness and exploration.",
        activities: ["Travel Expeditions", "Cultural Tours", "Trekking", "Tourism Awareness Programs"],
        coordinator: {
            name: "Mr. Abdul Razak",
            designation: "Assistant Professor, Dept. of Management"
        }
    },
    {
        id: 5,
        name: "IT Club",
        image: "https://ik.imagekit.io/1yxtj9qun/Clubs/it-club",
        description: "The IT Club is a hub for technology enthusiasts. We focus on programming, networking, and the latest trends in tech, providing a platform for innovation and software development.",
        activities: ["Coding Competitions", "Hackathons", "Tech Workshops", "Seminars"],
        coordinator: {
            name: "Mr. Praveen Kumar",
            designation: "Assistant Professor, Dept. of Multimedia"
        }
    },
    {
        id: 6,
        name: "Sports Club",
        image: "https://i.pinimg.com/736x/83/c2/64/83c2648170276c460351205df7c36e34.jpg",
        description: "Promoting physical fitness and sportsmanship, the Sports Club manages all athletic activities on campus, from intra-college tournaments to university-level meets.",
        activities: ["Annual Sports Day", "Football League", "Cricket Tournaments", "Indoor Games"],
        coordinator: {
            name: "Mr. Shibin K.",
            designation: "Physical Education Director"
        }
    },
    {
        id: 7,
        name: "Entrepreneurship Cell",
        image: "https://i.pinimg.com/736x/34/7e/b8/347eb87ff820c17dcca0039e282e2059.jpg",
        description: "The E-Cell inspires and supports budding entrepreneurs. We provide mentorship, conduct business plan competitions, and organize 'Meet the CEO' sessions.",
        activities: ["Startup Pitch Meets", "Business Planning Workshops", "Entrepreneurial Talks", "Market Fairs"],
        coordinator: {
            name: "Mr. Faisal T.K.",
            designation: "Assistant Professor, Dept. of Management"
        }
    }
];
