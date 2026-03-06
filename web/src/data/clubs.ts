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
];
