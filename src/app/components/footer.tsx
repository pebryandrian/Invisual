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
      className={`relative px-6 md:px-20 py-10 transition-colors duration-300 ${
        isDark ? "bg-blue-600 text-white" : "bg-black text-gray-200"
      }`}
    >
      {/* Toggle Theme */}
      <div className="absolute top-4 right-6">
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`w-16 h-8 flex items-center rounded-full transition-colors duration-300 ${
            isDark ? "bg-neutral-900" : "bg-gray-300"
          }`}
          aria-label="Toggle Theme"
        >
          <span
            className={`w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 ${
              isDark ? "translate-x-1" : "translate-x-8"
            }`}
          >
            {isDark ? (
              <Sun size={14} className="text-yellow-400" />
            ) : (
              <Moon size={14} className="text-gray-700" />
            )}
          </span>
        </button>
      </div>

      {/* Konten utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Tagline */}
        <div className="text-2xl md:text-3xl font-medium leading-snug">
          We help brands look <br />
          good, feel relevant, and <br />
          be recognizable.
        </div>

        {/* Kontak */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg">Business</h4>
            <p className="text-base mt-2">
              <a
                href="mailto:invibusiness@invisual.studio"
                className="hover:underline"
              >
                invibusiness@invisual.studio
              </a>
            </p>
            <p className="text-base">
              <a href="tel:+6282295555314" className="hover:underline">
                +62 822 9555 5314
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Head Office</h4>
            <p className="text-base mt-2">
              Jl. Malangbong Raya Blok C10, <br />
              Antapani Wetan, Antapani, <br />
              Bandung City, West Java 40291
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-white/20 gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo/logo3.png"
            alt="Invisual Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="text-sm">
            © Invisual Studio 2025 - All Rights Reserved
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a
            href="https://instagram.com/invisual_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <a 
          href="https://www.linkedin.com/company/invisualid/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          >
            LinkedIn
          </a>
          <a 
           href="https://behance.net/invisualid"
           target="_blank"
           rel="noopener noreferrer"
           className="hover:underline"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
