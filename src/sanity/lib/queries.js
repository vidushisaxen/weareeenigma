import { client } from "./client"

export async function getBlogPosts() {
    const query = `*[_type == "post"]{
      _id,
      title,
      slug,
      publishedAt,
      author,
      excerpt,
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
    } | order(publishedAt desc)`
  
    const posts = await client.fetch(query)
    return posts
  }
  