"use client"
import Hero from "@/components/Homepage/Hero";
import Services from "@/components/Homepage/Services";
import TopAero from "@/components/Homepage/TopAero";
import Layout from "@/components/Layout";
import RecentBlogs from "@/components/Blogs/RecentBlogs";
import HomeAero from "@/components/Homepage/HomeAero";
import { Media } from "@/lib/media";
import AboutMobile from "@/components/Homepage/AboutMobile";
import AboutDesktop from "@/components/Homepage/AboutDesktop";
import CtaMobile from "@/components/Homepage/CtaMobile";
import Loader2 from "@/components/Loader2";
import HomePortfolio from "@/components/Portfolio/HomePortfolio";
import { fadeUp } from "@/lib/gsapAnimations";
import { NextSeo } from "next-seo";
// import { LocalBusiness, WebpageJsonLd } from "@/lib/json-ld";
// import MetaData from "@/components/MetaData";

export default function Homepage() {
  fadeUp();

  const metadata = {
    title: "Enigma | Digital Product Design, UI/UX & Neuromarketing Agency",
    description: "Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use.",
    img: "index.png",
    slug: "",
    date_published: "2020-10-22T00:00",
    date_modified: "2024-12-25T00:00",
  }

  return (
    <>
      {/* <LocalBusiness /> */}
      {/* <NextSeo
                  title={metadata.title}
                  description={metadata.description}
                  openGraph={{
                      url: `https://weareenigma.com/${slug}`,
                      title: `${title}`,
                      description: `${description}`,
                      images: [
                          {
                              url: `https://weareenigma.com/assets/seo/${img}`,
                              width: 1200,
                              height: 630,
                              alt: "Page Og Image",
                              type: "image/png",
                          },
                      ],
                  }}
                  additionalMetaTags={[
                      {
                          name: "twitter:title",
                          content: `${title}`
                      },
                      {
                          name: "twitter:description",
                          content: `${description}`
                      },
                      {
                          name: "twitter:image",
                          content: `https://weareenigma.com/assets/seo/${img}`
                      },
                  ]}
                  canonical={`https://weareenigma.com/${slug}`}
                  languageAlternates={[{
                      hrefLang: 'en-US',
                      href: `https://weareenigma.com/${slug}`,
                  }]}
              /> */}
      <Layout>
      {/* <WebpageJsonLd metadata={metadata} /> */}
      {/* <MetaData metadata={metadata} /> */}
      <Loader2 />
        <Hero />
        <Media greaterThan="tablet">
          <AboutDesktop />
        </Media>
        {/* <Media lessThan="desktop">
          <AboutMobile />
          <CtaMobile />
        </Media> */}
        <TopAero text="we make cool things that do great business" />
        <Services />
        <HomePortfolio />
        <HomeAero text="good things happen when you say hello" />
        <RecentBlogs
          line1={"Our Creative"}
          line2={"Musings"}
          blogs={blogData}
        />
      </Layout>
    </>
  )
}

const blogData = [
  {
    title: "UX Design Glossary Guide",
    slug: "ux-design-glossary-guide",
    img: "/assets/blogs/featured/design-glossary.webp",
    category: "Design",
  },
  {
    title: "Beginners Guide To SEO: 30 Websites To Help You Getting Started On Your Link Building Journey",
    slug: "link-building-website-list",
    img: "/assets/blogs/featured/link-building.webp",
    category: "Marketing",
  },
  {
    title: "How Much Should A Website Cost? Cracking The Ultimate Conundrum",
    slug: "website-cost-guide",
    img: "/assets/blogs/featured/website-cost.webp",
    category: "Strategy",
  },
]