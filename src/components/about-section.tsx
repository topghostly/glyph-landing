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
            <AboutCard>
              <div className="w-full h-full relative flex justify-center items-end">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 1 }}
                >
                  <source src="/videos/backup.mp4" type="video/mp4" />
                  <source src="#" type="video/webm" />
                </video>
                <div className="relative bg-gradient-to-t from-background to-transparent h-[50%] w-full z-3 flex items-end p-4">
                  <p className="text-[16px] p-0 m-0">
                    <span className="text-white font-satoshi-b">
                      Instant Draft Backup.{" "}
                    </span>
                    Drafts auto-save locally and upload whenever you&apos;re
                    ready.
                  </p>
                </div>
              </div>
            </AboutCard>
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
