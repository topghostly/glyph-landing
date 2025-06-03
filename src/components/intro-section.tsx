"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

function Loader() {
  // Fuction to stop scrolling while loader is active
  const stopScrolling = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScrolling = () => {
    document.body.style.overflow = "";
  };

  const containerRef = useRef(null);
  const svgHolderRef = useRef(null);

  // SVG ANIMATION
  useLayoutEffect(() => {
    if (svgHolderRef.current) {

      const tl = gsap.timeline({});

      gsap.set(svgHolderRef.current, {
        scale: 0
      });

      tl.to(svgHolderRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.8,
      })
        .to(svgHolderRef.current, {
          scale: 0,
          delay: 3,
          duration: 0.3,
        })
        .to(containerRef.current, {
          "--mask-size": "2%",
          duration: 0.4,
          ease: "power2.inOut",
        })
        .to(containerRef.current, {
          "--mask-size": "10%",
          duration: 0.5,
          ease: "power2.inOut",
          delay: 1,
        })
        .to(containerRef.current, {
          "--mask-size": "100%",
          duration: 0.7,
          ease: "power2.inOut",
          delay: 1.5,

          onComplete: () => {
            enableScrolling();
            containerRef.current.style.display = "none";
          },
        });
    }
  }, []);

  useEffect(() => {
    stopScrolling();
    return () => {
      enableScrolling();
    };
  }, []);
  return (
    <div
      className="bg-background w-full h-full fixed top-0 left-0 z-50 none overflow-hidden flex justify-center items-center"
      style={{
        "--mask-size": "0%",
        maskImage:
          "radial-gradient(circle, transparent var(--mask-size), black 0%)",
        WebkitMaskImage:
          "radial-gradient(circle, transparent var(--mask-size), black 0%)",
      }}
      ref={containerRef}
    >
      <div
        className="flex justify-center items-center w-10 h-10"
        ref={svgHolderRef}
      >
      <Image src={'/images/logo-01.png'} alt="logo image" width={30} height={30}/>
      </div>
    </div>
  );
}

export default Loader;


