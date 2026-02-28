export interface Program {
    id: string;
    name: string;
    logo: string;
    description: string;
    tagline?: string;
    gallery?: string[];
}

export const programs: Program[] = [
    {
        id: "queens-drive",
        name: "Queens Drive",
        logo: "https://ik.imagekit.io/1yxtj9qun/Home/images/queens-drive.png",
        description: "An exclusive initiative empowering women students through leadership training, skill development, and professional networking. Queen's Drive aims to nurture the next generation of female leaders in various industries.",
        tagline: "Empowering Future Female Leaders",
        gallery: [
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg"
        ]
    },
    {
        id: "plant-up",
        name: "Plant Up",
        logo: "https://ik.imagekit.io/1yxtj9qun/Home/images/plant-up.png",
        description: "Our core environmental sustainability program. Plant Up focuses on campus greening, biodiversity conservation, and environmental awareness workshops, involving students in practical ecological restoration.",
        tagline: "Nurturing Nature, Sustaining Future",
        gallery: [
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg"
        ]
    },
    {
        id: "meet-the-professional",
        name: "Meet the Professional",
        logo: "https://ik.imagekit.io/1yxtj9qun/Home/images/meet-professional.png",
        description: "A bridge between academia and industry. This program brings top-tier professionals from diverse fields to campus for interactive sessions, giving students real-world insights into their future careers.",
        tagline: "Bridging Academia and Industry",
        gallery: [
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg"
        ]
    },
    {
        id: "chirakukal",
        name: "Chirakukal",
        logo: "https://ik.imagekit.io/1yxtj9qun/Home/images/chirakukal.png",
        description: "A unique social outreach and community support program. Chirakukal (Wings) focuses on providing educational support and specialized skills to underprivileged children in the local community.",
        tagline: "Giving Wings to Dreams",
        gallery: [
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg"
        ]
    },
    {
        id: "nss",
        name: "NSS",
        logo: "https://ik.imagekit.io/1yxtj9qun/Home/images/nss?updatedAt=1772262388668?",
        description: "National Service Scheme (NSS) is a student welfare organization that works to improve the quality of life of students and the community.",
        tagline: "National Service Scheme",
        gallery: [
        ]
    },
];
