import { LucideIcon, Book, Wifi, Coffee, Monitor, Dumbbell, Bus, Stethoscope, Home, Music, Drama, Cpu, HardDrive } from "lucide-react";

export interface AmenityData {
    title: string;
    description: string;
    features: string[];
    image: string;
    icon?: any;
    gallery?: string[];
    busSchedules?: { busName: string; stops: { route: string; time: string; driver?: string }[] }[];
    hostelDetails?: {
        boys: { capacity: number; vacancies: number; warden: string };
        girls: { capacity: number; vacancies: number; warden: string };
        rules: string[];
    };
    labDetails?: {
        specs: { cpu: string; ram: string; storage: string; gpu: string }[];
        software: string[];
    };
}

export const AMENITIES_DATA: Record<string, AmenityData> = {
    "transportation": {
        title: "Transportation",
        description: "Our college provides a safe and convenient bus service covering major routes in and around the city. The fleet of well-maintained buses ensures that students and staff commute comfortably and on time.",
        features: [
            "Fleet of 10+ buses covering 50km radius",
            "Experienced and licensed drivers",
            "GPS tracking for safety",
            "Separate seating for staff and students",
            "Affordable pass rates"
        ],
        image: "/images/school_bus_1768115663740.png",
        icon: Bus,
        gallery: [
            "/images/school_bus_1768115663740.png",
            "/images/school_bus_1768115663740.png"
        ],
        busSchedules: [
            {
                busName: "Bus 1",
                stops: [
                    { route: "Kalliyod", time: "7:15 AM", driver: "Mr. Rajan" },
                    { route: "Pilakkav", time: "7:25 AM" },
                    { route: "Mananthavady", time: "7:40 AM" },
                    { route: "Thonichal", time: "7:50 AM" },
                    { route: "4th mile, Anjukunnu", time: "8:00 AM" },
                    { route: "Panamaram", time: "8:15 AM" },
                    { route: "Nadavayal", time: "8:30 AM" }
                ]
            },
            {
                busName: "Bus 2",
                stops: [
                    { route: "Korom", time: "7:00 AM", driver: "Mr. Babu" },
                    { route: "Makkiyad", time: "7:10 AM" },
                    { route: "12th Mile", time: "7:20 AM" },
                    { route: "Kandathuvayal", time: "7:25 AM" },
                    { route: "10th Mile", time: "7:35 AM" },
                    { route: "Vellamunda 8/4", time: "7:45 AM" },
                    { route: "Tharuvana", time: "7:55 AM" },
                    { route: "Puthusserikkadavu", time: "8:05 AM" },
                    { route: "Padinjarathara", time: "8:15 AM" },
                    { route: "Cheriyamkolly", time: "8:25 AM" },
                    { route: "5th Mile", time: "8:35 AM" },
                    { route: "Panamaram", time: "8:45 AM" },
                    { route: "Nadavayal", time: "9:00 AM" }
                ]
            }
        ]
    },
    "hostel": {
        title: "Hostel Facility",
        description: "We offer secure and homely accommodation for students coming from distant places. Our hostels are designed to provide a conducive environment for learning and personal growth.",
        features: [
            "Separate hostels for boys and girls",
            "24/7 Security and CCTV surveillance",
            "Spacious and well-ventilated rooms",
            "Hygienic mess providing nutritious meals",
            "Study halls and recreation rooms",
            "Wi-Fi connectivity"
        ],
        image: "/images/school_hostel_1768115536813.png",
        icon: Home,
        gallery: [
            "/images/school_hostel_1768115536813.png"
        ],
        hostelDetails: {
            boys: { capacity: 150, vacancies: 12, warden: "Mr. Thomas K." },
            girls: { capacity: 200, vacancies: 8, warden: "Mrs. Sheela V." },
            rules: [
                "Students must be inside before 8:00 PM.",
                "Visitors are allowed only on weekends.",
                "Silence hours: 10:00 PM - 6:00 AM.",
                "Mess timings must be strictly followed.",
                "Ragging is strictly prohibited."
            ]
        }
    },
    "central-library": {
        title: "Central Library",
        description: "The heart of academic resources, our library houses a vast collection of books, journals, and digital archives to support research and learning.",
        features: [
            "Over 10,000 books and reference materials",
            "Subscription to national and international journals",
            "Digital library with e-books and online databases",
            "Quiet and spacious reading rooms",
            "Computer terminals for research"
        ],
        image: "/images/school_library_1768115599802.png",
        icon: Book
    },
    "computer-labs": {
        title: "Computer Labs",
        description: "State-of-the-art computer laboratories equipped with the latest hardware and software to keep students abreast of technological advancements.",
        features: [
            "High-configuration workshops",
            "High-speed internet connectivity",
            "Latest software for programming and design",
            "Expert lab assistants",
            "Project work support"
        ],
        image: "/images/science_lab_1768115578614.png",
        icon: Monitor,
        labDetails: {
            specs: [
                { cpu: "Intel Core i7 12th Gen", ram: "16GB DDR4", storage: "512GB NVMe SSD", gpu: "NVIDIA RTX 3060" },
                { cpu: "Intel Core i5 11th Gen", ram: "16GB DDR4", storage: "512GB SSD", gpu: "Integrated Iris Xe" }
            ],
            software: [
                "Visual Studio Code", "Python 3.11", "Adobe Creative Cloud", "AutoCAD 2024", "MATLAB", "Android Studio"
            ]
        }
    },
    "cafeteria": {
        title: "Cafeteria",
        description: "A vibrant space for students to relax and enjoy healthy, delicious meals. Hygiene and quality are our top priorities.",
        features: [
            "Freshly prepared meals and snacks",
            "Hygienic kitchen and dining area",
            "Affordable prices",
            "Variety of cuisines",
            "Spacious seating arrangement"
        ],
        image: "/images/school_dining_hall_1768116701071.png",
        icon: Coffee
    },
    "sports-complex": {
        title: "Sports & Fitness",
        description: "We promote physical fitness and sportsmanship through excellent sports infrastructure and training facilities.",
        features: [
            "Large playground for cricket and football",
            "Courts for badminton, volleyball, and basketball",
            "Indoor games facility (Table Tennis, Carrom, Chess)",
            "Well-equipped Gymnasium",
            "Annual Sports Meet"
        ],
        image: "/images/school_sports_ground_1768117765955.png",
        icon: Dumbbell
    },
    "medical-care": {
        title: "Medical Care",
        description: "The health and well-being of our students are paramount. We provide basic medical facilities and support within the campus.",
        features: [
            "First-aid center",
            "On-call doctor availability",
            "Regular health check-up camps",
            "Emergency transport availability",
            "Counseling services"
        ],
        image: "/images/classroom_learning_1768115518451.png", // Placeholder
        icon: Stethoscope
    }
};
