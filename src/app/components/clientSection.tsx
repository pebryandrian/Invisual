"use client";

import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "Casa",
    service: "Branding & Illustration",
    industry: "Beauty",
    logo: "/images/clients/casa.jpg",
  },
  {
    id: 2,
    name: "KONA PADEL CLUB",
    service: "Illustrations",
    industry: "Sport",
    logo: "/images/clients/KONA.webp",
  },
  {
    id: 3,
    name: "KROWN",
    service: "Visual development",
    industry: "Personal care",
    logo: "/images/clients/KROWN.jpg",
  },
  {
    id: 4,
    name: "GoDaddy",
    service: "Illustrations",
    industry: "ICT Business",
    logo: "/images/clients/GO DADDY.jpg",
  },
  {
    id: 5,
    name: "OMOGO",
    service: "Rebranding",
    industry: "Lifestyle",
    logo: "/images/clients/OMOGO.jpg",
  },
  {
    id: 6,
    name: "Imasa",
    service: "Branding",
    industry: "Fashion",
    logo: "/images/clients/imasa.jpg",
  },
  {
    id: 7,
    name: "Controversial",
    service: "Brand identity & product design",
    industry: "Beauty",
    logo: "/images/clients/CONTROVERSIAL.jpg",
  },
  {
    id: 8,
    name: "PT Mitra Jaya Kurnia",
    service: "Illustration",
    industry: "Retail",
    logo: "/images/clients/JMK.jpg",
  },
  {
    id: 9,
    name: "Keyzle",
    service: "Brand identity & product design",
    industry: "Retail",
    logo: "/images/clients/Keyzle.jpg",
  },
  {
    id: 10,
    name: "Xyncema",
    service: "Branding",
    industry: "ICT Business",
    logo: "/images/clients/Xyncema.jpg",
  },

  // ➕ Tambahan baru
  {
    id: 11,
    name: "ME JI SAN",
    service: "Packaging design",
    industry: "F&B",
    logo: "/images/clients/ME JI SAN.jpg",
  },
  {
    id: 12,
    name: "Sein Turtle",
    service: "Illustration",
    industry: "FinTech",
    logo: "/images/clients/SEIN TURTLE.jpg",
  },
  {
    id: 13,
    name: "YNO",
    service: "Branding",
    industry: "Beauty",
    logo: "/images/clients/YNO.jpg",
  },
  {
    id: 14,
    name: "Toffin",
    service: "Illustration",
    industry: "F&B",
    logo: "/images/clients/TOFFIN.jpg",
  },
  {
    id: 15,
    name: "Tasty Bites",
    service: "Social media design",
    industry: "F&B",
    logo: "/images/clients/TASTY BITES.jpg",
  },
  {
    id: 16,
    name: "SOAR COLLECTIVE",
    service: "Event Branding",
    industry: "Entertainment",
    logo: "/images/clients/SOAR.jpg",
  },
  {
    id: 17,
    name: "WagWise",
    service: "Branding & Illustration",
    industry: "Retail & Service",
    logo: "/images/clients/WAGWISE.jpg",
  },
  {
    id: 18,
    name: "Raga+",
    service: "Branding",
    industry: "Healthcare",
    logo: "/images/clients/RAGA+.jpg",
  },
  {
    id: 19,
    name: "Asian mood",
    service: "Branding & Illustration",
    industry: "F&B",
    logo: "/images/clients/ASIAN MOOD.jpg",
  },
  {
    id: 20,
    name: "KROM",
    service: "Branding",
    industry: "Real estate",
    logo: "/images/clients/KROM.jpg",
  },
];

export default function ClientSection() {
  return (
    <section id="clients" className="w-full px-6 md:px-20 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 underline mb-20 underline-offset-8">
        Selected Client
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex items-center justify-between gap-4 py-6 border-b-2 border-white/80"
          >
            {/* Logo + Nama */}
            <div className="flex items-center ml-12 gap-4">
              
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={64}
                  height={64}
                  className=" object-contain md:w-[96px] md:h-[96px]"
                />
              
              <div className="ml-4">
                <h3 className="text-2xl font-bold mb-3">{client.name}</h3>
                <p className="text-base text-foreground/70">{client.service}</p>
              </div>
            </div>

            {/* Industry */}
            <p className="text-base mr-10">{client.industry}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
