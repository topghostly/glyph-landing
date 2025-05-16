import React, { ReactNode } from "react";

export default function AboutCard({
  children,
}: // title,
// text,
{
  children: ReactNode;
  // title: string;
  // text: string;
}) {
  return (
    <article className="max-w-[500px] h-[300px] sm:max-w-full mx-auto w-full md:h-full bg-background rounded-[15px] overflow-hidden">
      {children}
    </article>
  );
}
