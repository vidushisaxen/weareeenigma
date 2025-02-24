import AboutAero from "@/components/Aboutpage/AboutAerosol";
import Client from "@/components/Aboutpage/Client";
import ClientCarousel from "@/components/Aboutpage/ClientCarousel";
import GifSection from "@/components/Aboutpage/GifSection";
import Hero from "@/components/Aboutpage/Hero";
import ParallaxSlider from "@/components/Aboutpage/ParallaxSlider";
import VideoPlayer from "@/components/Aboutpage/VideoPlayer";
import Whyus from "@/components/Aboutpage/Whyus";
import Layout from "@/components/Layout";
import NextPage from "@/components/Layout/NextPage";
import PageLoader from "@/components/PageLoader";
import { WebpageJsonLd } from "@/lib/json-ld";
import { Media } from "@/lib/media";


const siteUrl = "https://weareenigma.com";
export const metadata = {
    title: 'About Enigma - UI/UX Design & Digital Marketing Agency India',
    description: "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
    img: "index.png",
    canonical: "https://weareenigma.com/who-we-are",
    slug: "",
    date_published: "2020-10-22T00:00",
    date_modified: "2024-12-25T00:00",
    openGraph: {
        title: "About Enigma - UI/UX Design & Digital Marketing Agency India",
        description: "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
        url: "https://weareenigma.com/who-we-are",
        type: "website",
        images: [
            {
                url: `${siteUrl}/assets/seo/about.png`,
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
        title: "About Enigma - UI/UX Design & Digital Marketing Agency India",
        description: "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
        images: [
            {
                url: `${siteUrl}/assets/seo/about.png`,
            },],
    },
    alternates: {
        canonical: "https://weareenigma.com/who-we-are",
        languages: {
            hrefLang: 'en-US',
            href: siteUrl,
        },
    },
}

export default function aboutPage() {
   

    const dmetadata = {
        title: "About Enigma - UI/UX Design & Digital Marketing Agency India",
        description: "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
        img: "about.png",
        slug: "who-we-are",
        date_published: "2020-10-22T00:00",
        date_modified: "2024-12-25T00:00",
    }
    return (
        <>
            <WebpageJsonLd metadata={dmetadata} />
            <Layout>
                <Hero />
                <AboutAero text="Enigma is a collective of Creators, Discoverers, Dreamers & Doers!" />
                <VideoPlayer />
                <Whyus />
                <GifSection />
                <Media greaterThan="mobile">
                    <ParallaxSlider />
                </Media>
                <Client />
                <ClientCarousel />
                <NextPage title="Services" link="/services" bgImage="/assets/cursor/2.gif" />
            </Layout>
            <PageLoader loaderText="Who We Are" />
        </>
    )
}