import { client } from "./client";

export async function getCareers() {
  const query = `*[_type == "careers"][0]{
      title,
      slug,
      para,
      openingsContent {
        heading,
        description
      },
      jobOpenings[] {
        "profileImage": profileImage.asset->url,
        jobTitle,
        slug,
        smallDescription,
        features[],
        tag,
        categories[]->{
          title
        }
      }
    }`;

  const careers = await client.fetch(query);
  return careers;
}

// lib/careersQuery.js
export async function careersQuery(slug) {
  const query = `
    *[_type == "careers"][0].jobOpenings[slug.current == $slug][0]{
      "profileImage": profileImage.asset->url,
      jobTitle,
       body,     
}
  `;
  const job = await client.fetch(query, { slug });
  return job;
}

