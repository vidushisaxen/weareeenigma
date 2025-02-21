import BlogCard from "@/components/Blogs/BlogCard";
import CategoryList from "@/components/Blogs/CategoryList";
import FeaturedBlog from "@/components/Blogs/FeaturedBlog";
import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import { getCategories } from "@/sanity/lib/categoryQuery";
import { getBlogPosts } from "@/sanity/lib/queries";
// import BlogAnimations from "./BlogAnimations"; // ✅ New Client Component for animations

// ✅ Fetch data on the server before rendering
async function fetchData() {
  const blogs = await getBlogPosts();
  const categories = await getCategories();

  const featuredBlog = blogs.filter((blog) => blog.featured === true);
  const nonFeaturedBlogs = blogs.filter((blog) => blog.featured !== true);

  return { featuredBlog, nonFeaturedBlogs, categories };
}

// ✅ Convert the component to a Server Component
export default async function Blog() {
  const { featuredBlog, nonFeaturedBlogs, categories } = await fetchData();

  return (
    <>
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

      {/* ✅ GSAP Animations in a separate Client Component */}
      {/* <BlogAnimations /> */}

      {/* ✅ Page Loader (Client Component) */}
      <PageLoader loaderText={"Our Thoughts & Resources"} />
    </>
  );
}
