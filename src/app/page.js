"use client"
import Hero from "@/components/Homepage/Hero";
import Services from "@/components/Homepage/Services";
import TopAero from "@/components/Homepage/TopAero";
import Layout from "@/components/Layout";
import RecentBlogs from "@/components/Blogs/RecentBlogs";
import HomeAero from "@/components/Homepage/HomeAero";
import { Media} from "@/lib/media";
import AboutMobile from "@/components/Homepage/AboutMobile";
import AboutDesktop from "@/components/Homepage/AboutDesktop";
import CtaMobile from "@/components/Homepage/CtaMobile";
import Loader2 from "@/components/Loader2";
import HomePortfolio from "@/components/Portfolio/HomePortfolio";
import { fadeUp } from "@/lib/gsapAnimations";
import { LocalBusiness, WebpageJsonLd } from "@/lib/json-ld";


const metadata = {
  title: "Enigma | Digital Product Design, UI/UX & Neuromarketing Agency",
  description: "Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use.",
  img: "index.png",
  slug: "",
  date_published: "2020-10-22T00:00",
  date_modified: "2024-12-25T00:00",
}

export default function Homepage() {

  fadeUp();

  return (
    <>

      <LocalBusiness />
       <WebpageJsonLd metadata={metadata} />
     
      <Layout>
      <Loader2 />
        <Hero />
        <Media greaterThan="tablet">
          <AboutDesktop />
        </Media>
        <Media lessThan="desktop">
          <AboutMobile />
          <CtaMobile />
        </Media>
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