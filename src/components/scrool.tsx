"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Scroll() {
  let xPercent = 0;

  /* REFS */
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  const animation = () => {
    if (xPercent <= -109) {
      xPercent = 0;
    }
    if (!firstTextRef.current && !secondTextRef.current) return;
    gsap.set(firstTextRef.current, { xPercent: xPercent });
    gsap.set(secondTextRef.current, { xPercent: xPercent });
    xPercent -= 0.045;
    requestAnimationFrame(animation);
  };

  useLayoutEffect(() => {
    requestAnimationFrame(animation);
  });

  return (
    <section className="container">
      <div className="max-w-[600px] h-[50px} overflow-hidden relative">
        <div className="bg-gradient-to-r from-[#05070B] to-transparent w-[50px] md:w-[200px] h-[120%] absolute top-[50%] translate-y-[-50%] left-0" />
        <div className="bg-gradient-to-l from-[#05070B] to-transparent w-[50px] md:w-[200px] h-[120%] absolute top-[50%] translate-y-[-50%] right-0" />
        <div className="w-[2310px] h-[50px] gap-[10px]  flex z-[-1] ">
          <div
            className="flex gap-2 w-[900px] justify-between whitespace-nowrap overflow-x-auto z-[-1]"
            ref={firstTextRef}
          >
            <p className="text-[14px] font-satoshi-b text-white">
              Offline Drafting
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
            <p className="text-[14px] font-satoshi-b text-white">
              Rich Text Editing
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
            <p className="text-[14px] font-satoshi-b text-white">
              Instant Sync & Publish
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
            <p className="text-[14px] font-satoshi-b text-white">
              Tag & Category Organization
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
            <p className="text-[14px] font-satoshi-b text-white">
              Developer SDK
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
            <p className="text-[14px] font-satoshi-b text-white">
              Image Management
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
          </div>
          <div
            className="flex gap-2 w-[900px] justify-between whitespace-nowrap overflow-x-auto z-[-1]"
            ref={secondTextRef}
          >
            <p className="text-[14px] font-satoshi-b text-white">
              Offline Drafting
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
            <p className="text-[14px] font-satoshi-b text-white">
              Rich Text Editing
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
            <p className="text-[14px] font-satoshi-b text-white">
              Instant Sync & Publish
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
            <p className="text-[14px] font-satoshi-b text-white">
              Tag & Category Organization
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
            <p className="text-[14px] font-satoshi-b text-white">
              Developer SDK
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
            <p className="text-[14px] font-satoshi-b text-white">
              Image Management
            </p>
            <p className="text-[14px] font-satoshi-b text-white">•</p>
          </div>
        </div>
      </div>
    </section>
  );
}
