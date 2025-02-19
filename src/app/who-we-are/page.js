"use client"
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
import { fadeUp, ParaAnim, TitleAnim} from "@/lib/gsapAnimations"
import { Media } from "@/lib/media";

export default function aboutPage() {
    TitleAnim();
    ParaAnim();
    fadeUp();

    const metadata = {
        title: "About Enigma - UI/UX Design & Digital Marketing Agency India",
        description: "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
        img: "about.png",
        slug: "who-we-are",
        date_published: "2020-10-22T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            {/* <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} /> */}
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