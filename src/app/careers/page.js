"use client"
import Benefits from "@/components/Careers/Benefits";
import BrowseJobs from "@/components/Careers/BrowseJobs";
import FullTimeListing from "@/components/Careers/FullTimeListing";
import Hero from "@/components/Careers/Hero";
import InternshipListing from "@/components/Careers/InternshipListing";
import Layout from "@/components/Layout";
import MetaData from "@/components/MetaData";
import PageLoader from "@/components/PageLoader";
import { fadeUp, ParaAnim, TitleAnim } from "@/lib/gsapAnimations";
import { getCareers } from '@/sanity/lib/careersquery';
import { useEffect, useState } from "react";

// import { getAllJobs } from "@/lib/jobs";
// import { WebpageJsonLd } from "@/lib/json-ld";

export default  function Careers({ jobs }) {
    fadeUp();
    TitleAnim();
    ParaAnim();
  const metadata = {
    title: "Careers in Design, Tech & Marketing | Current Openings",
    description: "Explore exciting roles in UI/UX Design, Front-End Development, Digital Marketing, Business Development, and more. Impactful work in a collaborative environment.",
    img: "career.png",
    slug: "careers",
    date_published: "2023-01-01T00:00",
    date_modified: "2024-12-25T00:00",
  }

  const [careersData, setCareersData] = useState([]);
  const [fullTimeOpenings, setfullTimeOpenings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCareers();
      setCareersData(data);
      console.log(data);
    console.log(data.jobOpenings[0].categories[0].title=="Full-time");
    }
    fetchData();
  }, []);
   
  return (
    <>
      {/* <WebpageJsonLd metadata={metadata} /> */}
      {/* <MetaData metadata={metadata} /> */}
            <Layout>
                <Hero />
                <BrowseJobs />
                <Benefits />
                <FullTimeListing jobs={careersData} />
                <InternshipListing jobs={careersData} />
            </Layout>
            <PageLoader loaderText="Careers At Enigma"/>
        </>
    )
}
