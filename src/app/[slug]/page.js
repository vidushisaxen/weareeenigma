"use client";

import { useEffect, useState, use } from "react";
import { client } from "../../sanity/lib/client";
import PortableTextComponent from "../../components/PortableTextComponent";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import Layout from "@/components/Layout";
import { useRouter } from "next/navigation";
import PageLoader from "@/components/PageLoader";
import Link from "next/link";

function formatDate(date, pattern = "dd/MM/yyyy") {
  if (!date) return "";
  const parsedDate = parseISO(date);
  return format(parsedDate, pattern);
}

export default function BlogPost({ params }) {
  const resolvedParams = use(params); // ✅ This unwraps the promise

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getPost() {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]`;
        const fetchedPost = await client.fetch(query, {
          slug: resolvedParams.slug,
        });

        if (!fetchedPost) {
          setError(true);
          router.push("/404");
        } else {
          setPost(fetchedPost);
        }
      } catch (err) {
        console.error("Failed to fetch post:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getPost();
  }, [resolvedParams.slug, router]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error || !post) {
    return (
      <p className="text-center text-red-500">
        Post not found or an error occurred.
      </p>
    );
  }
  console.log(post);

  const formattedDate = formatDate(post.publishedAt);

  return (
    <>
      <Layout>
        <article className="prose mx-auto p-5 w-screen px-[7.5%]">
          <h1 className="text-[3vw] font-heading font-medium py-[2vw] pt-[10vw] w-[70%] blog-title-anim">
            {post.title}
          </h1>
          <div className="w-full flex justify-between">
            <div className="w-[30%] flex flex-col gap-[0.7vw] mt-[4vw]">
              <p className="uppercase text-[1.25vw] text-gray1 font-heading font-medium">
                Author
              </p>
              <div className="flex gap-[0.5vw] items-center">
                <Image
                  src={"/"}
                  alt=""
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p className="text-[1.3vw] font-medium uppercase font-heading">
                  {post.author}
                </p>
              </div>
              <p className="uppercase text-[1.25vw] text-gray1 font-heading font-medium mt-[1vw]">
                Posted On
              </p>
              <p className="text-[1.3vw] font-medium uppercase font-heading">
                {formattedDate}
              </p>
              <p className="uppercase text-[1.25vw] text-gray1 font-heading font-medium mt-[1vw]">
                share article
              </p>
              <div className="flex items-center justify-start gap-6">
                <Link href={"/"}>
                  <Image
                    className="w-[2vw] tablet:w-[5vw] mobile:w-9"
                    src="/assets/icons/linkedin.webp"
                    alt="LinkedIn Icon"
                    title="LinkedIn Icon"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href={""}>
                  <Image
                    className="w-[2vw] tablet:w-[5vw] mobile:w-9"
                    src="/assets/icons/facebook.webp"
                    alt="Facebook Icon"
                    title="Facebook Icon"
                    width={40}
                    height={40}
                  />
                </Link>

                <Link href={"/"}>
                  <Image
                    className="w-[2vw] tablet:w-[5vw] mobile:w-9"
                    src="/assets/icons/twitter.webp"
                    alt="Twitter Icon"
                    title="Twitter Icon"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    className="w-[2vw] tablet:w-[5vw] mobile:w-9"
                    src="/assets/icons/whatsapp.webp"
                    alt="WhatsApp Icon"
                    title="WhatsApp Icon"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>

            <div
              className={`w-[65%] text-[1.3vw] mt-[3vw] ${styles.blogContent}`}
            >
              <PortableTextComponent value={post.body} />
            </div>
          </div>
        </article>
      </Layout>
      <PageLoader loaderText={post.title} />
    </>
  );
}
