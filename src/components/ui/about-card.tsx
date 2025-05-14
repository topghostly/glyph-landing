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
    <article className="w-full h-full bg-background rounded-[15px] overflow-hidden">
      {children}
    </article>
  );
}
