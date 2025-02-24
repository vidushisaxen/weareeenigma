import BlogCard from "@/components/Blogs/BlogCard";
import CategoryList from "@/components/Blogs/CategoryList";
import FeaturedBlog from "@/components/Blogs/FeaturedBlog";
import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
// import { WebsiteJsonLd } from "@/lib/json-ld";
import { getCategories } from "@/sanity/lib/categoryQuery";
import { getBlogPosts } from "@/sanity/lib/queries";

// ✅ Fetch data on the server before rendering
async function fetchData() {
  const blogs = await getBlogPosts();
  const categories = await getCategories();

  const featuredBlog = blogs.filter((blog) => blog.featured === true);
  const nonFeaturedBlogs = blogs.filter((blog) => blog.featured !== true);

  return { featuredBlog, nonFeaturedBlogs, categories };
}

// ✅ Generate Metadata for Blog Listing Page
export async function generateMetadata() {
  const blogs = await getBlogPosts();
  
  const siteUrl = "https://weareenigma.com/blog";
  
  return {
    title: "The Enigma Blog | Discover, Learn & Be Future Ready",
    description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
    canonical: siteUrl,
    openGraph: {
      title: "The Enigma Blog | Discover, Learn & Be Future Ready",
      description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
      url: siteUrl,
      type: "website",
      images: blogs.length > 0
        ? [{ 
            url: "/assets/seo/blog.png",
            width: 1200,
            height: 630,
            alt: "The Enigma Blog | Discover, Learn & Be Future Ready",
          }]
        : [{ url: "/assets/seo/blog.png", width: 1200, height: 630, alt: "The Enigma Blog | Discover, Learn & Be Future Ready" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "The Enigma Blog | Discover, Learn & Be Future Ready",
      description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
      images: blogs.length > 0
        ? [blogs[0].metaImage?.asset?.url || blogs[0].mainImage?.asset?.url || "/default-image.jpg"]
        : ["/default-image.jpg"],
    },
    alternates: {
      canonical: siteUrl,
      languages: {
        hrefLang: 'en-US',
        href: siteUrl,
      },
    },
  };
} 

// ✅ Convert the component to a Server Component
export default async function Blog() {
  const { featuredBlog, nonFeaturedBlogs, categories } = await fetchData();

//   const metadata = {
//     title: "The Enigma Blog | Discover, Learn & Be Future Ready",
//     description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
//     img: "blog.png",
//     slug: "blog",
//     date_published: "2023-01-01T00:00",
//     date_modified: "2024-12-25T00:00",
// }

  return (
    <>
    {/* <WebsiteJsonLd metadata={metadata}/> */}
      <Layout>
        {/* ✅ Featured Blog Section */}
        <FeaturedBlog featuredBlog={featuredBlog} />

        <div className="px-[7.5%]">
          <h2 className="mt-[8vw] mb-[3vw] font-heading font-medium uppercase text-[7vw] tablet:text-[12vw] title-anim">
            All Articles
          </h2>

          {/* ✅ Category List */}
          <CategoryList categories={categories} activeCategory={"all"} setActiveCategory={() => {}} />

          {/* ✅ Blog List */}
          <div className="my-[6vw] grid grid-cols-3 gap-x-[3vw] gap-y-[5vw] tablet:grid-cols-2 mobile:grid-cols-1 tablet:my-[10vw] tablet:gap-x-[4vw] mobile:gap-y-10">
            {nonFeaturedBlogs.map((post) => (
              <BlogCard
                key={post.slug.current}
                href={post.slug.current}
                category={post.categories[0]?.title || "Uncategorized"}
                imgSrc={post.mainImage?.asset?.url}
                title={post.title}
              />
            ))}
          </div>
        </div>
      </Layout>

      {/* ✅ Page Loader */}
      <PageLoader loaderText={"Our Thoughts & Resources"} />
    </>
  );
}
