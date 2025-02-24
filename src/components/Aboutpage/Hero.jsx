"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from "./index.module.css";
import { fadeUp, ParaAnim, TitleAnim } from '@/lib/gsapAnimations';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    TitleAnim();
    ParaAnim();
    fadeUp();
    const container = useRef(null);
    const svgRef = useRef(null);
    const headingRef = useRef(null);
    const scroll = useRef(null);
    const eRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(eRef.current, {
                autoAlpha: 0,
                duration: 1,
                delay: 3,
            })
            .from(scroll.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                delay: -0.9,
            })
        });
        return () => ctx.revert();
    }, [])

    useEffect(() => {
        const headerLogo = document.querySelector(".header-logo");
        const paths = svgRef.current.querySelectorAll(".ea-ref");
        let ctx = gsap.context(() => {
            gsap.set(headerLogo, {opacity: 0});
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=3000 top",
                    markers: false,
                    pin: true,
                    scrub: 0.25,
                },
            });
            tl.to(headerLogo, {
                opacity: 1,
                duration: 0.5,
            })
            .to(paths, {
                transform: "scale(1) translate(0%, 0%)",
                duration: 1,
                stagger: 0.1,
                ease: "none"
            }, "-=0.5")
                .to(headingRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "none"
                }, "-=0.2");
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={container} className='h-screen w-screen overflow-hidden' data-cursor-size="120px" data-cursor-text="Scroll Down">
                <div className='h-full w-full flex items-center justify-center'>
                    <svg ref={svgRef} className='w-[55%] tablet:w-[80vw] mobile:w-[90%] h-auto overflow-visible dark:invert' width="500" height="134" viewBox="0 0 500 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path ref={eRef} className={`${styles.e} ea-ref`} id='e' d="M0 22.5996V111.85H63.2V79.2996H50V104.6H6.6L13.2 102.9V73.0996L6.6 71.3996H63.2V22.5996H0ZM50 64.0496H6.6L13.2 62.3496V31.5496L6.6 29.8496H50V64.0496Z" fill="url(#paint1_linear_1459_903)" />
                            <path className={`${styles.n} ea-ref`} id='n' d="M85.2998 22.5488V111.799H118.2V104.549L91.8998 104.499L98.4998 102.849V31.5988L91.7998 29.8488H141.9L135.3 31.5488V111.799H148.5V22.5488H85.2998Z" fill="url(#paint0_linear_1459_903)" />
                            <g className={`${styles.i} ea-ref`} id='i'>
                                <path d="M196.25 0.599609H183.05V13.7996H196.25V0.599609Z" fill="url(#paint2_linear_1459_903)" />
                                <path d="M164.75 22.5496L164.7 29.8496H189.75L183.15 31.5496V102.85L189.75 104.5H164.75L164.7 111.8H196.35V22.5496H164.75Z" fill="url(#paint3_linear_1459_903)" />
                            </g>
                            <g className={`${styles.g} ea-ref`} id='g'>
                                <path d="M256.8 60.5496H243.6V73.7496H256.8V60.5496Z" fill="url(#paint4_linear_1459_903)" />
                                <path d="M225.2 22.5496H218.4V111.8H274.85H281.65V22.5496H225.2ZM268.4 102.85L274.95 104.55L225 104.5L231.6 102.8V31.5496L225 29.8496H275L268.4 31.5496V102.85Z" fill="url(#paint5_linear_1459_903)" />
                                <path d="M218.45 0.599609L218.4 22.5496H225.2L231.6 20.8996V9.54961L225.2 7.89961H275L268.4 9.59961V15.2496H281.65V0.599609H218.45Z" fill="url(#paint6_linear_1459_903)" />
                                <path d="M274.85 111.8L268.4 113.45V124.8L275 126.5H225L231.7 124.8V119.2H218.4L218.45 133.8H281.65V111.8H274.85Z" fill="url(#paint7_linear_1459_903)" />
                            </g>
                            <g className={`${styles.m} ea-ref`} id='m'>
                                <path d="M316.95 120.551H303.75V133.751H316.95V120.551Z" fill="url(#paint10_linear_1459_903)" />
                                <path d="M335.25 111.801L335.3 104.501H310.25L316.85 102.851V31.5508L310.25 29.8508H335.25L335.3 22.5508H303.65V111.801H335.25Z" fill="url(#paint11_linear_1459_903)" />
                                <path d="M414.7 111.801V22.5508H381.8V29.8508H408.1L401.5 31.5508V102.801L408.2 104.501H358.1L364.7 102.851V22.5508H351.5V111.801H414.7Z" fill="url(#paint9_linear_1459_903)" />
                            </g>
                            <path className={`${styles.a} ea-ref`} id='a' d="M500 111.799V22.5488H436.8V55.0988H450V29.8488H493.4L486.8 31.5488V61.3488L493.4 63.0488H436.8V111.799H500ZM450 70.3488H493.4L486.8 72.0488V102.849L493.4 104.549H450V70.3488Z" fill="url(#paint8_linear_1459_903)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_1459_903" x1="115.13" y1="21.8788" x2="115.13" y2="186.207" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1459_903" x1="29.8304" y1="21.9296" x2="29.8304" y2="186.258" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_1459_903" x1="179.639" y1="-0.235225" x2="179.639" y2="204.508" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_1459_903" x1="179.639" y1="-0.235225" x2="179.639" y2="204.508" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_1459_903" x1="248.254" y1="-0.400391" x2="248.254" y2="244.85" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_1459_903" x1="248.254" y1="-0.400391" x2="248.254" y2="244.85" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_1459_903" x1="248.254" y1="-0.400391" x2="248.254" y2="244.85" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_1459_903" x1="248.254" y1="-0.400391" x2="248.254" y2="244.85" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_1459_903" x1="466.63" y1="21.8788" x2="466.63" y2="186.207" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_1459_903" x1="356.066" y1="21.7159" x2="356.066" y2="226.459" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint10_linear_1459_903" x1="356.066" y1="21.7159" x2="356.066" y2="226.459" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <linearGradient id="paint11_linear_1459_903" x1="356.066" y1="21.7159" x2="356.066" y2="226.459" gradientUnits="userSpaceOnUse">
                                <stop />
                                <stop offset="1" stopColor="#333333" />
                            </linearGradient>
                            <clipPath id="clip0_1459_903">
                                <rect width="500" height="133.2" fill="white" transform="translate(0 0.599609)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 ref={headingRef} className='text-[1.4vw] translate-y-8 tablet:text-[2.2vw] mobile:text-[4.5vw] font-heading font-medium tracking-wider absolute top-2/3 left-1/2 -translate-x-1/2 tablet:top-[60%] tablet:w-max  mobile:w-full mobile:text-center opacity-0'>Digital Experience Design Agency For Ambitious Brands</h1>
                </div>
                <div ref={scroll} className='absolute bottom-0 right-0'>
                    <svg className='mr-[1vw] dark:invert' width="18" height="240" viewBox="0 0 15 195" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3.5" y1="198" x2="3.50001" y2="71" stroke="#CDCAC5" />
                        <path d="M5.45455 41.1705C5.02273 41.2216 4.6875 41.429 4.44886 41.7926C4.21023 42.1562 4.09091 42.6023 4.09091 43.1307C4.09091 43.517 4.15341 43.8551 4.27841 44.1449C4.40341 44.4318 4.57528 44.6562 4.79403 44.8182C5.01278 44.9773 5.26136 45.0568 5.53977 45.0568C5.77273 45.0568 5.97301 45.0014 6.14062 44.8906C6.3054 44.777 6.44318 44.6321 6.55398 44.456C6.66193 44.2798 6.75142 44.0952 6.82244 43.902C6.89062 43.7088 6.94602 43.5312 6.98864 43.3693L7.22727 42.483C7.28693 42.2557 7.36932 42.0028 7.47443 41.7244C7.57955 41.4432 7.72301 41.1747 7.90483 40.919C8.08381 40.6605 8.31392 40.4474 8.59517 40.2798C8.87642 40.1122 9.22159 40.0284 9.63068 40.0284C10.1023 40.0284 10.5284 40.152 10.9091 40.3991C11.2898 40.6435 11.5923 41.0014 11.8168 41.473C12.0412 41.9418 12.1534 42.5114 12.1534 43.1818C12.1534 43.8068 12.0526 44.348 11.8509 44.8054C11.6491 45.2599 11.3679 45.6179 11.0071 45.8793C10.6463 46.1378 10.2273 46.2841 9.75 46.3182V45.2273C10.0795 45.1989 10.3523 45.0881 10.5682 44.8949C10.7812 44.6989 10.9403 44.4517 11.0455 44.1534C11.1477 43.8523 11.1989 43.5284 11.1989 43.1818C11.1989 42.7784 11.1335 42.4162 11.0028 42.0952C10.8693 41.7741 10.6847 41.5199 10.4489 41.3324C10.2102 41.1449 9.93182 41.0511 9.61364 41.0511C9.32386 41.0511 9.08807 41.1321 8.90625 41.294C8.72443 41.456 8.5767 41.669 8.46307 41.9332C8.34943 42.1974 8.25 42.483 8.16477 42.7898L7.85795 43.8636C7.66193 44.5455 7.3821 45.0852 7.01847 45.483C6.65483 45.8807 6.17898 46.0795 5.59091 46.0795C5.10227 46.0795 4.67614 45.9474 4.3125 45.6832C3.94602 45.4162 3.66193 45.0582 3.46023 44.6094C3.25568 44.1577 3.15341 43.6534 3.15341 43.0966C3.15341 42.5341 3.25426 42.0341 3.45597 41.5966C3.65483 41.1591 3.92756 40.8125 4.27415 40.5568C4.62074 40.2983 5.0142 40.1619 5.45455 40.1477V41.1705ZM6 31.2681V32.3249C5.69602 32.3874 5.42898 32.4968 5.19886 32.6531C4.96875 32.8065 4.77557 32.994 4.61932 33.2156C4.46023 33.4343 4.34091 33.6772 4.26136 33.9442C4.18182 34.2113 4.14205 34.4897 4.14205 34.7795C4.14205 35.3079 4.27557 35.7866 4.54261 36.2156C4.80966 36.6417 5.20313 36.9812 5.72301 37.234C6.2429 37.484 6.88068 37.609 7.63636 37.609C8.39205 37.609 9.02983 37.484 9.54972 37.234C10.0696 36.9812 10.4631 36.6417 10.7301 36.2156C10.9972 35.7866 11.1307 35.3079 11.1307 34.7795C11.1307 34.4897 11.0909 34.2113 11.0114 33.9442C10.9318 33.6772 10.8139 33.4343 10.6577 33.2156C10.4986 32.994 10.304 32.8065 10.0739 32.6531C9.84091 32.4968 9.57386 32.3874 9.27273 32.3249V31.2681C9.71875 31.3477 10.1179 31.4925 10.4702 31.7028C10.8224 31.913 11.1222 32.1744 11.3693 32.4869C11.6136 32.7994 11.7997 33.1502 11.9276 33.5394C12.0554 33.9258 12.1193 34.3391 12.1193 34.7795C12.1193 35.5238 11.9375 36.1857 11.5739 36.7653C11.2102 37.3448 10.6932 37.8008 10.0227 38.1332C9.35227 38.4656 8.55682 38.6317 7.63636 38.6317C6.71591 38.6317 5.92045 38.4656 5.25 38.1332C4.57955 37.8008 4.0625 37.3448 3.69886 36.7653C3.33523 36.1857 3.15341 35.5238 3.15341 34.7795C3.15341 34.3391 3.21733 33.9258 3.34517 33.5394C3.47301 33.1502 3.66051 32.7994 3.90767 32.4869C4.15199 32.1744 4.45028 31.913 4.80256 31.7028C5.15199 31.4925 5.55114 31.3477 6 31.2681ZM12 29.5604H3.27273L3.27273 26.6115C3.27273 25.9297 3.3892 25.37 3.62216 24.9325C3.85227 24.495 4.16903 24.1712 4.57244 23.9609C4.97585 23.7507 5.43466 23.6456 5.94886 23.6456C6.46307 23.6456 6.91903 23.7507 7.31676 23.9609C7.71449 24.1712 8.02699 24.4936 8.25426 24.9283C8.47869 25.3629 8.59091 25.9183 8.59091 26.5945V28.9808H7.63636V26.6286C7.63636 26.1626 7.56818 25.7876 7.43182 25.5036C7.29545 25.2166 7.10227 25.0092 6.85227 24.8814C6.59943 24.7507 6.2983 24.6854 5.94886 24.6854C5.59943 24.6854 5.29403 24.7507 5.03267 24.8814C4.77131 25.0121 4.5696 25.2209 4.42756 25.5078C4.28267 25.7947 4.21023 26.174 4.21023 26.6456V28.5036H12V29.5604ZM8.07955 25.4524L12 23.3047V24.532L8.07955 26.6456V25.4524ZM7.63636 14.521C8.55682 14.521 9.35227 14.6871 10.0227 15.0195C10.6932 15.3519 11.2102 15.8079 11.5739 16.3874C11.9375 16.967 12.1193 17.6289 12.1193 18.3732C12.1193 19.1175 11.9375 19.7795 11.5739 20.359C11.2102 20.9386 10.6932 21.3945 10.0227 21.7269C9.35227 22.0593 8.55682 22.2255 7.63636 22.2255C6.71591 22.2255 5.92045 22.0593 5.25 21.7269C4.57955 21.3945 4.0625 20.9386 3.69886 20.359C3.33523 19.7795 3.15341 19.1175 3.15341 18.3732C3.15341 17.6289 3.33523 16.967 3.69886 16.3874C4.0625 15.8079 4.57955 15.3519 5.25 15.0195C5.92045 14.6871 6.71591 14.521 7.63636 14.521ZM7.63636 15.5437C6.88068 15.5437 6.2429 15.6701 5.72301 15.9229C5.20313 16.1729 4.80966 16.5124 4.54261 16.9414C4.27557 17.3675 4.14205 17.8448 4.14205 18.3732C4.14205 18.9016 4.27557 19.3803 4.54261 19.8093C4.80966 20.2354 5.20313 20.5749 5.72301 20.8278C6.2429 21.0778 6.88068 21.2028 7.63636 21.2028C8.39205 21.2028 9.02983 21.0778 9.54972 20.8278C10.0696 20.5749 10.4631 20.2354 10.7301 19.8093C10.9972 19.3803 11.1307 18.9016 11.1307 18.3732C11.1307 17.8448 10.9972 17.3675 10.7301 16.9414C10.4631 16.5124 10.0696 16.1729 9.54972 15.9229C9.02983 15.6701 8.39205 15.5437 7.63636 15.5437ZM12 12.744H3.27273V11.6871H11.0625V7.63033H12V12.744ZM12 5.99396H3.27273V4.93714H11.0625L11.0625 0.880327H12L12 5.99396Z" fill="currentColor" className="text-black2 dark:text-white" />
                    </svg>
                </div>
            </section>
        </>
    )
}

export default Hero;