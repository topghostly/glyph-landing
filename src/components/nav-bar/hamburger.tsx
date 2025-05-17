"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

export const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Animate menu in/out
  useEffect(() => {
    if (!menuRef.current) return;
    if (open) {
      gsap.to(menuRef.current, {
        x: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        autoAlpha: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [open]);

  // Close when clicking outside of menu or button
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        open &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const items = [
    { href: "/blogs", label: "Blogs" },
    { href: "/editor", label: "Editor" },
    {
      href: "/star-us",
      icon: <Github size={13} strokeWidth={4} />,
      label: "Star Us",
    },
    { href: "/signin", label: "Sign In" },
    { href: "/get-started", label: "Get Started" },
  ];

  return (
    <div className="relative block md:hidden">
      {/* Hamburger button */}
      <button
        ref={buttonRef}
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
        className="p-2 cursor-pointer"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sliding menu panel */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-background/95 backdrop-blur-md opacity-0 -translate-x-full z-50 flex flex-col pt-16 px-6"
      >
        <nav className="flex flex-col">
          {items.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 flex py-4 items-center text-[14px] gap-1 font-medium hover:text-accent transition"
            >
              {icon && <span className="opacity-80">{icon}</span>}
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
