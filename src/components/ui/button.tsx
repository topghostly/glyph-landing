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
      className={`flex rounded-full text-background text-[12px] font-satoshi-b ${classname}`}
    >
      {children}
    </Link>
  );
}
