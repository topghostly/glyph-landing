import React from "react";
import Button from "./ui/button";
import Image from "next/image";
import { Github } from "lucide-react";

export default function FooterSection() {
  return (
    <section>
      <div className="container pb-[20px] py-[20px] md:pt-[40px] lg:pt-[100px]">
        <div className="flex gap-3 flex-col justify-center items-center md:justify-start md:flex-row relative select-none">
          <div className="w-[400px] md:w-[600px] lg:w-[700px] aspect-[2.096774193548387] relative translate-x-[-0px]">
            <Image
              src={"/images/footer.png"}
              alt="footer image"
              fill
              className="select-none pointer-none:"
            />
          </div>
          {/* <----------TEXT AREA----------> */}
          <div className=" flex flex-col gap-2 lg:gap-3 relative md:absolute top-50% right-0 w-[350px] xl:w-[450px] xl:right-[5%]">
            <h2 className="text-center md:text-left font-satoshi-m">
              Join the Writing Renaissance
            </h2>
            <p className="text-center md:text-left">
              Step into a new era of focused creation with Glyph. <br /> This
              isn&apos;t just a tool it&apos;s a space for thinkers, and
              storytellers
            </p>
            <div className="flex justify-center lg:flex-row gap-3 mt-2">
              <Button
                href="#"
                classname="w-[130px] h-[35px] sm:w-[180px] sm:h-[45px] flex justify-center font-satoshi-b items-center bg-white/90"
              >
                START NOW
              </Button>
              <Button
                href="#"
                classname="w-[170px] h-[35px] sm:w-[180px] sm:h-[45px] text-white flex justify-center font-satoshi-b items-center gap-1 bg-none border border-gray-800"
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
          <p className="text-[12px] md:text-[14px] m-0 p-0 text-muted-foreground">
            Ideas deserve clarity. Glyph makes it real.
          </p>
        </div>
      </footer>
    </section>
  );
}
