"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { worksData } from "../../data/worksData";
import { motion, AnimatePresence } from "framer-motion";

const heroSlidesData = [
  { title: "Imasa", category: "Fashion", image: "/images/slider/HERO.jpg", slug: "imasa" },
  { title: "YNO", category: "Beauty", image: "/images/slider/HERO YNO.webp", slug: "yno" },
  { title: "Grizzle", category: "Food & Beverages", image: "/images/slider/HERO GRIZZLE.jpg", slug: "grizzle" },
  { title: "SOAR COLLECTIVE", category: "Entertainment", image: "/images/slider/HERO SOAR.png", slug: "soar" },
  { title: "Krom", category: "Real Estate", image: "/images/slider/HERO KROM.jpg", slug: "krom" },
];

const SLIDE_DURATION = 6000;

export default function WorksPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  // --- Handlers ---
  const goToSlide = useCallback((direction: "next" | "prev") => {
    setCurrentSlide((prev) =>
      direction === "next"
        ? (prev + 1) % heroSlidesData.length
        : (prev - 1 + heroSlidesData.length) % heroSlidesData.length
    );
    setProgressKey((prev) => prev + 1);
  }, []);

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => goToSlide("next"), SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [goToSlide]);

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      {/* HERO SLIDER */}
      <section className="relative mt-2 aspect-video md:aspect-auto md:h-[96vh] overflow-hidden">
        <motion.div
          className="w-full h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            const swipeThreshold = 100;
            const swipeVelocity = 500;
            if (info.offset.x < -swipeThreshold || info.velocity.x < -swipeVelocity) goToSlide("next");
            if (info.offset.x > swipeThreshold || info.velocity.x > swipeVelocity) goToSlide("prev");
          }}
        >
          {heroSlidesData.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <Link
                key={slide.slug}
                href={`/works/${slide.slug}`}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                {/* Caption */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={slide.title}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute bottom-10 left-6 md:bottom-24 md:left-14 text-white text-left"
                    >
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200/90 leading-relaxed drop-shadow"
                      >
                        {slide.category}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </motion.div>

        {/* NAV BUTTONS */}
        <div className="absolute right-4 md:right-6 top-1/2 flex flex-col gap-3 -translate-y-1/2 z-20">
          <NavButton icon={<ChevronRight size={24} />} onClick={() => goToSlide("next")} />
          <NavButton icon={<ChevronLeft size={24} />} onClick={() => goToSlide("prev")} />
        </div>

        {/* SLIDE INDICATOR */}
        <SlideIndicator current={currentSlide} total={heroSlidesData.length} progressKey={progressKey} />
      </section>

      {/* DESCRIPTION */}
      <section className="w-full px-6 md:px-10 pt-10 pb-30 mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <h2 className="text-4xl md:text-6xl font-medium md:ml-12 leading-tight">
          Functional design <br /> with lasting impact
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-4xl mx-auto md:mx-0">
          From branding and illustration to visual development, we help bring strategy and aesthetics together...
        </p>
      </section>

      {/* WORKS GRID */}
      <section className="w-full px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
        {worksData.map((work) => (
          <Link key={work.slug} href={`/works/${work.slug}`} className="group cursor-pointer">
            <div className="relative w-full aspect-video overflow-hidden rounded-sm">
              {work.image.endsWith(".mp4") ? (
                <video
                  src={work.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
            <h3 className="mt-4 text-3xl font-medium text-foreground transition-colors duration-300 group-hover:[color:var(--hover-color)]">
              {work.title}
            </h3>
            <p className="text-lg font-light mt-3 transition-colors duration-300 group-hover:[color:var(--hover-color)]">
              {work.category}
            </p>
            <p className="mt-3 mb-10 text-2md leading-relaxed text-foreground/70 transition-colors duration-300 group-hover:[color:var(--hover-color)] line-clamp-2">
              {work.description}
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}

// --- Subcomponents ---
const NavButton = ({ icon, onClick }: { icon: React.ReactNode; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="p-3 rounded-full bg-black/30 hover:bg-black/50 dark:bg-white/20 dark:hover:bg-white/40 text-white backdrop-blur-md transition-all duration-300"
  >
    {icon}
  </button>
);

const SlideIndicator = ({ current, total, progressKey }: { current: number; total: number; progressKey: number }) => (
  <div className="absolute bottom-10 right-6 md:right-14 text-white text-sm z-20">
    <div className="flex flex-col items-end">
      <span className="font-medium tracking-wider">
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <div className="relative mt-2 w-28 h-[3px] bg-white/30 overflow-hidden rounded-full">
        <div
          key={progressKey}
          className="absolute left-0 top-0 h-full bg-white animate-progress"
          style={{ animationDuration: `${SLIDE_DURATION}ms` }}
        />
      </div>
    </div>
  </div>
);
