import ParallaxSlider from "@/components/Aboutpage/ParallaxSlider";
import Layout from "@/components/Layout";
import NextPage from "@/components/Layout/NextPage";
import ServiceMarquee from "@/components/Layout/ServiceMarquee";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/Services/Hero";
import Process from "@/components/Services/Process";
import ServiceListing from "@/components/Services/ServiceListing";
import VideoSection from "@/components/Services/VideoSection";
import { WebpageJsonLd } from "@/lib/json-ld";
import { Media } from "@/lib/media";


const siteUrl = "https://weareenigma.com";
export const metadata = {
    title: 'Award-Winning Web Design, UX Design & Digital Marketing Services',
    description: "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
    // img: "index.png",
    canonical: "https://weareenigma.com/services",
    // slug: "",
    date_published: "2020-10-22T00:00",
    date_modified: "2024-12-25T00:00",
    openGraph: {
        title: "Award-Winning Web Design, UX Design & Digital Marketing Services",
        description: "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
        url: "https://weareenigma.com/services",
        type: "website",
        images: [
            {
                url: `${siteUrl}/assets/seo/Service.png`,
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
        title: "Award-Winning Web Design, UX Design & Digital Marketing Services",
        description: "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
        images: [
            {
                url: `${siteUrl}/assets/seo/Service.png`,
            },],
    },
    alternates: {
        canonical: "https://weareenigma.com/services",
        languages: {
            hrefLang: 'en-US',
            // href: siteUrl,
        },
    },
}

export default function Services() {

    const dmetadata = {
        title: "Award-Winning Web Design, UX Design & Digital Marketing Services",
        description: "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
        img: "Service.png",
        slug: "services",
        date_published: "2020-10-22T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={dmetadata} />
            <Layout>
                <Hero />
                <ServiceListing />
                <Media greaterThan="mobile">
                    <VideoSection />
                </Media>
                <Process />
                <Media greaterThan="mobile">
                    <ParallaxSlider />
                </Media>
                <ServiceMarquee />
                <NextPage title="Works" link="/our-portfolio" bgImage="/assets/cursor/5.gif" />
            </Layout>
            <PageLoader loaderText="What We Do" />
        </>
    )
}