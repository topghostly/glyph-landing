import React, { ReactNode } from "react";
import Link from "next/link";

export default function Button({
  children,
  href,
  classname,
}: {
  children: ReactNode;
  href: string;
  classname?: string;
}) {
  return (
    <Link
      href={href}
      className={`${classname} bg-white/90 px-12 py-3 flex rounded-full text-background text-[12px] font-satoshi-b`}
    >
      {children}
    </Link>
  );
}
