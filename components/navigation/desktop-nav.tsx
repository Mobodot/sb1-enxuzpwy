import Link from "next/link";
import { navItems } from "./nav-items";

export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm hover:text-gray-300 transition-colors relative group"
        >
          {item.name}
          {item.hasDropdown && (
            <span className="ml-1 inline-block">▼</span>
          )}
        </Link>
      ))}
      <Link
        href="#contact"
        className="text-sm bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
      >
        CONTACT
      </Link>
    </nav>
  );
}