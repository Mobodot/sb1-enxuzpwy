"use client";

import Link from "next/link";
import { navItems } from "./nav-items";

export function MobileNav({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-3 py-2 text-base hover:bg-gray-900"
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="#contact"
          className="block px-3 py-2 text-base bg-white text-black mt-2"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
}