import ContactDetails from "@/components/ContactPage/ContactDetails";
import Hero from "@/components/ContactPage/Hero";
import HomeAero from "@/components/Homepage/HomeAero";
import Layout from "@/components/Layout";
import ServiceMarquee from "@/components/Layout/ServiceMarquee";
import PageLoader from "@/components/PageLoader";
import { WebpageJsonLd } from "@/lib/json-ld";

   
const siteUrl = "https://weareenigma.com";
export const metadata = {
    title: "We Elevate Your Digital Presence | Contact Enigma",
    description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
    // img: "index.png", 
    canonical: "https://weareenigma.com/get-in-touch",
    // slug: "",
    date_published: "2020-10-22T00:00",
    date_modified: "2024-12-25T00:00",
    openGraph: {
        title: "We Elevate Your Digital Presence | Contact Enigma",
        description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
        url: "https://weareenigma.com/get-in-touch",
        type: "website",
        images: [
            {
                url: `${siteUrl}/assets/seo/contact.png`,
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
        title: "We Elevate Your Digital Presence | Contact Enigma",
        description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
        images: [
            {
                url: `${siteUrl}/assets/seo/contact.png`,
            },],
    },
    alternates: {
        canonical: "https://weareenigma.com/get-in-touch",
        languages: {
            hrefLang: 'en-US',
            // href: siteUrl,
        },
    },
}

export default function ContactPage() {
    const dmetadata = {
        title: "We Elevate Your Digital Presence | Contact Enigma",
        description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
        img: "contact.png",
        slug: "get-in-touch",
        date_published: "2020-10-22T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={dmetadata} />
            <Layout>
                <Hero />
                <ServiceMarquee />
                <ContactDetails />
                <HomeAero text="you're one call away from being awesome"/>
            </Layout>
            <PageLoader loaderText="Hi There! Let's Talk?" />
        </>
    )
}