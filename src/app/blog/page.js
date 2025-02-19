"use client";
import BlogCard from "@/components/Blogs/BlogCard";
import CategoryList from "@/components/Blogs/CategoryList";
import FeaturedBlog from "@/components/Blogs/FeaturedBlog";
import Pagination from "@/components/Blogs/Pagination";
import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import { fadeUp, TitleAnim } from "@/lib/gsapAnimations";
import { getCategories } from "@/sanity/lib/categoryQuery";
import { getBlogPosts } from "@/sanity/lib/queries";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  fadeUp();
  TitleAnim();

  useEffect(() => {
    const fetchData = async () => {
      const blogs = await getBlogPosts();
      const featured = blogs.filter((blog) => blog.featured === true);
      setFeaturedBlog(featured);
    };

    const fetchBlogs = async () => {
      const blogs = await getBlogPosts();
      const blog = blogs.filter((blog) => blog.featured !== true);
      setBlogs(blog);
    };

    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };

    fetchCategories();
    fetchBlogs();
    fetchData();
  }, []);

  // Pagination logic
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <>
      <Layout>
        <FeaturedBlog featuredBlog={featuredBlog} />

        <div className="px-[7.5%]">
          <h2 className='mt-[8vw] mb-[3vw] font-heading font-medium uppercase text-[7vw] tablet:text-[12vw] title-anim'>
            All Articles
          </h2>

          <CategoryList
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <div className="my-[6vw] grid grid-cols-3 gap-x-[3vw] gap-y-[5vw] tablet:grid-cols-2 mobile:grid-cols-1 tablet:my-[10vw] tablet:gap-x-[4vw] mobile:gap-y-10">
            {blogs.map((post) => (
              <BlogCard
                key={post.slug.current}
                href={post?.slug.current}
                category={post.categories[0]?.title || 'Uncategorized'}
                imgSrc={post.mainImage?.asset?.url}
                title={post.title}
              />
            ))}
          </div>
{/* 
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )} */}
        </div>
      </Layout>
      <PageLoader loaderText={"Our Thoughts & Resources"} />
    </>
  );
};

export default Blog;
