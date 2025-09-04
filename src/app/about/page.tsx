"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  { name: "Tryan Permana", role: "CEO", image: "/images/team/p1.webp" },
  { name: "Dea Zulvi Alvindani", role: "COO", image: "/images/team/p2.webp" },
  { name: "Rizza Maulana", role: "CFO", image: "/images/team/p3.webp" },
  { name: "Virgawan Listanto", role: "General Manager", image: "/images/team/p4.webp" },
  { name: "Sofwan Hidayat", role: "Strategic Director", image: "/images/team/p5.webp" },
  { name: "Jo", role: "Art Director", image: "/images/team/p6.webp" },
  { name: "Metha", role: "Project Manager", image: "/images/team/p7.webp" },
  { name: "Aldo Sugih Prayogo", role: "Human Resource", image: "/images/team/p8.webp" },
];

export default function AboutSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedTeam = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <div className="bg-background text-foreground">
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
        <p className="text-xl md:text-2xl font-semibold">Foto Studio</p>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-gray-300 dark:bg-gray-700 flex items-center justify-center aspect-[4/3] rounded-xl">
          <p className="text-lg font-medium">Studio Activity or GIF</p>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-lg leading-relaxed">
            We are a multidisciplinary team made up of creatives, strategists,
            and makers who bring different perspectives to the table.
            From design and development to writing, strategy, and storytelling,
            our backgrounds are diverse, but our passion is shared.
          </p>
          <p className="text-lg leading-relaxed">
            For us, work is more than tasks, it&apos;s about creating impact,
            solving problems, and enjoying the process together as a close-knit team.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          <AnimatePresence>
            {displayedTeam.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 overflow-hidden rounded-xl shadow-md bg-gray-300 dark:bg-gray-700">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">{person.name}</p>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tombol Load More */}
        {!showAll && (
          <div className="flex justify-center mt-10">
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
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-3">BRANDING</h3>
            <ul className="space-y-1 text-muted-foreground">
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
          <div>
            <h3 className="font-semibold text-lg mb-3">GRAPHIC DESIGN</h3>
            <ul className="space-y-1 text-muted-foreground">
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
          <div>
            <h3 className="font-semibold text-lg mb-3">ILLUSTRATION</h3>
            <ul className="space-y-1 text-muted-foreground">
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

      {/* Testimonial / Clients Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Clients Says</h2>
        <p className="text-lg text-muted-foreground">Coming Soon...</p>
      </section>
    </div>
  );
}
