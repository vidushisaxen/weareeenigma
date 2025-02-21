import { client } from "./client";

export async function getBlogPosts() {
    const query = `*[_type == "post"]{
      _id,
      title,
      slug,
      publishedAt,
      author[]->{
        name, // ✅ Fetch each author's name
        // image{
        //   asset->{
        //     url // ✅ Fetch each author's image URL
        //   }
        // }
      },
      excerpt,
      loaderText,
      categories[]->{
        title
      },
      body,
      featured,
      mainImage{
        asset->{
          _id,
          url
        }
      }
    } | order(publishedAt desc)`;

    const posts = await client.fetch(query);
    return posts;
}
