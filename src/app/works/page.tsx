"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { worksData } from "../data/worksData";

const heroSlidesData = [
  { title: "Grizzle", category: "Brand Identity", image: "/images/slider/HERO GRIZZLE.jpg" },
  { title: "Soar", category: "Creative Campaign", image: "/images/slider/HERO SOAR.png" },
  { title: "Krom", category: "Visual Design", image: "/images/slider/HERO KROM.jpg" },
  { title: "YNO", category: "Product Launch", image: "/images/slider/HERO YNO.webp" },
  { title: "Imasa", category: "Featured Work", image: "/images/slider/HERO.jpg" },
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
        {heroSlidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center md:items-end md:text-right p-8 md:pb-24 md:pr-14 text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{slide.title}</h1>
              <p className="mt-3 text-lg md:text-xl text-neutral-200/90 max-w-xl">{slide.category}</p>
            </div>
          </div>
        ))}

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
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
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
