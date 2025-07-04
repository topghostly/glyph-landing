import React from "react";
import Button from "./ui/button";
import { Github } from "lucide-react";

export default function FooterSection() {
  return (
    <section className="bg-white text-background">
      <div className="container pb-[20px] py-[20px] md:pt-[40px] lg:pt-[100px] ">
        <div className="flex gap-3 flex-col justify-center items-center relative select-none">
          {/* <----------TEXT AREA----------> */}
          <div className=" flex flex-col gap-2 lg:gap-3 relative w-[350px] xl:w-[450px]">
            <h2 className="h2 text-center md:text-left font-satoshi-m">
              Join the Writing Renaissance
            </h2>
            <p className="text-center md:text-left text-background">
              Step into a new era of focused creation with Glyph. <br /> This
              isn&apos;t just a tool it&apos;s a space for thinkers, and
              storytellers
            </p>
            <div className="flex justify-start lg:flex-row gap-3 mt-2">
              <Button
                href="https://editor.getglyph.app/auth"
                classname="w-[130px] h-[35px] sm:w-[180px] bg-background sm:h-[45px] flex justify-center text-white font-satoshi-b items-center"
              >
                START NOW
              </Button>
              <Button
                href="https://github.com/topghostly/glyph-cms"
                classname="w-[170px] h-[35px] sm:w-[180px] text-background sm:h-[45px] flex justify-center font-satoshi-b items-center gap-1 bg-none border border-gray-800"
              >
                <Github size={16} /> STAR US ON GITHUB
              </Button>
            </div>
          </div>
          {/* <----------TEXT AREA----------> */}
        </div>
      </div>
      <footer>
        <div className="container gap-0 min-h-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-[12px] md:text-[14px] m-0 p-0 text-muted-foreground">
            Copyright ©&apos;2025&apos;Glyph inc. All rights reserved.
          </p>
          {/* <Image
              src={"/images/glyph-black.svg"}
              alt="glyph logo"
              width={35}
              height={30}
              className="opacity-70"
            /> */}
          <p className="text-[12px] md:text-[14px] m-0 p-0 text-muted-foreground">
            Ideas deserve clarity. Glyph makes it real.
          </p>
        </div>
      </footer>
    </section>
  );
}
