import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Layout from "@/components/Layout";
import CategoryList from "@/components/Blogs/CategoryList";
import BlogCard from "@/components/Blogs/BlogCard";
import { getCategories } from "@/sanity/lib/categoryQuery";
import { getBlogPosts } from "@/sanity/lib/queries";

export default async function CategoryPage({ params }) {
  // ✅ Ensure `params` is awaited properly before using `params.slug`
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // ✅ Fetch data on the server before rendering
  async function fetchData(slug) {
    const categoryQuery = `*[_type == "category" && slug.current == $slug][0]`;
    const post = await client.fetch(categoryQuery, { slug });

    if (!post) {
      notFound(); // Automatically renders Next.js 404 page
    }

    // Fetch categories and blogs
    const [categories, allBlogs] = await Promise.all([
      getCategories(),
      getBlogPosts(),
    ]);

    // Filter blogs based on the active category
    const filteredBlogs = allBlogs.filter(
      (blog) => blog.categories?.[0]?.title === post.title
    );

    return { post, categories, filteredBlogs };
  }

  const { post, categories, filteredBlogs } = await fetchData(slug);

  return (
    <Layout>
      <div className="px-[7.5%]">
        <h2 className="mt-[8vw] mb-[3vw] font-heading font-medium uppercase text-[7vw] tablet:text-[12vw] title-anim">
          {post.title} Blogs
        </h2>

        <CategoryList
          categories={categories}
          activeCategory={post.title}
        //   setActiveCategory={() => {}}
        />

        <div className="my-[6vw] grid grid-cols-3 gap-x-[3vw] gap-y-[5vw] tablet:grid-cols-2 mobile:grid-cols-1 tablet:my-[10vw] tablet:gap-x-[4vw] mobile:gap-y-10">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.slug.current}
                href={blog.slug.current}
                category={blog.categories?.[0]?.title || "Uncategorized"}
                imgSrc={blog.mainImage?.asset?.url}
                title={blog.title}
              />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No blogs found in this category.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
