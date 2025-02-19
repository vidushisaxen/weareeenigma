"use client"
import { NextSeo } from "next-seo";

export default function MetaData({ metadata }) {

    const { title, description, img, slug } = metadata;
    // const homepage = 'https://weareenigma.com';

    return (
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                url: `https://weareenigma.com/${slug}`,
                title: `${title}`,
                description: `${description}`,
                images: [
                    {
                        url: `https://weareenigma.com/assets/seo/${img}`,
                        width: 1200,
                        height: 630,
                        alt: "Page Og Image",
                        type: "image/png",
                    },
                ],
            }}
            additionalMetaTags={[
                {
                    name: "twitter:title",
                    content: `${title}`
                },
                {
                    name: "twitter:description",
                    content: `${description}`
                },
                {
                    name: "twitter:image",
                    content: `https://weareenigma.com/assets/seo/${img}`
                },
            ]}
            canonical={`https://weareenigma.com/${slug}`}
            languageAlternates={[{
                hrefLang: 'en-US',
                href: `https://weareenigma.com/${slug}`,
            }]}
        />
    )
}