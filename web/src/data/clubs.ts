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
        name: "Nature Club",
        image: "https://i.pinimg.com/1200x/9e/db/d8/9edbd8e1200b24f0e5bb560733a087e8.jpg",
        description: "The Nature Club dedicated to fostering environmental awareness and conservation among students. We organize nature walks, tree plantation drives, and workshops on sustainable living.",
        activities: ["Tree Plantation", "Environmental Workshops", "Nature Trails", "Recycling Campaigns"],
        coordinator: {
            name: "Dr. Sumesh K.P.",
            designation: "Assistant Professor, Dept. of Botany"
        }
    },
    {
        id: 2,
        name: "TechSias",
        image: "https://i.pinimg.com/736x/d9/90/a9/d990a970d73df3c569b2e9a467d59922.jpg",
        description: "The technical club of CM College, TechSias is a hub for tech enthusiasts. We focus on coding, robotics, and the latest trends in technology, providing a platform for innovation and software development.",
        activities: ["Coding Competitions", "Tech Seminars", "Robotics Workshops", "Project Showcases"],
        coordinator: {
            name: "Mr. Jithu P.M.",
            designation: "Head of Dept, Computer Science"
        }
    },
    {
        id: 3,
        name: "Women Development Cell",
        image: "https://i.pinimg.com/1200x/1e/1b/80/1e1b80ce59caa3bcf552518baadf513d.jpg",
        description: "The Women Development Cell works towards gender sensitization and empowerment on campus. We organize sessions on self-defense, health awareness, and workshops on professional skills for women.",
        activities: ["Self-Defense Training", "Gender Awareness Workshops", "Counseling Sessions", "Skill Development"],
        coordinator: {
            name: "Mrs. Sajitha K.",
            designation: "Assistant Professor, Dept. of English"
        }
    },
    {
        id: 4,
        name: "National Service Scheme",
        image: "https://i.pinimg.com/1200x/1e/1b/80/1e1b80ce59caa3bcf552518baadf513d.jpg",
        description: "NSS encourages students to engage in community service. Through various projects, students contribute to social welfare while developing their own leadership and organizational skills.",
        activities: ["Blood Donation Camps", "Village Adoption", "Disaster Management Training", "Social Surveys"],
        coordinator: {
            name: "Mr. Abdul Razak",
            designation: "NSS Programme Officer"
        }
    },
    {
        id: 5,
        name: "Arts & Cultural Club",
        image: "https://i.pinimg.com/736x/7d/73/da/7d73da2678a646971f19004eeaec8eab.jpg",
        description: "A vibrant club that celebrates creativity and cultural diversity. We organize festivals, art exhibitions, and competitions in music, dance, and theater.",
        activities: ["Annual Arts Fest", "Cultural Nights", "Painting Competitions", "Theater Workshops"],
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
