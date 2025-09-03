"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <footer
      className={`relative px-10 py-20 mt-20 transition-colors duration-300 ${
        isDark ? "bg-blue-600 text-white" : "bg-black text-gray-200"
      }`}
    >
      {/* Toggle iOS Style */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`absolute top-20 right-15 w-26 h-13 flex items-center rounded-full transition-colors duration-300 ${
          isDark ? "bg-neutral-900" : "bg-gray-500"
        }`}
        aria-label="Toggle Theme"
      >
        <span
          className={`w-10 h-10 bg-white rounded-full flex items-center justify-center ml-2 shadow-md transform transition-transform duration-300 ${
            isDark ? "translate-x-1" : "translate-x-11"
          }`}
        >
          {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
        </span>
      </button>

      {/* Konten utama */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Tagline */}
        <div className="text-5xl ml-20 font-bold leading-snug md:col-span-1">
          We help brands look <br />
          good, feel relevant, and <br />
          be recognizable.
        </div>

        {/* Business + Head Office sejajar */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-semibold mb-3 text-lg">Business</h4>
            <p>invibusiness@invisual.studio</p>
            <p>+62 822 9555 5314</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">Head Office</h4>
            <p>Jl. Malangbong Raya Blok C10,</p>
            <p>Antapani Wetan, Antapani,</p>
            <p>Bandung City, West Java 40291</p>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col md:flex-row ml-20 justify-between items-center mt-16 text-lg gap-6">
        <p>© Invisual Studio 2025 - All Rights Reserved</p>
        <div className="flex gap-20 mr-20">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Behance</a>
        </div>
      </div>
    </footer>
  );
}
