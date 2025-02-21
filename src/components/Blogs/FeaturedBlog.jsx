
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/sanity/lib/queries';
// import FeaturedBlogAnimation from './FeaturedBlogAnimation'; // Separate Client Component for GSAP

// ✅ Fetch the featured blog on the server
async function fetchFeaturedBlog() {
    const blogs = await getBlogPosts();
    const featuredBlog = blogs.filter(blog => blog.featured === true);
    return featuredBlog.length > 0 ? featuredBlog[0] : null; // Get the first featured blog
}

export default async function FeaturedBlog() {
    const blog = await fetchFeaturedBlog();

    if (!blog) return null; // Return nothing if no featured blog exists

    function formatDate(date, pattern = 'dd/MM/yyyy') {
        if (!date) return ''; // Handle null/undefined date safely
        const parsedDate = parseISO(date);
        return format(parsedDate, pattern);
    }

    const formattedDate = formatDate(blog.publishedAt);

    return (
        <section id="featured-post">
            <div className="h-screen w-[85%] mx-auto pt-[10%] tablet:h-[90vw] tablet:pt-[20%] mobile:h-full mobile:pt-[30%]">
                <div className='flex h-full justify-between items-center mobile:block'>
                    {/* Featured Image */}
                    <div className='w-2/5 h-full overflow-hidden relative tablet:h-3/4 mobile:w-full mobile:h-[100vw] mobile:mb-6 feat-fade'>
                        <Image
                            className='w-full h-full object-cover'
                            src={blog.mainImage?.asset?.url}
                            width={1000}
                            height={1000}
                            alt={blog.title}
                            priority={true}
                        />
                        <p className='absolute top-6 left-6 text-[1.3vw] font-medium font-heading bg-black text-white capitalize border border-black2 rounded-full py-[0.5vw] px-[1.5vw] tablet:text-lg mobile:px-4 mobile:py-1'>Featured</p>
                    </div>

                    {/* Blog Details */}
                    <div className="w-3/5 h-full pl-[8%] flex flex-col justify-center mobile:w-full mobile:pl-0">
                        <div className='text-[1.3vw] mb-6 text-gray2 font-heading tablet:text-lg tablet:mb-3 feat-fade'>
                            <p>By <span></span> | <span>{formattedDate}</span></p>
                        </div>
                        <h1 className='text-[2.5vw] font-medium font-heading mb-10 tablet:text-2xl tablet:mb-6 feat-fade'>{blog.title}</h1>
                        <p className='text-[1.3vw] tracking-wide mb-10 tablet:text-lg tablet:mb-6 mobile:hidden feat-fade'>
                            {blog.excerpt}
                        </p>
                        <Link className='en-link-under text-[1.4vw] tablet:text-xl feat-fade' href={`/${blog.slug.current}`}>
                            <span>
                                Read More{" "}
                                <Image
                                    height={10}
                                    width={10}
                                    className='w-4 h-4 mb-1 tablet:w-[1.6vw] rotate-45 inline-block dark:invert mobile:w-[3vw]'
                                    alt='arrow icon'
                                    src='/assets/icons/arrow-angle.svg'
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ✅ Include GSAP animations in a separate Client Component */}
            {/* <FeaturedBlogAnimation /> */}
        </section>
    );
}
