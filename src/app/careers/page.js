"use client"
import Benefits from "@/components/Careers/Benefits";
import BrowseJobs from "@/components/Careers/BrowseJobs";
import FullTimeListing from "@/components/Careers/FullTimeListing";
import Hero from "@/components/Careers/Hero";
import InternshipListing from "@/components/Careers/InternshipListing";
import Layout from "@/components/Layout";
// import MetaData from "@/components/MetaData";
import PageLoader from "@/components/PageLoader";
import { fadeUp, ParaAnim, TitleAnim } from "@/lib/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getCareers } from '@/sanity/lib/careersquery';
// import { WebPageJsonLd } from "next-seo";
import { useEffect, useState } from "react";

export default function Careers() {
    fadeUp();
    TitleAnim();
    ParaAnim();

    const dmetadata = {
        title: "Careers in Design, Tech & Marketing | Current Openings",
        description: "Explore exciting roles in UI/UX Design, Front-End Development, Digital Marketing, Business Development, and more. Impactful work in a collaborative environment.",
        img: "career.png",
        slug: "careers",
        date_published: "2023-01-01T00:00",
        date_modified: "2024-12-25T00:00",
    };

    const [fullTimeOpenings, setFullTimeOpenings] = useState([]);
    const [partTimeOpenings, setPartTimeOpenings] = useState([]);

    useEffect(() => {
      async function fetchData() {
          const data = await getCareers();
  
          if (data && data.jobOpenings) {
              for (let index = 0; index < data.jobOpenings.length; index++) {
                  const job = data.jobOpenings[index];
                  if (job.categories.length > 0) {
                      console.log(`${job.categories[0].title}`);
                  } 
              }
              const fullTimeJobs = [];
              const partTimeJobs = [];
  
              for (let index = 0; index < data.jobOpenings.length; index++) {
                  const job = data.jobOpenings[index];
                  if (job.categories.length > 0) {
                      const categoryTitle = job.categories[0].title.toLowerCase();
                      if (categoryTitle === "full-time") {
                          fullTimeJobs.push(job);
                      } else if (categoryTitle === "part-time") {
                          partTimeJobs.push(job);
                      }
                  }
              }
              setFullTimeOpenings(fullTimeJobs);
              setPartTimeOpenings(partTimeJobs);
          }
      }
  
      fetchData();
  }, []);
  
  
    return (
        <>
        <WebpageJsonLd metadata={dmetadata}/>
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
