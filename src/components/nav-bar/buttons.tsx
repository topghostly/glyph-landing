import React, { ReactNode } from "react";

export default function NavButton({
  children,
  // onClick,
  classname,
}: {
  children: ReactNode;
  // onClick?: () => void;
  classname?: string;
}) {
  return (
    <button
      className={`${classname} border-[1px] border-primary-foreground px-4 py-1 text-[12px] rounded-full cursor-pointer`}
    >
      {children}
    </button>
  );
}
