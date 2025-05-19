import React from "react";
import Button from "./ui/button";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Scroll from "./scrool";

export default function HeroSection() {
  return (
    <section className="relative overflow-x-hidden bg-[#05070B]">
      <div className="top-[100px] xl:top-[160px] w-full absolute max-w-[1280px] translate-x-[-50%] left-[50%] pb-[60px] z-10 px-[20px]">
        <div className="flex flex-col gap-2 md:gap-6 w-[80%] md:w-[100%]">
          <h1 className="h1 font-satoshi-b sm:w-full  md:max-w-[500px] xl:max-w-[616px] m-0">
            All You Need to Tell Your Story
          </h1>
          <p className="sm:w-full w-[80%] md:max-w-[400px] xl:max-w-[480px] m-0">
            {/* Offline-first CMS: create anywhere, then sync when you&apos;re
            ready. */}
            Glyph is a offline-first CMS for seamless storytelling. Draft ideas
            on the go, then sync to the web when you&apos;re ready.
          </p>
          <div className="flex mt-2">
            <Button
              href="https://editor.getglyph.app/auth"
              classname="w-[130px] h-[35px] sm:w-[180px] sm:h-[45px] flex gap-[1px] justify-center items-center bg-white/90"
            >
              GET STARTED <ArrowDownRight size={16} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </div>
      {/* <----------VIDEO BACKGROUND----------> */}
      <div
        className="video relative h-full sm:mt-0 w-[170%] md:w-[150%] translate-x-[-45%] lg:w-[1620px] lg: xl:w-[1920px] left-[50%] aspect-[1.335187] lg:translate-x-[-45%] top-0 min-w-[414px]"
        style={{
          marginTop: "clamp(0px, calc((640px - 100vw) * 0.59), 120px)",
          minWidth: "414px",
        }}
      >
        {/* <----------GRADIENT UNDERLAY----------> */}
        <div className="absolute w-full h-[200px] xl:h-[420px] bg-gradient-to-t from-[#05070B] via-[#05070B] to-transparent bottom-[10px] z-3" />
        <div className="absolute w-full h-[200px] xl:h-[420px] bg-gradient-to-b from-[#05070B] to-transparent top-0 z-3" />
        <div className="w-[53%] bottom-[2.4%] left-[18.5%] md:w-[53%] md:bottom-[3%] md:left-[18.5%] lg:w-[865px] lg:bottom-[34px] lg:left-[295px] xl:w-[1017px] aspect-[1.538461538461538] absolute xl:bottom-[45px] xl:left-[355px] z-2">
          <Image
            src={"/images/MacBook.png"}
            alt="editor dashboard image"
            className="rounded-sm"
            fill
          />
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full"
          width="1920"
          height="1438"
          style={{ opacity: 1 }}
        >
          {/* <source src="/videos/hero.mp4" type="video/mp4" /> */}
          <source src="/videos/hero.webm" type="video/webm" />
        </video>
      </div>
      {/* <----------BOTTOM CAROUSEL----------> */}
      <div className="flex items-start flex-col justify-end absolute bottom-0 max-w-[1280px] translate-x-[-50%] left-[50%] xl:pb-[60px] pt-[10px] z-10 w-full px-[20px] bg-[#05070B]">
        <p className="text-[14px] mb-2">
          Everything you need for seamless blogging:
        </p>
        <Scroll />
      </div>
    </section>
  );
}
