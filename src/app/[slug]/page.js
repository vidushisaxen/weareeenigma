
import { client } from "@/sanity/lib/client";
import PortableTextComponent from "@/components/PortableTextComponent";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import RelatedBlogs from "@/components/Blogs/RelatedBlogs";
import BlogInfo from "@/components/Blogs/BlogInfo";

// ✅ Fetch blog post by slug and related blogs
async function getBlogPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    author[]->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    metaDescription,
    excerpt,
    loaderText,
    categories[]->{
      _id,
      title
    },
    body,
    featured,
    mainImage{
      asset->{
        url
      }
    },
    metaImage {
      asset->{
        url
      }
    }
  }`;


  const post = await client.fetch(query, { slug });

  if (!post) return null;

  // Fetch related blogs based on category
  const relatedQuery = `*[_type == "post" && _id != $postId && count(categories[@._ref in $categoryIds]) > 0]{
    _id,
    title,
    slug,
    publishedAt,
    metaDescription,
    categories[]->{
      _id,
      title
    },
    mainImage{
      asset->{
        url
      }
    }
  }`;

  const categoryIds = post.categories?.map(cat => cat._id) || [];

  const relatedPosts = await client.fetch(relatedQuery, {
    postId: post._id,
    categoryIds,
  });

  return { post, relatedPosts };
}

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
  const { post } = await getBlogPostBySlug(params.slug);

  if (!post) return {};

  console.log(post.publishedAt);

  const postUrl = `https://weareenigma.com/${post.slug.current}`;

  return {
    title: post.title,
    description: post.metaDescription || "Read this amazing article on our blog.",
    canonical: postUrl, // ✅ Adding the canonical URL
    openGraph: {
      title: post.title,
      description: post.metaDescription || "Read this amazing article on our blog.",
      url: postUrl,
      type: "article",
      images: [
        {
          url: post.metaImage?.asset?.url || "/default-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: new Date().toISOString(),
      authors: post.author?.map((author) => author.name) || [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "Read this amazing article on our blog.",
      images: [post.metaImage?.asset?.url || "/default-image.jpg"],
    },
    alternates: {
      canonical: postUrl, // ✅ Ensuring the canonical URL is properly included
      languages: {
        hrefLang: 'en-US',
        href: postUrl,
      },

    },
  };
}

// ✅ BlogPost Component
export default async function BlogPost({ params }) {
  const { post, relatedPosts } = await getBlogPostBySlug(params.slug);

  if (!post) {
    return <div className="w-screen h-screen bg-black"></div>;
  }

  function formatDate(date, pattern = "dd/MM/yyyy") {
    if (!date) return "";
    return format(parseISO(date), pattern);
  }

  const formattedDate = formatDate(post.publishedAt);

  return (
    <>
      <Layout>
        <article className="prose mx-auto p-5 w-screen px-[7.5%]">
          <h1 className="text-[3vw] font-heading font-medium py-[2vw] pt-[10vw] w-[70%] blog-title-anim">
            {post.title}
          </h1>
          <div className="w-full flex justify-between">
            {/* ✅ Sidebar with Author Info */}
            <div className="w-[30%] flex flex-col gap-[0.7vw] mt-[4vw]">
              <p className="uppercase text-[1.25vw] text-gray1 font-heading font-medium">
                Author
              </p>
              <div className="flex flex-col gap-2">
                {post.author?.map((author, index) => (
                  <div key={index} className="flex gap-[0.5vw] items-center">
                    <Image
                      src={author.image?.asset?.url || "/assets/default-avatar.jpg"}
                      alt={author.name}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <p className="text-[1.3vw] font-medium uppercase font-heading">
                      {author.name}
                    </p>
                  </div>
                ))}
              </div>

              <p className="uppercase text-[1.25vw] text-gray1 font-heading font-medium mt-[1vw]">
                Posted On
              </p>
              <p className="text-[1.3vw] font-medium uppercase font-heading">
                {formattedDate}
              </p>

              {/* ✅ Social Share Links */}
              <p className="uppercase text-[1.25vw] text-gray1 font-heading font-medium mt-[1vw]">
                Share Article
              </p>
              <BlogInfo shareLink={"/"}/>
            </div>

            {/* ✅ Blog Content */}
            <div className={`w-[65%] text-[1.3vw] mt-[3vw] ${styles.blogContent}`}>
              <PortableTextComponent value={post.body} />
            </div>
          </div>
        </article>

        {/* ✅ Pass related posts to RelatedBlogs component */}
        <RelatedBlogs posts={relatedPosts} />
      </Layout>

      {/* ✅ Page Loader */}
      <PageLoader loaderText={post.loaderText} />
    </>
  );
}
