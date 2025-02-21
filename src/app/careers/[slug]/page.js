import Image from "next/image";
import { careersQuery } from "@/sanity/lib/careersquery";
import { client } from "@/sanity/lib/client";
import PortableTextComponent from "@/components/PortableTextComponent";
import PageLoader from "@/components/PageLoader";
import Layout from "@/components/Layout";
import JobApplicationForm from "@/components/Careers/JobApplicationForm";
import styles from "@/components/Careers/index.module.css";
import { WebpageJsonLd } from "@/lib/json-ld";

export async function generateStaticParams() {
  const jobs = await client.fetch(
    `*[_type == "careers"][0].jobOpenings[]{ slug }`
  );
  const validJobs = jobs.filter((job) => job.slug?.current);
  return validJobs.map((job) => ({ slug: job.slug.current }));
}

export default async function CareerDetailPage({ params }) {
  const job = await careersQuery(params.slug);
  console.log(job);
  if (!job) {
    return (
      <div className="text-center text-red-500 text-lg">Job not found</div>
    );
  }

  const metadata = {
    title: `${title} | Careers at Enigma Digital`,
    description: seo.description,
    img: "career.png",
    slug: `careers/${job.slug}`,
    date_published: "2023-01-01T00:00",
    date_modified: "2024-12-25T00:00",
  }

  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        {job.tag[0].name === "Closed" && (
          <div className="fixed top-0 left-0 px-4 text-center right-0 bottom-0 z-20 text-white dark:text-black bg-[#00000050] backdrop-blur-md flex items-center justify-center">
            <div>
              <h1 className="text-3xl mb-4 drop-shadow">
                Applications for this role is Closed.
              </h1>
              <p className="text-xl drop-shadow">
                Keep an eye on our{" "}
                <Link className="text-primary hover:underline" href="/careers">
                  careers
                </Link>{" "}
                page for new opportunities.
              </p>
            </div>
          </div>
        )}
        <section className="relative w-screen overflow-hidden" id="hero">
          {job.mainImage ? (
            <Image
              src={job.mainImage}
              alt={job.jobTitle}
              width={1500}
              priority={true}
              height={800}
              className="object-cover absolute w-full  h-full brightness-[0.3]"
            />
          ) : (
            <div className="h-[30vw] w-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600">No Image Available</span>
            </div>
          )}
          <div className="w-4/5 tablet:w-[85%] mx-auto flex items-center justify-center h-full relative z-10 py-[8vw] tablet:py-[16vw]">
            <div className="w-full text-white space-y-[1.5vw] dark:invert tablet:space-y-9">
              <h1 className="text-[5vw] tablet:text-[7vw] font-medium leading-[1.1] font-heading mt-[2vw] tablet:mt-16 title-anim">
                {job.jobTitle}
              </h1>
              <div className="text-2xl mobile:text-xl text-white2 tracking-wide font-body">
                {job.smallDescription}
              </div>
              <div className="flex gap-6 text-xl mobile:flex-col mobile:gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-8 mb-1"
                    fill="currentColor"
                    viewBox="-5.5 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.25 12.063v3.75c-2.969 1.094-6.656 1.719-10.625 1.719s-7.656-0.625-10.625-1.719v-3.75c0-0.688 0.563-1.25 1.25-1.25h5.156v-0.938c0-1.438 1.188-2.656 2.656-2.656h3.125c1.469 0 2.656 1.219 2.656 2.656v0.938h5.156c0.688 0 1.25 0.563 1.25 1.25zM7.969 9.875v0.938h5.313v-0.938c0-0.594-0.5-1.094-1.094-1.094h-3.125c-0.594 0-1.094 0.5-1.094 1.094zM9.063 15.594v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313zM0 23.969v-6.813c3 1.031 6.656 1.625 10.625 1.625s7.625-0.594 10.625-1.625v6.813c0 0.688-0.563 1.25-1.25 1.25h-18.75c-0.688 0-1.25-0.563-1.25-1.25zM12.188 20.75v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313z"></path>
                  </svg>
                  <p className="whitespace-nowrap">{job.duration}</p>
                </div>
                <div className="flex items-center gap-2 border-x-2 px-6 mobile:border-none mobile:px-0">
                  <svg
                    className="w-8 mb-1"
                    fill="currentColor"
                    viewBox="-5.5 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.25 12.063v3.75c-2.969 1.094-6.656 1.719-10.625 1.719s-7.656-0.625-10.625-1.719v-3.75c0-0.688 0.563-1.25 1.25-1.25h5.156v-0.938c0-1.438 1.188-2.656 2.656-2.656h3.125c1.469 0 2.656 1.219 2.656 2.656v0.938h5.156c0.688 0 1.25 0.563 1.25 1.25zM7.969 9.875v0.938h5.313v-0.938c0-0.594-0.5-1.094-1.094-1.094h-3.125c-0.594 0-1.094 0.5-1.094 1.094zM9.063 15.594v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313zM0 23.969v-6.813c3 1.031 6.656 1.625 10.625 1.625s7.625-0.594 10.625-1.625v6.813c0 0.688-0.563 1.25-1.25 1.25h-18.75c-0.688 0-1.25-0.563-1.25-1.25zM12.188 20.75v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313z"></path>
                  </svg>
                  <p className="whitespace-nowrap">{job.jobType}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    fill="currentColor"
                    className="w-6 mb-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 413.099 413.099"
                  >
                    <g>
                      <path d="M206.549,0L206.549,0c-82.6,0-149.3,66.7-149.3,149.3c0,28.8,9.2,56.3,22,78.899l97.3,168.399c6.1,11,18.4,16.5,30,16.5 c11.601,0,23.3-5.5,30-16.5l97.3-168.299c12.9-22.601,22-49.601,22-78.901C355.849,66.8,289.149,0,206.549,0z M206.549,193.4 c-30,0-54.5-24.5-54.5-54.5s24.5-54.5,54.5-54.5s54.5,24.5,54.5,54.5C261.049,169,236.549,193.4,206.549,193.4z"></path>
                    </g>
                  </svg>
                  <p className="whitespace-nowrap">{job.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden">
          <div className=" w-[85%] mx-auto flex justify-between my-[8vw] tablet:my-[15%] mobile:my-[20vw] tablet:block">
            <div className="w-[45%] tablet:w-full tablet:mb-16">
              <div className={styles.careerDetail}>
                <PortableTextComponent value={job.body} />
              </div>
            </div>

            <div className="w-[49%] shadow-xl rounded-xl px-16 py-10 mobile:px-4 dark:bg-white2 h-fit tablet:w-full">
              <h2 className="text-[3vw] tablet:text-4xl w-fit mx-auto font-heading font-medium mb-6">
                Apply<span className="text-primary"> Now</span>
              </h2>
              <div>
                <JobApplicationForm jobTitle={job.jobTitle} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <PageLoader loaderText={job.jobTitle} />
    </>
  );
}
