"use client";

import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const teamMembers = [
  { name: "Tryan Permana", role: "CEO", image: "/images/team/p1.webp" },
  { name: "Dea Zulvi Alvindani", role: "COO", image: "/images/team/p2.webp" },
  { name: "Rizza Maulana", role: "CFO", image: "/images/team/p3.webp" },
  { name: "Virgawan Listanto", role: "General Manager", image: "/images/team/p4.webp" },
  { name: "Sofwan Hidayat", role: "Strategic Director", image: "/images/team/p5.webp" },
  { name: "Jo", role: "Art Director", image: "/images/team/p6.webp" },
  { name: "Metha", role: "Project Manager", image: "/images/team/p7.webp" },
];

const TESTIMONIALS = [
  {
    name: "John Doe",
    title: "CEO, Tech Solutions",
    text: "Invisual's work exceeded our expectations. Their creativity and professionalism are top-notch.",
    image: "/images/clients/OMOGO.jpg",
  },
  {
    name: "Jane Smith",
    title: "CMO, KROM",
    text: "The team was professional and exceeded expectations with their creativity.",
    image: "/images/clients/KROM.jpg",
  },
  {
    name: "Michael Lee",
    title: "Founder, ME JI SAN",
    text: "We loved working with them, they brought our vision to life beautifully.",
    image: "/images/clients/ME JI SAN.jpg",
  },
  {
    name: "Sarah Johnson",
    title: "Director, TOFFIN",
    text: "Highly recommend! Great team and amazing results.",
    image: "/images/clients/TOFFIN.jpg",
  },
];

export default function AboutSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedTeam = showAll ? teamMembers : teamMembers.slice(0, 4);

  // State & logic untuk testimonial slider
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  // Autoplay effect
useEffect(() => {
  if (isPaused) return;
  const interval = setInterval(() => {
    console.log("Autoplay jalan"); // cek di console
    setIndex((prev) => (prev + 1) % total);
  }, 5000);
  return () => clearInterval(interval);
}, [isPaused, total]);


  // Pause jika tab tidak aktif
  useEffect(() => {
    const handleVisibility = () => {
      setIsPaused(document.visibilityState === "hidden");
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div className="bg-background text-foreground">
{/* Banner */}
<section className="relative w-full bg-black flex items-center justify-center">
  <div className="relative w-full 
    h-[70vh] 
    sm:h-[80vh] 
    lg:h-screen
    max-w-[1920px]"
  >
    <Image
      src="/images/team/group.png"
      alt="Invisual Team"
      fill
      priority
      sizes="100vw"
      className="object-contain"
    />
  </div>
</section>

      {/* About Content */}
<section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Logo / Iris */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-90 md:w-120 aspect-square">
            <Image
              src="/images/team/LogoInvi.png"
              alt="Invisual Identity"
              fill
              className="object-contain opacity-90"
            />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-6 text-gray-300 text-2xl leading-relaxed">
          <p>
            We are a multidisciplinary team made up of creatives, strategists,
            and makers who bring different perspectives to the table. From
            design and development to writing, strategy, and storytelling,
            our backgrounds are diverse, but our passion is shared.
          </p>
          <p>
            For us, work is more than tasks, it&apos;s about creating impact,
            solving problems, and enjoying the process together as a
            close-knit team.
          </p>
        </div>
      </section>

      
{/* Team Section */}
<section className="max-w-full mx-auto px-6 py-16">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    <AnimatePresence>
      {displayedTeam.map((person, idx) => (
        <motion.div
          key={person.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="flex flex-col w-full"
        >
          {/* Biarkan gambar mengikuti rasio aslinya */}
          <div
            className="relative w-full overflow-hidden"
          >
            <Image
              src={person.image}
              alt={person.name}
              width={500} // bisa diubah sesuai resolusi aslinya
              height={500}
            />
          </div>

          {/* Nama & Role */}
          <div className="bg-black text-white px-3 py-2 text-center">
            <p className="font-semibold text-base leading-tight">{person.name}</p>
            <p className="text-sm opacity-80">{person.role}</p>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>

  {/* Tombol Load More */}
  {displayedTeam.length < teamMembers.length && (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => setShowAll(true)}
        className="p-2 rounded-full hover:bg-muted transition"
        aria-label="Lihat lebih banyak anggota tim"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
      </button>
    </div>
  )}
</section>


      {/* Services Section */}
      <section className="max-w-full mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-left md:ml-12 mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-12 md:gap-50 items-center">
          <div className="md:ml-20 text-xl ">
            <h3 className="font-semibold md:text-3xl mb-3">BRANDING</h3>
            <ul className="space-y-1 text-xl text-muted-foreground">
              <li>Brand Research</li>
              <li>Brand Plan</li>
              <li>Brand Strategy</li>
              <li>Brand Identity</li>
              <li>Brand Guideline</li>
              <li>Visual Development</li>
              <li>Logo Design</li>
              <li>Brand Kit</li>
              <li>Stationery Design</li>
              <li>Custom Font / Typography</li>
            </ul>
          </div>
          <div className="md:ml-20 text-xl">
            <h3 className="font-semibold md:text-3xl mb-3">GRAPHIC DESIGN</h3>
            <ul className="space-y-1 text-xl text-muted-foreground">
              <li>Key Visual Development</li>
              <li>Environmental Design</li>
              <li>Company Profile</li>
              <li>Packaging Design</li>
              <li>Editorial Design</li>
              <li>Merchandise</li>
              <li>Social Media Design</li>
              <li>Promotional Design</li>
              <li>Presentation Design</li>
              <li>Web Development</li>
            </ul>
          </div>
          <div className="md:ml-20 text-xl  md:mb-28">
            <h3 className="font-semibold mb-3 md:text-3xl">ILLUSTRATION</h3>
            <ul className="space-y-1 text-xl text-muted-foreground">
              <li>Character/Mascot Design</li>
              <li>Artwork Design</li>
              <li>Comic Strip</li>
              <li>Children&apos;s Book</li>
              <li>Product Illustration</li>
              <li>Scene Environment</li>
              <li>Editorial Illustration</li>
            </ul>
          </div>
        </div>
      </section>
{/* Testimonials Section */}
<section
  className="mx-auto max-w-6xl px-4 py-16 md:py-24"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
    What Our Clients Say
  </h3>

  <div className="relative flex items-center justify-center overflow-hidden">
    <button
      onClick={prev}
      className="absolute left-0 z-10 p-2 rounded-full bg-white/70 dark:bg-black/50 shadow-md hover:scale-105 transition"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>

    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={index}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, { offset, velocity }) => {
          if (offset.x < -50 || velocity.x < -500) {
            next();
          } else if (offset.x > 50 || velocity.x > 500) {
            prev();
          }
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/20 text-center w-full max-w-xl cursor-grab active:cursor-grabbing"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-24 relative">
            <Image
              src={TESTIMONIALS[index].image}
              alt={TESTIMONIALS[index].name}
              fill
              className="rounded-full object-cover ring-4 ring-primary shadow-md"
            />
          </div>

          <p className="text-lg italic text-muted-foreground">
            “{TESTIMONIALS[index].text}”
          </p>

          <div>
            <h4 className="font-semibold text-lg">{TESTIMONIALS[index].name}</h4>
            <p className="text-sm text-muted-foreground">
              {TESTIMONIALS[index].title}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>

    <button
      onClick={next}
      className="absolute right-0 z-10 p-2 rounded-full bg-white/70 dark:bg-black/50 shadow-md hover:scale-105 transition"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  </div>

  <div className="flex justify-center mt-6 gap-2">
    {TESTIMONIALS.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`w-3 h-3 rounded-full transition ${
          i === index ? "bg-primary" : "bg-muted-foreground/40"
        }`}
      />
    ))}
  </div>
</section>

    </div>
  );
}
