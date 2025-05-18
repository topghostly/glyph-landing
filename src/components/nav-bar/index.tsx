import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavButton from "./buttons";
import { Github } from "lucide-react";
import { HamburgerMenu } from "./hamburger";

function NavBar() {
  const INTERNAL_LINKS: { name: string; href: string }[] = [
    {
      name: "Blogs",
      href: "#",
    },
    {
      name: "Editor",
      href: "https://editor.getglyph.app/auth",
    },
  ];
  return (
    <header className=" absolute top-0 left-0 w-full text-[14px] z-60">
      <div className="container flex justify-between items-center h-[64px]">
        <div className="w-fit flex gap-20">
          <Link href={"/"}>
            <div className="relative w-fit">
              <Image
                src={"/images/glyph-05-05.svg"}
                alt="glyph logo"
                width={90}
                height={60}
              />
            </div>
          </Link>

          {/* <----------FIRST LINK----------> */}
          <ul className="gap-2 justify-center items-center hidden md:flex">
            {INTERNAL_LINKS.map((link, index) => (
              <li
                key={index}
                className="px-2 py-1 w-fit h-fit rounded flex justify-center items-center hover:bg-white/10 transition-all"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          {/* <----------FIRST LINK----------> */}
        </div>

        <div className="gap-2 hidden md:flex">
          <NavButton
            classname="border-none flex gap-1 text-[14px] justify-center items-center"
            href="https://github.com/topghostly/glyph-cms"
          >
            <span>
              <Github size={15} />
            </span>
            Star Us
          </NavButton>
          <NavButton href="https://editor.getglyph.app/auth">Sign In</NavButton>
          <NavButton href="https://editor.getglyph.app/auth">
            Get started
          </NavButton>
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default NavBar;
