import { client } from "./client";

export async function getCareers() {
  const query = `*[_type == "careers"][0]{
      title,
      slug,
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

export async function careersQuery(slug) {
  const query = `
    *[_type == "careers"][0]{
      jobOpenings[slug.current == $slug][0]{
        "profileImage": profileImage.asset->url,
        "mainImage": mainImage.asset->url,
        jobTitle,
        experience,
        salary,
        tag,
        location,
        smallDescription,
        body,
        categories[]->{
          title
        }
      }
    }
  `;
  const data = await client.fetch(query, { slug });
  return data?.jobOpenings || null; 
}


