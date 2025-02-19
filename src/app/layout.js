"use client"
import '@/styles/globals.css';
import '@/styles/cursor.css';
import '@/styles/fonts.css';
import { ReactLenis } from "lenis/react";
import { Cursor } from 'react-creative-cursor';

// export const metadata = {
//   title: "Enigma | Digital Product Design, UI/UX & Neuromarketing Agency",
//   description: "Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use.",
//   additionalLinkTags: [
//     {
//       rel: 'icon',
//       type: "image/x-icon",
//       href: '/favicon.png',
//     },
//     {
//       rel: 'preload',
//       href: '/assets/fonts/clash-display/ClashDisplay-Medium.woff2',
//       as: 'font',
//       type: 'font/woff2',
//       crossOrigin: 'anonymous'
//     },
//     {
//       rel: 'preload',
//       href: '/assets/fonts/clash-display/ClashDisplay-Regular.woff2',
//       as: 'font',
//       type: 'font/woff2',
//       crossOrigin: 'anonymous'
//     },
//     {
//       rel: 'preload',
//       href: '/assets/fonts/ageo/Ageo-Medium.woff2',
//       as: 'font',
//       type: 'font/woff2',
//       crossOrigin: 'anonymous'
//     },
//     {
//       rel: 'alternate',
//       type: 'application/rss+xml',
//       title: 'Enigma Digital Feed',
//       href: 'https://weareenigma.com/feed.xml'
//     },
//   ],
// };

export default function RootLayout({ children }) {
  return (
    <>
    
      <ReactLenis root options={{ lerp: 0.05 }}>
        <html lang="en">
          <body>
            <Cursor isGelly={true} cursorSize={15.0} magneticAnimationDuration={0.5} animationDuration={1.0}/>
            {children}
          </body>
        </html>
      </ReactLenis>
    </>
  );
}
