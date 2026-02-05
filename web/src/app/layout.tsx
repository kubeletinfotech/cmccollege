import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono, Playfair_Display, Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cmcollege.edu.in"),
  title: {
    default: "CM College of Art and Science – Nadavayal, Wayanad",
    template: "%s | CM College"
  },
  description: "CM College of Arts and Science in Nadavayal, Wayanad offers quality higher education in Arts, Science, and Management. Affiliated to the University of Calicut.",
  keywords: ["CM College", "Arts and Science", "Nadavayal", "Wayanad", "College in Wayanad", "Best College in Wayanad", "University of Calicut Affiliated", "BBA", "BCA", "BA English", "BCom", "Higher Education Kerala"],
  authors: [{ name: "CM College of Arts and Science" }],
  creator: "CM College of Arts and Science",
  publisher: "CM College of Arts and Science",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "CM College of Art and Science – Excellence in Education",
    description: "Join CM College of Arts and Science, a premier institution in Wayanad offering top-tier education and holistic development.",
    url: "https://cmcollege.edu.in",
    siteName: "CM College of Art and Science",
    images: [
      {
        url: "https://ik.imagekit.io/5c6j602yp/About/Untitled%20design.png?updatedAt=1768755140239",
        width: 1200,
        height: 630,
        alt: "CM College of Arts and Science Campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "CM College of Art and Science",
    description: "Empowering students through quality education in Wayanad.",
    images: ["https://ik.imagekit.io/5c6j602yp/About/Untitled%20design.png?updatedAt=1768755140239"],
  },
  verification: {
    google: "google-site-verification-code-here", // User needs to replace this
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import SiteLayout from "@/components/SiteLayout";
import UserSync from "@/components/UserSync";

import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "CM College of Art and Science",
    "alternateName": "CM College",
    "url": "https://cmcollege.edu.in",
    "logo": "https://cmcollege.edu.in/favicon.png",
    "sameAs": [
      "https://www.facebook.com/cmcollegenadavayal",
      "https://www.instagram.com/cmcollege_nadavayal"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nadavayal",
      "addressLocality": "Wayanad",
      "addressRegion": "Kerala",
      "postalCode": "670721",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-1234567890", // Update with actual number
      "contactType": "admissions",
      "areaServed": "IN",
      "availableLanguage": ["English", "Malayalam"]
    }
  };

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${oswald.variable} antialiased pt-[var(--ticker-height,0px)]`}
        >
          <NextTopLoader
            color="#0BB9F3"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #0BB9F3,0 0 5px #0BB9F3"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <SiteLayout>
            <UserSync />
            {children}
          </SiteLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}

