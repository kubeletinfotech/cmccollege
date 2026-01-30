import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cmcollege.edu.in';

    // Static pages
    const routes = [
        '',
        '/about',
        '/admissions',
        '/admissions/brochure',
        '/academics',
        '/departments/computer-science',
        '/departments/management',
        '/departments/mass-communication',
        '/departments/economics',
        '/departments/english',
        '/departments/commerce',
        '/departments/human-resource-management',
        '/departments/sociology',
        '/campus-life',
        '/amenities/hostels',
        '/amenities/prayer-hall',
        '/amenities/computer-lab',
        '/amenities/library',
        '/amenities/bus-facility',
        '/contact',
        '/news',
        '/gallery',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
