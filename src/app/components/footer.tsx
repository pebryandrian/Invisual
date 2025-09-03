"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <footer
      className={`relative px-6 md:px-20 py-20 mt-20 transition-colors duration-300 ${
        isDark ? "bg-blue-600 text-white" : "bg-black text-gray-200"
      }`}
    >
      {/* Toggle iOS Style */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`w-24 h-12  flex items-center rounded-full transition-colors duration-300 ${
            isDark ? "bg-neutral-900" : "bg-gray-500"
          }`}
          aria-label="Toggle Theme"
        >
          <span
            className={`w-10 h-10 md:ml-2 bg-white rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 ${
              isDark ? "translate-x-1" : "translate-x-8"
            }`}
          >
            {isDark ? (
              <Sun size={16} className="text-yellow-500" />
            ) : (
              <Moon size={16} className="text-gray-700" />
            )}
          </span>
        </button>
      </div>

      {/* Konten utama */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Tagline */}
        <div className="text-3xl md:text-5xl font-normal leading-snug md:col-span-1">
          We help brands look <br />
          good, feel relevant, and <br />
          be recognizable.
        </div>

        {/* Business + Head Office sejajar */}
        <div className="md:col-span-2 md:ml-80 grid grid-cols-1 md:grid-cols-1 gap-12">
          <div>
            <h4 className="font-semibold mb-3 text-3xl">Business</h4>
            <p className="font-light mb-3 text-2xl md:mt-8">invibusiness@invisual.studio</p>
            <p className="font-light mb-3 text-2xl">+62 822 9555 5314</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-3xl">Head Office</h4>
            <p className="font-light mb-3 text-2xl md:mt-8">Jl. Malangbong Raya Blok C10,</p>
            <p className="font-light mb-3 text-2xl">Antapani Wetan, Antapani,</p>
            <p className="font-light mb-3 text-2xl">Bandung City, West Java 40291</p>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-lg gap-6">
        <div className="flex items-center gap-12">
          {/* Tambahkan logo di sini */}
          <Image
            src="/images/logo/logo3.png"
            alt="Invisual Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <p className="font-light mb-3 text-2xl">© Invisual Studio 2025 - All Rights Reserved</p>
        </div>

        <div className="flex gap-10">
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
          <a href="#" className="hover:underline">
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
