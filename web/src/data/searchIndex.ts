export type SearchItem = {
    title: string;
    type: "Department" | "Amenity" | "Page" | "Service" | "News";
    url: string;
    content: string;
    keywords: string[];
};

export const SEARCH_INDEX: SearchItem[] = [
    // --- Departments ---
    {
        title: "Department of Computer Science",
        type: "Department",
        url: "/departments/computer-science",
        content: "BSc Computer Science program focusing on programming, algorithms, artificial intelligence, and software development. State-of-the-art computer labs and expert faculty.",
        keywords: ["cs", "coding", "software", "programming", "it", "lab", "bsc"]
    },
    {
        title: "Department of Management (BBA)",
        type: "Department",
        url: "/departments/management",
        content: "Bachelor of Business Administration (BBA) course designed to mold future business leaders. Covers finance, marketing, human resources, and entrepreneurship.",
        keywords: ["business", "finance", "marketing", "hr", "manager", "commerce"]
    },
    {
        title: "Department of Commerce",
        type: "Department",
        url: "/departments/commerce",
        content: "BCom programs with specialization in Computer Applications and Finance. Prepares students for careers in banking, accounting, and corporate finance.",
        keywords: ["account", "finance", "bank", "tax", "gst", "bcom"]
    },
    {
        title: "Department of English",
        type: "Department",
        url: "/departments/english",
        content: "BA English Language and Literature. Explores classic and contemporary literature, linguistics, and cultural studies. Enhances communication and critical thinking skills.",
        keywords: ["literature", "language", "communication", "arts", "humanities"]
    },
    {
        title: "Department of Economics",
        type: "Department",
        url: "/departments/economics",
        content: "BA Economics program analyzing micro and macroeconomics, fiscal policy, development economics, and financial markets.",
        keywords: ["finance", "economy", "market", "policy", "analysis"]
    },
    {
        title: "Department of Mass Communication",
        type: "Department",
        url: "/departments/mass-communication",
        content: "Journalism and Mass Communication course. Covers media studies, reporting, editing, advertising, and digital media production.",
        keywords: ["journalism", "media", "news", "reporting", "tv", "radio"]
    },
    {
        title: "Department of Sociology",
        type: "Department",
        url: "/departments/sociology",
        content: "BA Sociology exploring social structures, community dynamics, and social work. Fieldwork and research-oriented learning.",
        keywords: ["social", "society", "community", "culture", "humanities"]
    },
    {
        title: "Department of Human Resource Management",
        type: "Department",
        url: "/departments/human-resource-management",
        content: "Specialized program in Human Resource Management focusing on organizational behavior, talent acquisition, and employee relations.",
        keywords: ["hr", "management", "corporate", "employee", "business"]
    },
    {
        title: "Department of Multimedia",
        type: "Department",
        url: "/departments/multimedia",
        content: "Study multimedia, graphic design, animation, and visual effects. Hands-on training in creative software and design principles.",
        keywords: ["design", "animation", "vfx", "graphics", "creative", "media"]
    },

    // --- Core Pages ---
    {
        title: "About CM College",
        type: "Page",
        url: "/about",
        content: "Learn about CM College of Arts and Science, our history, mission, vision, and the CM Centre Madavoor legacy. Affiliated to Calicut University.",
        keywords: ["history", "mission", "vision", "principal", "management", "trust"]
    },
    {
        title: "Principal & Management",
        type: "Page",
        url: "/about",
        content: "Meet our Principal, Chairman, and Administrative Council members who guide the institution towards excellence.",
        keywords: ["staff", "admin", "council", "leader", "shafi pulpara", "abdul rahman"]
    },
    {
        title: "Admissions",
        type: "Page",
        url: "/admissions",
        content: "Admission information for UG and PG courses. Eligibility criteria, application process, and important dates for the academic year.",
        keywords: ["apply", "join", "seat", "application", "form", "eligibility"]
    },
    {
        title: "Contact Us",
        type: "Page",
        url: "/contact",
        content: "Get in touch with CM College. Phone numbers, email addresses, location map, and enquiry form for prospective students and parents.",
        keywords: ["phone", "email", "address", "location", "map", "enquiry"]
    },
    {
        title: "Academic Programs",
        type: "Page",
        url: "/academics",
        content: "Overview of all undergraduate courses offered. Syllabus, academic calendar, and examination details.",
        keywords: ["course", "syllabus", "exam", "result", "time table", "calender"]
    },
    {
        title: "Student Gallery",
        type: "Page",
        url: "/gallery",
        content: "Photo gallery of campus events, arts fest, sports day, union inauguration, and student activities.",
        keywords: ["photo", "image", "picture", "events", "fest", "program"]
    },

    // --- Amenities ---
    {
        title: "College Library",
        type: "Amenity",
        url: "/amenities/library",
        content: "Vast collection of books, journals, and digital resources. Quiet study areas and reference sections for students and faculty.",
        keywords: ["book", "read", "study", "journal", "research"]
    },
    {
        title: "Computer Lab",
        type: "Amenity",
        url: "/amenities/computer-lab",
        content: "High-tech computer laboratory with high-speed internet and modern software for practical sessions.",
        keywords: ["pc", "internet", "wifi", "coding", "practical"]
    },
    {
        title: "Hostel Facility",
        type: "Amenity",
        url: "/amenities/hostels",
        content: "Safe and comfortable hostel accommodation for male students. Hygienic mess, study halls, and 24/7 warden supervision.",
        keywords: ["stay", "room", "food", "mess", "accommodation", "residence"]
    },
    {
        title: "College Bus",
        type: "Amenity",
        url: "/amenities/bus-facility",
        content: "Transportation facility specifically for female students covering major routes in Wayanad district.",
        keywords: ["transport", "vehicle", "route", "travel", "commute"]
    },
    {
        title: "Prayer Hall (Masjid)",
        type: "Amenity",
        url: "/amenities/prayer-hall",
        content: "On-campus Masjid for daily prayers and spiritual activities. Peaceful environment for reflection.",
        keywords: ["pray", "spiritual", "mosque", "religion"]
    },

    // --- Services/Others ---
    {
        title: "Scholarships & Financial Aid",
        type: "Service",
        url: "/admissions/scholarships",
        content: "Information on Government and Management scholarships (e-Grantz, NSP, Merit Scholarship) for eligible students.",
        keywords: ["money", "grant", "fund", "support", "fee", "concession"]
    },
    {
        title: "College Brochure",
        type: "Service",
        url: "/admissions/brochure",
        content: "Download the official college brochure to view course details, facilities, and campus highlights.",
        keywords: ["download", "pdf", "info", "prospectus"]
    },
    {
        title: "College Prospectus",
        type: "Service",
        url: "/admissions/prospectus",
        content: "Comprehensive guide to rules, regulations, fee structure, and academic policies of the college.",
        keywords: ["rules", "fee", "regulation", "guide"]
    },
    {
        title: "Students Zone",
        type: "Page",
        url: "/students-zone",
        content: "Dedicated area for student activities, clubs, union, and campus life updates.",
        keywords: ["club", "union", "activity", "arts", "nss"]
    },
];
