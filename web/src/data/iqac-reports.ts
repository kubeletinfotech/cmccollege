export interface IqacReportData {
    id: string;
    title: string;
    date: string;
    size?: string;
    link: string;
}

export const IQAC_REPORTS: IqacReportData[] = [
    {
        id: "1",
        title: "Annual Quality Assurance Report 2023-24",
        date: "August 2024",
        size: "2.4 MB",
        link: "#" // Paste your Google Drive or PDF link here
    },
    {
        id: "2",
        title: "Academic & Administrative Audit",
        date: "March 2024",
        size: "1.8 MB",
        link: "#" // Paste your link here
    },
    {
        id: "3",
        title: "Strategic Plan Document 2020-2025",
        date: "January 2020",
        size: "3.1 MB",
        link: "#" // Paste your link here
    }
];
