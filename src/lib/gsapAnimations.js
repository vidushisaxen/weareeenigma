"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SplitInLineWord, SplitInWord } from "./splitText";

gsap.registerPlugin(ScrollTrigger);

export function fadeUp() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            const content = document.querySelectorAll(".fadeup");
            content.forEach((content) => {
                gsap.from(content, {
                    scrollTrigger: {
                        trigger: content,
                        start: "top 90%",
                        end: "bottom 60%",
                    },
                    opacity: 0,
                    delay: 0.3,
                    y: 50,
                    ease: "power3.Out",
                    duration: 0.7,
                    stagger: 0.5
                });
            });
        });
        return () => ctx.revert();
    }, []);
}

export function TitleAnim() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            const titleAnim = document.querySelectorAll(".title-anim");
            titleAnim.forEach(function (el) {
                SplitInLineWord(el);
                let words = el.querySelectorAll(".word");
                gsap.from(words, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                   
                    },
                    opacity: 0,
                    yPercent: 100,
                    duration: 0.8,
                    ease: "Power3.out",
                });
            });
        });
        return () => ctx.revert();
    }, []);
}

export function ParaAnim() {
    useEffect(() => {
        let ctx = gsap.context(() => {
            const ParaAnim = document.querySelectorAll(".para-anim");
            ParaAnim.forEach(function (el) {
                SplitInWord(el);
                let words = el.querySelectorAll(".word");
                gsap.from(words, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                    opacity: 0,
                    yPercent: 100,
                    duration: 0.8,
                    stagger: 0.01,
                    ease: "Power3.out",
                });
            });
        });
        return () => ctx.revert();
    }, []);
}

