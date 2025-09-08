"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { worksData } from "@/app/data/worksData";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  params: Promise<{ slug: string }>;
}

interface CustomSlide {
  src: string;
}

export default function WorkDetailPage({ params }: Props) {
  const [slug, setSlug] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // ✅ unwrap slug di dalam useEffect
  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  if (!slug) return <div className="p-10">Loading...</div>;

  const workIndex = worksData.findIndex((w) => w.slug === slug);
  if (workIndex === -1) return notFound();

  const work = worksData[workIndex];

  const {
    title,
    image,
    year,
    description,
    industry,
    scope = [],
    team = [],
    gallery = [],
  } = work;

  // ✅ prev & next project (loop)
  const prevWork =
    worksData[(workIndex - 1 + worksData.length) % worksData.length];
  const nextWork = worksData[(workIndex + 1) % worksData.length];

  // ✅ convert gallery ke slides bertipe CustomSlide
  const slides: CustomSlide[] = gallery.map((src) => ({ src }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <div className="relative w-full overflow-hidden">
        {image.endsWith(".mp4") ? (
          <video
            src={image}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover"
          />
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
      <section className="w-full px-6 md:px-20 py-16">
        {/* Title + Year */}
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-4xl md:text-5xl font-normal">{title}</h1>
          {year && <p className="text-2xl md:text-3xl font-semibold">{year}</p>}
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-2 items-start mb-16">
          {/* Scope & Industry */}
          <div className="space-y-8 text-sm md:text-base">
            {scope.length > 0 && (
              <div>
                <p className="text-foreground/50 mb-1">Scope of work</p>
                <p className="font-medium md:mb-18">{scope.join(", ")}</p>
              </div>
            )}
            {industry && (
              <div>
                <p className="text-foreground/50 mb-1">Industry</p>
                <p className="font-medium">{industry}</p>
              </div>
            )}
          </div>

          {/* Team */}
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

          {/* Description */}
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
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={`${title} ${i + 1}`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover "
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Prev / Next Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-20 gap-10">
          {/* Prev Work */}
          {prevWork && (
            <Link
              href={`/works/${prevWork.slug}`}
              className="flex items-center gap-4 group"
            >
              <span className="text-3xl transition-transform group-hover:-translate-x-1">
                ←
              </span>
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

          {/* Next Work */}
          {nextWork && (
            <Link
              href={`/works/${nextWork.slug}`}
              className="flex items-center gap-4 group"
            >
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
              <span className="text-3xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          )}
        </div>
      </section>

      {/* Lightbox Clean (image + video, klik backdrop close + animasi fade) */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        toolbar={{ buttons: [] }}
        animation={{ fade: 300, swipe: 0 }} // 🔥 animasi fade in/out
        render={{
          slide: ({ slide }) => {
            const s = slide as CustomSlide;
            return (
              <div
                className="w-full h-full flex items-center justify-center"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setOpen(false);
                }}
              >
                {s.src.endsWith(".mp4") ? (
                  <video
                    src={s.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    className="max-w-[90%] max-h-[90%] object-contain"
                  />
                ) : (
                  <img
                    src={s.src}
                    alt=""
                    className="max-w-[90%] max-h-[90%] object-contain"
                  />
                )}
              </div>
            );
          },
        }}
      />
    </div>
  );
}
