"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
    Search, Menu, X, ChevronDown, Facebook, Instagram
} from "lucide-react";

import TopBar from "./TopBar";
import dynamic from "next/dynamic";
const SearchOverlay = dynamic(() => import("./SearchOverlay"), { ssr: false });
import toast from "react-hot-toast";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    if (pathname === '/admin' || pathname.startsWith('/admin/')) {
        return null;
    }

    const handleLinkClick = (e: React.MouseEvent, href: string) => {
        if (href === "/departments/human-resource-management" || href === "/departments/sociology" || href === "/departments/multimedia") {
            e.preventDefault();
            toast("Content coming soon!", {
                icon: "🚧",
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
            setIsOpen(false);
            setActiveDropdown(null);
        } else {
            // If clicking the current page link, scroll to top
            if (pathname === href) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            setIsOpen(false);
            setActiveDropdown(null);
        }
    };

    const handleLogoClick = (e: React.MouseEvent) => {
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const navigation = [
        { name: "Home", href: "/" },
        {
            name: "About Us",
            href: "/about",
        },
        {
            name: "Departments",
            href: "/departments",
            dropdown: [
                { name: "Computer Science", href: "/departments/computer-science" },
                { name: "Management", href: "/departments/management" },
                { name: "Mass Communication", href: "/departments/mass-communication" },
                { name: "Economics", href: "/departments/economics" },
                { name: "English", href: "/departments/english" },
                { name: "Commerce", href: "/departments/commerce" },
                { name: "Human Resource Management", href: "/departments/human-resource-management" },
                { name: "Sociology", href: "/departments/sociology" },
                { name: "Multimedia", href: "/departments/multimedia" },
                { name: "Malayalam", href: "/departments/malayalam" },
                { name: "Arabic", href: "/departments/arabic" },
            ]
        },
        {
            name: "Academics", href: "/academics",
            dropdown: [
                { name: "Syllabus", href: "http://docs.uoc.ac.in/website/Syll/" },
                { name: "Time Table", href: "https://pareekshabhavan.uoc.ac.in/index.php/examination/timetable" },
                { name: "Academic Calendar", href: "/academic-calender" },
                { name: "Question Bank", href: "/question-bank" },
            ]
        },
        {
            name: "Students Zone",
            href: "/students-zone",
            dropdown: [
                {
                    name: "Student Support",
                    href: "/students-zone/support",
                    dropdown: [
                        { name: "Advisory Scheme", href: "/students-zone/support/advisory" },
                        { name: "Career Guidance and Placement Cell", href: "/students-zone/support/career-guidance" },
                        { name: "PSC Coaching", href: "/students-zone/support/psc-coaching" },
                        { name: "Discipline Commitee", href: "/students-zone/support/discipline" },
                        { name: "Placement Internships", href: "/students-zone/support/placement" },
                        { name: "Fine Arts Commitee", href: "/students-zone/support/fine-arts" },
                        { name: "Grievance Redressal Committee", href: "/students-zone/support/grievance-committee" },
                        { name: "Public relation", href: "/students-zone/support/public-relation" },
                        { name: "PTA", href: "/students-zone/support/pta" },
                        { name: "Scholarship Committee", href: "/students-zone/support/scholarship" },
                        { name: "Remedial Coaching", href: "/students-zone/support/remedial" },
                        { name: "Anti-Ragging Committee", href: "/students-zone/support/anti-ragging" },
                        { name: "Mentor Forum", href: "/students-zone/support/mentor-forum" },
                        { name: "Sports Council", href: "/students-zone/support/sports-council" },
                    ]
                },
                { name: "NSS", href: "/students-zone/nss" },
                { name: "Students Union", href: "/students-zone/union" },
                { name: "College Magazine", href: "/students-zone/magazine" },
                { name: "Alumni", href: "/alumni" },
                { name: "SC/ST Equal Opportunity Cell", href: "/students-zone/sc-st-cell" },
                { name: "Clubs And Forums", href: "/students-zone/clubs" },
                { name: "Anti-Drug Cell", href: "/students-zone/anti-drug-cell" },
                { name: "Pay Fees", href: "/students-zone/pay-fees" },
                { name: "Prayukti", href: "/students-zone/prayukti" },
                { name: "File Your Grievance", href: "/students-zone/grievance" },
            ]
        },
        { name: "Campus Life", href: "/campus-life" },
        { name: "Amenities", href: "/amenities" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    const renderNavLinks = (isMobile = false) => (
        <>
            {navigation.map((link) => (
                <div
                    key={link.name}
                    className="relative group h-full flex items-center cursor-pointer" // h-full ensures full height hover areas
                    onMouseEnter={() => !isMobile && link.dropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => !isMobile && link.dropdown && setActiveDropdown(null)}
                    aria-haspopup={link.dropdown ? "true" : undefined}
                    aria-expanded={activeDropdown === link.name}
                >
                    <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`h-full px-2 text-[11px] xl:text-[12px] font-extrabold uppercase tracking-wider transition-colors relative z-10 flex items-center justify-center gap-0.5 whitespace-nowrap
                                                ${pathname === link.href || (link.dropdown && pathname.startsWith(link.href)) ? "text-[#7a0b3a]" : "text-zinc-600 hover:text-[#7a0b3a]"}`}
                    >
                        {link.name}
                        {link.dropdown && <ChevronDown size={13} strokeWidth={3} className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
                    </Link>

                    {/* Hover Underline */}
                    <span className={`absolute bottom-0 lg:bottom-0 2xl:bottom-6 left-2 right-2 h-0.5 bg-[#7a0b3a] transition-all duration-300 origin-left scale-x-0 
                                            ${(pathname === link.href || activeDropdown === link.name) ? "scale-x-100" : "group-hover:scale-x-100"}`}
                    />

                    {/* Dropdown Menu */}
                    {link.dropdown && (
                        <AnimatePresence>
                            {activeDropdown === link.name && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    onMouseLeave={() => setActiveSubDropdown(null)}
                                    // Adjusted top position for different layouts
                                    className="absolute top-full left-0 min-w-[260px] bg-[#7a0b3a] rounded-xl shadow-2xl py-3 z-50 overflow-visible transform-gpu mt-0"
                                >
                                    {link.dropdown.map((subItem) => (
                                        <div
                                            key={subItem.name}
                                            className="relative"
                                            onMouseEnter={() => subItem.dropdown && setActiveSubDropdown(subItem.name)}
                                        >
                                            <Link
                                                href={subItem.href}
                                                onClick={(e) => handleLinkClick(e, subItem.href)}
                                                className="flex items-center justify-between px-6 py-3 text-sm text-white/95 hover:text-white hover:bg-white/10 transition-colors font-medium border-l-2 border-transparent hover:border-white"
                                            >
                                                <span>{subItem.name}</span>
                                                {subItem.dropdown && <ChevronDown size={14} className="-rotate-90" />}
                                            </Link>

                                            {/* Flyout Sub-menu */}
                                            {subItem.dropdown && (
                                                <AnimatePresence>
                                                    {activeSubDropdown === subItem.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: 10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: 10 }}
                                                            className="absolute left-full top-0 ml-1 min-w-[320px] bg-[#7a0b3a] rounded-xl shadow-2xl py-3 border-l border-white/10 transform-gpu"
                                                        >
                                                            {subItem.dropdown.map(nestedItem => (
                                                                <Link
                                                                    key={nestedItem.name}
                                                                    href={nestedItem.href}
                                                                    onClick={(e) => handleLinkClick(e, nestedItem.href)}
                                                                    className="block px-6 py-2.5 text-[11px] text-white/90 hover:text-white hover:bg-white/10 transition-all uppercase tracking-[0.08em] font-bold"
                                                                >
                                                                    {nestedItem.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}
                </div>
            ))}
        </>
    );

    return (
        <header className="fixed w-full z-50 top-(--ticker-height,0px) flex flex-col shadow-sm">
            <TopBar />
            <nav className="w-full bg-white/98 backdrop-blur-sm border-b border-zinc-100 relative transition-all duration-300">
                <div className="w-full px-4 lg:px-8">
                    {/* Main Row: Logo + Actions */}
                    {/* Middle Identity Row (Hidden on mobile) */}
                    <div className="hidden lg:flex w-full bg-white border-b border-zinc-100">
                        <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center h-28 lg:h-32 px-4 lg:px-8">
                            {/* Logo (Left) */}
                            <Link
                                href="/"
                                onClick={handleLogoClick}
                                className="flex items-center relative z-20 shrink-0"
                            >
                                <div className="relative w-52 lg:w-64 h-20 lg:h-24">
                                    <Image
                                        src="https://ik.imagekit.io/1yxtj9qun/Home/images/PNG%20CM%20COLLEGE.png"
                                        alt="CM College Logo"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 220px, 300px"
                                        quality={95}
                                        className="object-contain scale-[2.2] lg:scale-[2.5]"
                                    />
                                </div>
                            </Link>

                            {/* Affiliation Text (Center) */}
                            <div className="hidden xl:flex flex-col items-center text-center px-8 flex-1">
                                <p className="text-[#7a0b3a] text-xs lg:text-[13px] font-bold leading-tight uppercase tracking-wider mb-1">
                                    Affiliated to The University Of Calicut
                                </p>
                                <p className="text-zinc-600 text-[10px] lg:text-[11px] font-semibold leading-tight uppercase tracking-wide opacity-80 mb-1">
                                    Recognized by UGC under Section 2(f) of the Act 1957
                                </p>
                                <p className="text-[#a11c5a] text-[11px] lg:text-[12px] font-black leading-tight uppercase tracking-widest">
                                    Unit of CM Centre Madavoor
                                </p>
                            </div>

                            {/* Accreditation / Affiliation Logos (Right) */}
                            <div className="flex items-center gap-6 shrink-0">
                                <div className="hidden lg:flex flex-col items-end text-right mr-2">
                                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Accreditations</span>
                                    <span className="text-[11px] text-[#7a0b3a] font-black uppercase tracking-wider whitespace-nowrap">UGC / Calicut Univ / AICTE</span>
                                </div>
                                <StandAloneRotatingLogos />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Logo Row */}
                    <div className="lg:hidden flex justify-between items-center h-20 px-4 border-b border-zinc-50">
                        <Link href="/" onClick={handleLogoClick} className="relative z-20">
                            <div className="relative w-40 h-16 overflow-hidden">
                                <Image
                                    src="https://ik.imagekit.io/1yxtj9qun/Home/images/PNG%20CM%20COLLEGE.png"
                                    alt="CM College Logo"
                                    fill
                                    sizes="160px"
                                    className="object-contain scale-[2.5]"
                                />
                            </div>
                        </Link>
                        <div className="flex items-center gap-2 relative z-50">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="text-zinc-600 hover:text-[#7a0b3a] p-2"
                                aria-label="Search"
                            >
                                <Search size={22} />
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-zinc-800 hover:text-[#7a0b3a] p-2"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>

                    {/* Bottom Navigation Row (Sticky/Desktop) */}
                    <div className="hidden lg:flex w-full bg-white border-b border-zinc-100 h-14 items-center">
                        <div className="max-w-[1440px] mx-auto w-full flex items-center px-4 lg:px-8">
                            {/* Navigation Links (Centered) */}
                            <div className="flex-1 flex justify-center gap-1">
                                {renderNavLinks()}
                            </div>

                            {/* Right Side Actions */}
                            <div className="flex items-center gap-4 ml-6 uppercase shrink-0">
                                <AdmissionButton />
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="group relative flex items-center justify-center w-9 h-9 rounded-full bg-zinc-50 text-[#7a0b3a] hover:bg-[#7a0b3a] transition-all duration-300 ml-2"
                                >
                                    <Search size={18} className="group-hover:text-white transition-colors" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Drawer - Overlay to prevent layout shift lag */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="lg:hidden absolute top-full left-0 w-full z-40 bg-white border-t border-zinc-100 shadow-xl max-h-[85vh] overflow-y-auto overflow-x-hidden"
                            >
                                <div className="py-2 space-y-1">
                                    {navigation.map((link) => (
                                        <div key={link.name}>
                                            <div className="flex flex-col">
                                                {link.dropdown ? (
                                                    // Mobile Dropdown Toggle
                                                    <div className="overflow-hidden">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                activeDropdown === link.name ? setActiveDropdown(null) : setActiveDropdown(link.name);
                                                            }}
                                                            className={`flex items-center justify-between w-full px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors border-b border-zinc-50
                                                                ${pathname.startsWith(link.href) ? "text-[#7a0b3a] bg-[#7a0b3a]/5" : "text-zinc-600 hover:bg-zinc-50"}`}
                                                        >
                                                            <span>{link.name}</span>
                                                            <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                                                        </button>

                                                        {/* Nested Mobile Links */}
                                                        <AnimatePresence>
                                                            {activeDropdown === link.name && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                                    className="bg-zinc-50/50 overflow-hidden"
                                                                >
                                                                    {link.dropdown.map(subItem => (
                                                                        <Link
                                                                            key={subItem.name}
                                                                            href={subItem.href}
                                                                            onClick={(e) => handleLinkClick(e, subItem.href)}
                                                                            className="block px-10 py-3 text-sm text-zinc-600 hover:text-[#7a0b3a] font-medium border-l-[3px] border-transparent hover:border-[#7a0b3a] transition-colors"
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                ) : (
                                                    <Link
                                                        href={link.href}
                                                        onClick={(e) => handleLinkClick(e, link.href)}
                                                        className={`block px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors border-b border-zinc-50
                                                            ${pathname === link.href ? "text-[#7a0b3a] bg-[#7a0b3a]/5 border-l-[3px] border-l-[#7a0b3a]" : "text-zinc-600 hover:bg-zinc-50"}`}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Mobile Admission Button */}
                                    <div className="p-6 flex flex-col items-center gap-4">
                                        <AdmissionButton fullWidth />
                                        <StandAloneRotatingLogos />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </header>
    );
}

function StandAloneRotatingLogos() {
    const [logoIndex, setLogoIndex] = useState(0);
    const logos = [
        { src: "/images/clt.png", alt: "Calicut University" },
        { src: "/images/aicte.jpg", alt: "AICTE" },
        { src: "/images/kerala final emblem_0.jpg", alt: "Kerala Government" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setLogoIndex((prev) => (prev + 1) % logos.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [logos.length]);

    return (
        <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center overflow-hidden border border-zinc-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <AnimatePresence mode="wait">
                <motion.div
                    key={logoIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full p-2"
                >
                    <Image
                        src={logos[logoIndex].src}
                        alt={logos[logoIndex].alt}
                        fill
                        className="object-contain p-1"
                        sizes="56px"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function AdmissionButton({ fullWidth = false }: { fullWidth?: boolean }) {
    return (
        <Link
            href="/admissions"
            aria-label="Make an admission enquiry"
            className={`
                relative flex items-center justify-center bg-[#7a0b3a] text-white font-bold uppercase tracking-widest rounded-md overflow-hidden group transition-all duration-300
                hover:bg-[#60082d] hover:shadow-[0_0_20px_rgba(122,11,58,0.5)] hover:-translate-y-0.5 cursor-pointer
                ${fullWidth ? "w-full py-4 text-sm" : "px-6 py-2.5 text-xs"}
            `}
        >
            <span className="relative z-10">Admission</span>
            {/* Shine Effect */}
            <div className="absolute top-0 -left-full h-full w-full z-5 block transform -skew-x-12 bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
        </Link>
    );
}
