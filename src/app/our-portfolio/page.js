import ParallaxSlider from "@/components/Aboutpage/ParallaxSlider";
import Layout from "@/components/Layout";
import NextPage from "@/components/Layout/NextPage";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/Portfolio/Hero";
import PortfolioAero from "@/components/Portfolio/PortfolioAero";
import WorksPortfolio from "@/components/Portfolio/WorksPortfolio";
import { WebpageJsonLd } from "@/lib/json-ld";
import { Media } from "@/lib/media";


const siteUrl = "https://weareenigma.com";
export const metadata = {
    title: "Enigma's Portfolio: Showcasing Digital Mastery",
    description: "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
    // img: "index.png", 
    canonical: "https://weareenigma.com/our-portfolio",
    // slug: "",
    date_published: "2020-10-22T00:00",
    date_modified: "2024-12-25T00:00",
    openGraph: {
        title: "Enigma's Portfolio: Showcasing Digital Mastery",
        description: "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
        url: "https://weareenigma.com/our-portfolio",
        type: "website",
        images: [
            {
                url: `${siteUrl}/assets/seo/work.png`,
                width: 1200,
                height: 630,
                alt: "Page Og Image",
                type: "image/png",
            },
        ],
        locale: "en_US",
        site_name: "Enigma Digital Agency"
    },
    twitter: {
        card: "summary_large_image",
        site: "Enigma Digital Agency",
        title: "Enigma's Portfolio: Showcasing Digital Mastery",
        description: "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
        images: [
            {
                url: `${siteUrl}/assets/seo/work.png`,
            },],
    },
    alternates: {
        canonical: "https://weareenigma.com/our-portfolio",
        languages: {
            hrefLang: 'en-US',
            // href: siteUrl,
        },
    },
}

export default function PortfolioPage() {
    const dmetadata = {
        title: "Enigma's Portfolio: Showcasing Digital Mastery",
        description: "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
        img: "work.png",
        slug: "our-portfolio",
        date_published: "2020-10-22T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={dmetadata} />
            <Layout>
                <Hero />
                <PortfolioAero text="we make it simple, but significant" />
                <WorksPortfolio />
                <Media greaterThan="mobile" className="mb-[5%] tablet:mb-[10%] mobile:mb-0"> 
                 <ParallaxSlider />
                </Media>
                <NextPage title="About" link="/who-we-are" bgImage="/assets/cursor/10.gif" />
            </Layout>
            <PageLoader loaderText="Our Meticulously Crafted Projects" />
        </>
    )
}