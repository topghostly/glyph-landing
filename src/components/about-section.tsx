import React from "react";
import AboutCard from "./ui/about-card";

export default function AboutSection() {
  return (
    <section className="w-full bg-foreground">
      <div className="lg:w-[960px] xl:w-[1280px] container py-[40px] md:py-[60px] lg:py-[100px]">
        <div className="flex  flex-col gap-3">
          <h2 className="h2 text-background font-satoshi-b">
            Effortless writing, elevated
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            Glyph is the all-in-one platform for drafting, collaborating, and
            publishing—online or offline—so your best stories always make the
            deadline.
          </p>
        </div>
        <div className="mt-4 flex flex-col md:grid grid-rows-2 gap-6">
          <div className="w-full h-fit md:h-[26.25rem] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[26.25rem_1fr]">
            <AboutCard>
              <div className="w-full h-full relative flex justify-center items-end">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 1 }}
                >
                  {/* <source src="/videos/backup.mp4" type="video/mp4" /> */}
                  <source src="/videos/new/backup.webm" type="video/webm" />
                </video>
                <div className="relative bg-gradient-to-t from-background to-transparent h-[50%] w-full z-3 flex items-end p-4">
                  <p className="text-[15px] md:text-[16px] p-0 m-0">
                    <span className="text-white font-satoshi-b">
                      Instant Draft Backup.{" "}
                    </span>
                    Drafts auto-save locally and upload whenever you&apos;re
                    ready.
                  </p>
                </div>
              </div>
            </AboutCard>
            <AboutCard>
              <div className="w-full h-full relative flex justify-center items-end">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-[70%] mx-auto h-full"
                  style={{ opacity: 1 }}
                >
                  {/* <source src="/videos/Interface.mp4" type="video/mp4" /> */}
                  <source src="/videos/new/Interface.webm" type="video/webm" />
                </video>
                <div className="relative bg-gradient-to-t from-background to-transparent h-[50%] w-full z-3 flex items-end p-4">
                  <p className="text-[15px] md:text-[16px] p-0 m-0 max-w-[100%] xl:max-w-[70%]">
                    <span className="text-white font-satoshi-b">
                      Clean Writing Interface.{" "}
                    </span>
                    Glyph offers a minimal, distraction-free editor so you can
                    focus on writing — no clutter, just your content.
                  </p>
                </div>
              </div>
            </AboutCard>
          </div>
          <div className="w-full h-fit md:h-[26.25rem] gap-6 grid grid-cols-1">
            <AboutCard>
              {" "}
              <div className="w-full h-full relative flex justify-center items-end">
                <div className="w-fit absolute top-[50%] left-[50%] translate-[-50%] z-2">
                  <img
                    src={"/images/markdown.png "}
                    alt="markdown image"
                    className="w-[350px]"
                  />
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  preload="metadata"
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 1 }}
                >
                  {/* <source src="/videos/markdown.mp4" type="video/mp4" /> */}
                  <source src="/videos/new/markdown.webm" type="video/webm" />
                </video>
                <div className="relative bg-gradient-to-t from-background to-transparent h-[50%] w-full z-3 flex items-end p-4">
                  <p className="text-[15px] md:text-[16px] p-0 m-0 max-w-[100%] xl:max-w-[70%]">
                    <span className="text-white font-satoshi-b">
                      Markdown-Based Storage.{" "}
                    </span>
                    Posts are stored in Markdown format, making content clean,
                    structured, and easily exportable or renderable.
                  </p>
                </div>
              </div>
            </AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
}
