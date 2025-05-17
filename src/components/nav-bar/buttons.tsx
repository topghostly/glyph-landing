import Link from "next/link";
import React, { ReactNode } from "react";

export default function NavButton({
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
      target="_blank"
      className={`${classname} border-[1px] border-primary-foreground px-4 py-1 text-[12px] rounded-full cursor-pointer`}
    >
      {children}
    </Link>
  );
}
