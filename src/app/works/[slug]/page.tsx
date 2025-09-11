"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { worksData, type Work } from "@/data/worksData";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  params: Promise<{ slug: string }>; // ✅ sesuai Next.js 15
}

interface CustomSlide {
  src: string;
}

export default function WorkDetailPage({ params }: Props) {
  // ✅ Perbaikan Next.js 15: unwrap params
  const { slug } = React.use(params);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const workIndex = worksData.findIndex((w: Work) => w.slug === slug);
  if (workIndex === -1) return notFound();

  const work = worksData[workIndex];
  const { title, image, year, description, industry, scope = [], team = [], gallery = [] } = work;

  const prevWork = worksData[(workIndex - 1 + worksData.length) % worksData.length];
  const nextWork = worksData[(workIndex + 1) % worksData.length];

  const slides: CustomSlide[] = gallery.map((src) => ({ src }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <div className="relative w-full overflow-hidden">
        {image.endsWith(".mp4") ? (
          <video src={image} autoPlay muted loop playsInline className="w-full h-auto object-cover" />
        ) : (
          <Image
            src={image}
            alt={title}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
          />
        )}
      </div>

      {/* Content */}
      <section className="w-full px-6 md:px-20 py-8">
        {/* Title + Year */}
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-4xl md:text-5xl font-normal">{title}</h1>
          {year && <p className="text-2xl md:text-3xl font-semibold">{year}</p>}
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-2 items-start mb-16">
          <div className="space-y-8 text-sm md:text-base">
            {scope.length > 0 && (
              <div>
                <p className="text-foreground/50 mb-1">Scope of work</p>
                <p className="font-medium">{scope.join(", ")}</p>
              </div>
            )}
            {industry && (
              <div>
                <p className="text-foreground/50 mb-1">Industry</p>
                <p className="font-medium">{industry}</p>
              </div>
            )}
          </div>

          {team.length > 0 && (
            <div className="text-sm md:text-base">
              <p className="text-foreground/50 mb-2">Team</p>
              <ul className="space-y-1">
                {team.map((member, i) => (
                  <li key={i} className="font-medium">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="text-lg md:text-xl leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="grid grid-cols-1 gap-4">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="relative w-full cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                {src.endsWith(".mp4") ? (
                  <video src={src} autoPlay muted loop playsInline className="w-full h-auto rounded-lg" />
                ) : (
                  <Image
                    src={src}
                    alt={`${title} ${i + 1}`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Prev / Next */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-20 gap-10">
          {prevWork && (
            <Link href={`/works/${prevWork.slug}`} className="flex items-center gap-4 group">
              <span className="text-3xl transition-transform group-hover:-translate-x-1">←</span>
              <div className="flex items-center gap-3">
                {prevWork.logo && (
                  <Image
                    src={prevWork.logo}
                    alt={prevWork.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                )}
                <div>
                  <p className="text-sm text-foreground/60">Previous</p>
                  <h3 className="text-lg font-semibold">{prevWork.title}</h3>
                </div>
              </div>
            </Link>
          )}

          {nextWork && (
            <Link href={`/works/${nextWork.slug}`} className="flex items-center gap-4 group">
              <div className="flex items-center gap-3">
                {nextWork.logo && (
                  <Image
                    src={nextWork.logo}
                    alt={nextWork.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                )}
                <div className="text-right">
                  <p className="text-sm text-foreground/60">Next</p>
                  <h3 className="text-lg font-semibold">{nextWork.title}</h3>
                </div>
              </div>
              <span className="text-3xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        animation={{ fade: 300, swipe: 0 }}
        controller={{ closeOnBackdropClick: true }} // ✅ klik di luar bisa close
        toolbar={{ buttons: [] }}
      />
    </div>
  );
}
