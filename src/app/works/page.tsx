"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { worksData } from "../data/worksData";
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

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlidesData.length - 1 : prev - 1));
    setProgressKey((prev) => prev + 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlidesData.length - 1 ? 0 : prev + 1));
    setProgressKey((prev) => prev + 1);
  };

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      {/* Hero Slider */}
      <section className="relative mt-2 aspect-video md:aspect-auto md:h-[96vh] overflow-hidden">
      <motion.div
  className="w-full h-full"
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.2} // biar agak lentur
  onDragEnd={(_, info) => {
    const swipeThreshold = 100; // seberapa jauh harus digeser
    const swipeVelocity = 500;  // kecepatan minimum biar dianggap swipe

    if (info.offset.x < -swipeThreshold || info.velocity.x < -swipeVelocity) {
      goToNextSlide();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > swipeVelocity) {
      goToPrevSlide();
    }
  }}
>
  {heroSlidesData.map((slide, index) => (
    <Link
      key={index}
      href={`/works/${slide.slug}`}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover"
      />

      {/* Caption */}
      <AnimatePresence mode="wait">
        {index === currentSlide && (
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-10 left-6 md:bottom-24 md:left-14 text-white text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  ))}
</motion.div>


        {/* NAV BUTTONS */}
        <div className="absolute right-4 md:right-6 top-1/2 flex flex-col gap-3 -translate-y-1/2 z-20">
          <button
            onClick={goToNextSlide}
            className="p-3 rounded-full bg-black/30 hover:bg-black/50 dark:bg-white/20 dark:hover:bg-white/40 text-white backdrop-blur-md transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={goToPrevSlide}
            className="p-3 rounded-full bg-black/30 hover:bg-black/50 dark:bg-white/20 dark:hover:bg-white/40 text-white backdrop-blur-md transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* SLIDE INDICATOR */}
        <div className="absolute bottom-10 right-6 md:right-14 text-white text-sm z-20">
          <div className="flex flex-col items-end">
            <span className="font-medium tracking-wider">
              {String(currentSlide + 1).padStart(2, "0")} / {String(heroSlidesData.length).padStart(2, "0")}
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
      </section>

      {/* Deskripsi Section */}
      <div className="w-full px-6 md:px-10 pt-10 pb-30 mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <h2 className="text-4xl md:text-6xl font-medium md:ml-12 leading-tight">
          Functional design <br /> with lasting impact
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed max-w-4xl mx-auto md:mx-0">
          From branding and illustration to visual development, we help bring
          strategy and aesthetics together. Through a storytelling-based approach,
          research, and distinctive visual styles, we create designs that are
          functional, aesthetically appealing, and consistent across multiple
          platforms. With a long-term commitment and a collaborative approach.
        </p>
      </div>

      {/* Works Grid */}
      <div className="w-full px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
        {worksData.map((work) => (
          <Link key={work.slug} href={`/works/${work.slug}`} className="group cursor-pointer">
            {/* Thumbnail */}
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

            {/* Judul */}
            <h3 className="mt-4 text-3xl font-medium text-foreground transition-colors duration-300 group-hover:[color:var(--hover-color)]">
              {work.title}
            </h3>

            {/* Kategori */}
            <p className="text-lg font-light mt-3 transition-colors duration-300 group-hover:[color:var(--hover-color)]">
              {work.category}
            </p>

            {/* Deskripsi */}
            <p className="mt-3 mb-10 text-2md leading-relaxed text-foreground/70 transition-colors duration-300 group-hover:[color:var(--hover-color)] line-clamp-2">
              {work.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
