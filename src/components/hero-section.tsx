import React from "react";
import Button from "./ui/button";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Scroll from "./scrool";

export default function HeroSection() {
  return (
    <section className="relative overflow-x-hidden bg-[#05070B]">
      <div className="top-[160px] w-full absolute max-w-[1280px] translate-x-[-50%] left-[50%] pb-[80px] z-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-satoshi-b max-w-[616px]">
            All You Need to Tell Your Story
          </h1>
          <p className="max-w-[480px]">
            Glyph is a offline-first CMS for seamless storytelling. Draft ideas
            on the go, then sync to the web when you&apos;re ready.
          </p>
          <div className="flex mt-5">
            <Button
              href="#"
              classname="flex gap-[1px] justify-center items-center"
            >
              GET STARTED <ArrowDownRight size={16} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
        {/* <div className="absolute -left-[344px] bottom-0 z-0 aspect-[1.335187] w-[1920px] max-w-none mix-blend-lighten lg:bottom-[23px] lg:left-[-253px] lg:w-[1620px] md:bottom-[-2.1%] md:left-[-27%] md:w-[147%] sm:bottom-[5.4%] sm:left-[-34.95%] sm:w-[189%] xs:bottom-[1.9%] xs:left-[-36.2%] xs:w-[190%] xs:min-w-[704px] 2xs:bottom-[18px] 2xs:left-[-132px] before:absolute before:top-0 before:z-10 before:hidden before:h-20 before:w-full before:bg-gradient-to-b before:from-grey-1 before:to-grey-1/0 sm:before:block bg-amber-700"></div> */}
      </div>

      {/* <----------VIDEO BACKGROUND----------> */}
      <div className="relative h-full w-[1920px] left-[50%] aspect-[1.335187] translate-x-[-50%] top-0">
        <div className="absolute w-full h-[420px] bg-gradient-to-t from-[#05070B] via-[#05070B] to-transparent bottom-[10px] z-3" />
        <div className="w-[1017px] aspect-[1.538461538461538] absolute bottom-[45px] left-[355px] z-2">
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
          className="absolute inset-0 w-full h-full"
          width="1920"
          height="1438"
          style={{ opacity: 1 }}
        >
          <source src="/videos/0512(4).mp4" type="video/mp4" />
          <source src="#" type="video/webm" />
        </video>
      </div>
      {/* <----------BOTTOM CAROUSEL----------> */}
      <div className="flex items-start flex-col justify-end absolute bottom-0 max-w-[1280px] translate-x-[-50%] left-[50%] pb-[80px] z-10 w-full">
        <p className="text-[14px]">
          Everything you need for seamless blogging:
        </p>
        <Scroll />
      </div>
    </section>
  );
}
