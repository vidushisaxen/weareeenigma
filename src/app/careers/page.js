import Benefits from "@/components/Careers/Benefits";
import BrowseJobs from "@/components/Careers/BrowseJobs";
import FullTimeListing from "@/components/Careers/FullTimeListing";
import Hero from "@/components/Careers/Hero";
import InternshipListing from "@/components/Careers/InternshipListing";
import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import { getCareers } from '@/sanity/lib/careersquery';
import { WebpageJsonLd } from "@/lib/json-ld";

// ✅ Server Component (No `useEffect`, No `useState`)
export default async function Careers() {
    // ✅ Fetch career data on the server
    const careersData = await getCareers();

    if (!careersData || !careersData.jobOpenings) {
        return <div className="text-center text-red-500 text-lg">No job listings available</div>;
    }

    // ✅ Categorize job listings
    const fullTimeOpenings = careersData.jobOpenings.filter(job =>
        job.categories.some(cat => cat.title.toLowerCase() === "full-time")
    );

    const partTimeOpenings = careersData.jobOpenings.filter(job =>
        job.categories.some(cat => cat.title.toLowerCase() === "part-time")
    );

    // ✅ Keep `dmetadata` for JSON-LD
    const dmetadata = {
        title: "Careers in Design, Tech & Marketing | Current Openings",
        description: "Explore exciting roles in UI/UX Design, Front-End Development, Digital Marketing, Business Development, and more. Impactful work in a collaborative environment.",
        img: "career.png",
        slug: "careers",
        date_published: "2023-01-01T00:00",
        date_modified: "2024-12-25T00:00",
    };

    return (
        <>
            <WebpageJsonLd metadata={dmetadata} />
            <Layout>
                <Hero />
                <BrowseJobs />
                <Benefits />
                <FullTimeListing jobs={fullTimeOpenings} />
                <InternshipListing jobs={partTimeOpenings} />
            </Layout>
            <PageLoader loaderText="Careers At Enigma" />
        </>
    );
}

// ✅ Generate Metadata for SEO
export async function generateMetadata() {
    const siteUrl = "https://weareenigma.com/careers";


    return {
        title: "Careers in Design, Tech & Marketing | Current Openings",
        description: "Explore exciting roles in UI/UX Design, Front-End Development, Digital Marketing, Business Development, and more.",
        canonical: siteUrl,
        date_published: "2023-01-01T00:00",
        date_modified: "2023-01-01T00:00", // ✅ Dynamically updates based on the latest job
        openGraph: {
            title: "Careers in Design, Tech & Marketing | Current Openings",
            description: "Join our growing team in UI/UX, Development, and Marketing.",
            url: siteUrl,
            type: "website",
            date_published: "2023-01-01T00:00",
            date_modified: "2023-01-01T00:00",
            images: [{ url: "/assets/seo/career.png", width: 1200, height: 630, alt: "Careers at Enigma" }],
        },
        twitter: {
            card: "summary_large_image",
            title: "Careers in Design, Tech & Marketing | Current Openings",
            description: "Join our growing team in UI/UX, Development, and Marketing.",
            images: ["/assets/seo/career.png"],
        },
        alternates: {
            canonical: siteUrl,
            languages: { hrefLang: "en-US", href: siteUrl },
        },
    };
}
