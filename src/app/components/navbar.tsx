"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme } = useTheme();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // handle hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrolledUp(false);
      } else {
        setIsScrolledUp(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  const logoSrc =
    theme === "dark" ? "/images/logo/logo2.png" : "/images/logo/logo1.png";

  // warna highlight sesuai mode
  const activeTextColor = theme === "dark" ? "text-pink-500" : "text-blue-500";
  const activeBgColor = theme === "dark" ? "bg-pink-500" : "bg-blue-500";

  const menuItems = [
    { label: "WORKS", href: "/works" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full bg-background text-foreground flex justify-between items-center px-6 md:px-16 py-4 md:py-6 z-50 shadow-md transition-transform duration-500 ease-in-out ${
        isScrolledUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center ml-4 md:ml-24">
        <Image
          src={logoSrc}
          alt="Invisual Logo"
          width={180}
          height={80}
          priority
        />
      </Link>

      {/* Menu Desktop */}
      <div className="hidden md:flex gap-24 mr-40 text-xl font-light tracking-wide">
        {menuItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link key={item.label} href={item.href} className="relative group">
              <span
                className={`transition-colors ${
                  isActive
                    ? `${activeTextColor} font-semibold`
                    : "hover:text-gray-400"
                }`}
              >
                {item.label}
              </span>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                  isActive
                    ? `w-full ${activeBgColor}`
                    : `w-0 group-hover:w-full ${activeBgColor}`
                }`}
              ></span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden mr-4"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-background shadow-md flex flex-col items-center py-6 gap-6 md:hidden transition-all duration-500 ease-in-out">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  isActive ? `${activeTextColor} font-semibold` : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
