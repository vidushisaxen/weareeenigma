import { getBlogPostBySlug } from "@/sanity/lib/queries"; // ✅ Import query function
import PortableTextComponent from "@/components/PortableTextComponent";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import RelatedBlogs from "@/components/Blogs/RelatedBlogs";
import BlogInfo from "@/components/Blogs/BlogInfo";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { WebpageJsonLd } from "@/lib/json-ld";

// ✅ Generate Metadata
export async function generateMetadata({ params }) {
  const data = await getBlogPostBySlug(params.slug);

  if (!data.post) {
    notFound();
  }

  const { post } = data;
  const postUrl = `https://weareenigma.com/${post.slug.current}`;

  return {
    title: post.title,
    description: post.metaDescription || "Read this amazing article on our blog.",
    canonical: postUrl,
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
      canonical: postUrl,
      languages: {
        hrefLang: "en-US",
        href: postUrl,
      },
    },
  };
}

// ✅ BlogPost Component
export default async function BlogPost({ params }) {
  const data = await getBlogPostBySlug(params.slug);
  
  if (!data.post) {
    notFound(); // ✅ Redirects to 404 page instead of crashing
  }

  const dmetadata = {
    title: data.post.title,
    description: data.post.metaDescription,
    img: data.post.metaImage.asset.url,
    slug: data.post.slug.current,
    date_published: data.post.publishedAt,
    date_modified: "2024-12-25T00:00",
}

  const { post, relatedPosts } = data;

  function formatDate(date, pattern = "dd/MM/yyyy") {
    if (!date) return "";
    return format(parseISO(date), pattern);
  }

  const formattedDate = formatDate(post.publishedAt);

  return (
    <>
    <WebpageJsonLd metadata={dmetadata}/>
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
              <BlogInfo shareLink={"/"} />
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
