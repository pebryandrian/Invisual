"use client";

import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <div id="home" className="w-full">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/hero/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay transparan tipis */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
      </section>

      {/* Text Section */}
      <section className="w-full px-6 md:px-20 py-20">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-4xl max-w-8xl leading-snug text-left font-medium"
        >
          Invisual Studio is a visual design studio specializing in visual
          identity, illustration, and packaging design to help brands stand out,
          develop a distinct character, and remain relevant in the eyes of their
          audience. With a longterm commitment and a collaborative approach.
        </motion.p>
      </section>
    </div>
  );
}
