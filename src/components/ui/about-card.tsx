import React, { ReactNode } from "react";

export default function AboutCard({ children }: { children: ReactNode }) {
  return (
    <article className="w-full h-full bg-black rounded-[15px] p-5">
      {children}
    </article>
  );
}
