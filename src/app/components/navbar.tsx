"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme } = useTheme();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledUp(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  if (!mounted) return null;

  const logoSrc =
    theme === "dark" ? "/images/logo/logo2.png" : "/images/logo/logo1.png";

  const activeTextColor = theme === "dark" ? "text-pink-500" : "text-blue-500";
  const activeBgColor = theme === "dark" ? "bg-pink-500" : "bg-blue-500";

  const menuItems = [
    { label: "WORKS", href: "/works" },
    { label: "ABOUT", href: "/about" },
    { label: "CONTACT", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full bg-background text-foreground flex justify-between items-center px-6 md:px-16 py-4 md:py-6 z-50 shadow-md transition-transform duration-500 ${
        isScrolledUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center ml-4 ">
        <Image
          src={logoSrc}
          alt="Invisual Logo"
          width={140}
          height={60}
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-36 mr-16 text-lg font-light tracking-wide">
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
              />
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-screen bg-background text-foreground flex flex-col p-6 md:hidden z-40"
        >
          {/* Header: Logo + Close Button */}
          <div className="flex justify-between items-center">
            <Image
              src={logoSrc}
              alt="Invisual Logo"
              width={160}
              height={70}
              priority
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light"
            >
              ✕
            </button>
          </div>
        
          {/* Menu Items */}
          <div className="flex flex-col gap-16 mt-12 text-4xl font-light tracking-wide">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </div>
        
          {/* Bottom Section */}
          <div className="mt-auto flex flex-col items-center gap-8 mb-8">
            {/* Social Links */}
            <div className="flex justify-center gap-10 text-base">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>
        
            {/* Contact */}
            <div className="text-sm text-center leading-relaxed">
              <p className="font-semibold">Business:</p>
              <p>info@invisual.com</p>
              <p>+62 812 3456 7890</p>
            </div>
          </div>
        </motion.div>
        

        )}
      </AnimatePresence>
    </nav>
  );
}
