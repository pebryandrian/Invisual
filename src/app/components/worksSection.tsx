"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const works = [
  {
    id: 1,
    title: "Imasa",
    category: "Fashion",
    description:
      "Imasa is designed to balance modernity and spirituality. Its visual identity carries a minimalist style with an elegant feel, presenting prayer garments that are not merely clothing but expressions of faith and style.",
    image: "/images/cover/imasa.jpg",
  },
  {
    id: 2,
    title: "YNO",
    category: "Beauty",
    description:
      "YNO is a deodorant with a visual identity designed to reflect boldness and freshness. Featuring a bold, expressive style with striking colors, the brand presents a strong, vibrant personality.",
    image: "/images/cover/yno.webp",
  },
  {
    id: 3,
    title: "Kona Padel",
    category: "Sports",
    description:
      "Kona Padel emphasizes energy, motion, and strength through its visual identity. With playful elements and bold typography, it connects with the dynamic nature of the sport.",
    image: "/images/cover/kona.jpg",
  },
  {
    id: 4,
    title: "FreshBite",
    category: "Food",
    description:
      "FreshBite is a food brand that embraces freshness and variety. Its packaging design highlights colorful ingredients, evoking appetite and authenticity.",
    image: "/images/cover/asian.jpg",
  },
  {
    id: 5,
    title: "Casa",
    category: "Beauty",
    description:
      "Casa is a beauty brand that highlights natural elegance with modern style. Its packaging brings a premium feel with clean and soft aesthetics.",
    image: "/images/cover/casa.webp",
  },
  {
    id: 6,
    title: "SOAR COLLECTIVE",
    category: "Entertainment",
    description:
      "SOAR COLLECTIVE is an entertainment brand that celebrates creativity, collaboration, and bold expression through music, art, and performance.",
    image: "/images/cover/soar.jpg",
  },
];

export default function WorksSection() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="works" className="w-full px-6 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {works.map((work) => {
          const isExpanded = expanded[work.id];
          return (
            <div
              key={work.id}
              className="group rounded-lg overflow-hidden transition-all duration-500"
            >
              {/* Gambar */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Judul */}
              <h3 className="mt-4 text-2xl font-bold text-foreground transition-colors duration-300 group-hover:[color:var(--hover-color)]">
                {work.title}
              </h3>

              {/* Kategori */}
              <p className="text-foreground/80 transition-colors duration-300 group-hover:[color:var(--hover-color)]">
                {work.category}
              </p>

              {/* Deskripsi + Truncate */}
              <p
                className={`mt-2 text-base leading-relaxed text-foreground/70 transition-colors duration-300 group-hover:[color:var(--hover-color)] ${
                  isExpanded ? "" : "line-clamp-2"
                }`}
              >
                {work.description}
              </p>

              {/* Tombol Read more */}
              <button
                onClick={() => toggleExpand(work.id)}
                className="mt-1 text-sm font-medium transition-colors [color:var(--hover-color)] hover:underline"
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            </div>
          );
        })}
      </div>

      {/* More Works Link */}
      <div className="flex justify-center mt-16">
        <Link
          href="/works"
          className="text-4xl font-bold underline underline-offset-8 hover:text-[var(--hover-color)] transition-colors"
        >
          MORE WORKS
        </Link>
      </div>
    </section>
  );
}
