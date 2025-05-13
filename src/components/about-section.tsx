import React from "react";
import AboutCard from "./ui/about-card";

export default function AboutSection() {
  return (
    <section className="w-full bg-foreground">
      <div className="container pb-[80px] pt-[100px]">
        <div className="flex  flex-col gap-3">
          <h2 className="text-background">Effortless writing, elevated</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Glyph is the all-in-one platform for drafting, collaborating, and
            publishing—online or offline—so your best stories always make the
            deadline.
          </p>
        </div>
        <div className="mt-4 grid grid-rows-2 gap-6">
          <div className="w-full h-[26.25rem] gap-6 grid grid-cols-[26.25rem_1fr]">
            <AboutCard>The test</AboutCard>
            <AboutCard>The test</AboutCard>
          </div>
          <div className="w-full h-[26.25rem] gap-6 grid grid-cols-1">
            <AboutCard>The test</AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
}
