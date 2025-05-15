import React from "react";
import Button from "./ui/button";
import { Github } from "lucide-react";

export default function FooterSection() {
  return (
    <section>
      <div className="container pb-[80px] pt-[100px]">
        <div className="flex flex-col gap-3">
          <h3 className="max-w-[500px] text-6xl font-satoshi-m">
            Join the Writing Renaissance
          </h3>

          <p>
            Step into a new era of focused creation with Glyph. <br /> This
            isn&apos;t just a tool it&apos;s a space for thinkers, and
            storytellers
          </p>

          <div className="flex gap-3 mt-2">
            <Button
              href="#"
              classname="flex justify-center font-satoshi-b items-center"
            >
              START NOW
            </Button>
            <Button
              href="#"
              classname="flex justify-center font-satoshi-b items-center gap-1 "
            >
              <Github size={16} /> STAR US ON GITHUB
            </Button>
          </div>
        </div>
      </div>
      <footer>
        <div className="container h-[60px] flex justify-between items-center">
          <p className="text-[14px] text-muted-foreground">
            Copyright ©&apos;2025&apos;Glyph inc. All rights reserved.
          </p>
          <p className="text-[14px] text-muted">
            Ideas deserve clarity. Glyph makes it real.
          </p>
        </div>
      </footer>
    </section>
  );
}
