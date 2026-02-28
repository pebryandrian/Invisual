"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  return (
    <motion.section
      className="w-full bg-background text-foreground px-6 md:px-20 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* MAP */}
      <div className="w-full h-[250px] md:h-[650px] rounded-xl overflow-hidden mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.1012778123602!2d107.6654099177009!3d-6.9132804738160045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e77a09feaf97%3A0xa984de54257256e5!2sInvisual%20Studio!5e0!3m2!1sid!2sid!4v1757074708346!5m2!1sid!2sid"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>

      {/* HEAD OFFICE */}
      <div className="flex flex-col md:flex-row md:items-start md:mt-20 md:ml-30 md:gap-30">
        <h3 className="font-bold md:text-4xl md:w-80 shrink-0">Head Office</h3>
        <div>
          <p className="leading-relaxed md:text-4xl md:ml-16 mb-8 md:w-120">
            Jl. Malangbong Raya Blok C10, Antapani Wetan, Antapani, Bandung City,
            West Java 40291
          </p>
          <Link
            href="tel:+6212345678900"
            className="block mt-2 md:text-2xl font-medium md:ml-16 md:mb-40 text-[var(--hover-color)] hover:underline"
          >
            +62 123 4567 8900
          </Link>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mb-12">
        <p className="leading-relaxed md:text-5xl md:ml-30">
          Invisual Studio is located in Bandung, Indonesia, which is known as a
          creative city. You can&apos;t go wrong if you work with us.
        </p>
      </div>

      {/* INQUIRIES + BUSINESS + JOBS */}
      <div className="mb-16 md:ml-30 md:mt-40">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          {/* INQUIRIES */}
          <div className="md:w-auto">
            <h3 className="font-bold text-xl md:text-4xl">Inquiries</h3>
          </div>

          {/* BUSINESS + JOBS */}
          <div className="grid md:grid-cols-2 gap-10 md:ml-20 flex-1">
            {/* BUSINESS */}
            <div>
              <h4 className="font-semibold text-lg md:text-2xl mb-2">Business</h4>
              <p className="leading-relaxed mb-8 text-base md:text-2xl">
                For inquiries regarding new business, please send us a summary of your
                project and we will contact you shortly. We will assist you in
                collaborating and translating your project. Please send your project
                summary immediately to this email address.
              </p>
              <Link
                href="mailto:invibusiness@gmail.com"
                className="block mt-2 md:text-2xl text-[var(--hover-color)] hover:underline"
              >
                business@invisual.studio
              </Link>
            </div>

            {/* JOBS */}
            <div>
              <h4 className="font-semibold text-lg md:text-2xl mb-2">Jobs</h4>
              <p className="leading-relaxed text-base md:text-2xl">
                At Invisual Studio, we&apos;re more than just coworkers, we&apos;re a
                team. From strategists and developers to artists, musicians, and chefs,
                our team thrives on creativity and collaboration.
              </p>
              <p className="leading-relaxed mt-10 text-base md:text-2xl">
                We&apos;re looking for passionate people who are ready to take on
                fulltime challenges. Send your portfolio to the email below, using this
                subject line format:
              </p>
              <span className="italic block mt-2 mb-8">
                “Job Position, Your Name.”
              </span>
              <Link
                href="mailto:career@invisual.studio"
                className="text-[var(--hover-color)] md:text-2xl hover:underline"
              >
                career@invisual.studio
              </Link>
            </div>
          </div>
        </div>
      </div>

{/* REACH US */}
<div className="md:ml-30 md:mt-40 md:pb-10">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
    {/* Title */}
    <h3 className="font-bold text-xl md:text-4xl shrink-0">Reach us</h3>

    {/* Links */}
    <div className="flex flex-wrap gap-8 md:mr-30 md:gap-30">
      <Link
        href="https://instagram.com/invisual_studio"
        target="_blank"
        className="text-lg md:text-2xl text-[var(--hover-color)] hover:underline"
      >
        Instagram
      </Link>
      <Link
        href="https://www.linkedin.com/company/invisualid/?originalSubdomain=id"
        target="_blank"
        className="text-lg md:text-2xl text-[var(--hover-color)] hover:underline"
      >
        LinkedIn
      </Link>
      <Link
        href="mailto:invibusiness@gmail.com"
        className="text-lg md:text-2xl text-[var(--hover-color)] hover:underline"
      >
        Email
      </Link>
      <Link
        href="https://www.behance.net/invisualid"
        target="_blank"
        className="text-lg md:text-2xl text-[var(--hover-color)] hover:underline"
      >
        Behance
      </Link>
    </div>
  </div>
</div>

    </motion.section>
  );
}
