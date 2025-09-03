// src/data/worksData.ts

// Interface untuk 1 work
export interface Work {
    slug: string;
    title: string;
    category: string;
    image: string;        // gambar utama (thumbnail/cover)
    description: string;
    year?: number;        // opsional
    scope?: string[];     // branding, packaging, dll
    industry?: string;    // kategori industri
    team?: string[];      // nama-nama team
    gallery?: string[];   // kumpulan gambar detail
  }
  
  // Data works
  export const worksData: Work[] = [
    {
      slug: "imasa",
      title: "Imasa",
      category: "Fashion",
      industry: "Fashion",
      image: "/images/works/imasa/imasa.webp",
      description:
        "Imasa is designed to balance modernity and spirituality. Its visual identity carries a minimalist style with an elegant feel, presenting prayer garments that are not merely clothing for worship, but a representation of harmony between aesthetics and Islamic meaning.",
      year: 2025,
      scope: ["Branding"],
      team: [
        "Rizaldi Nosh (Art Director)",
        "Khansa Sekar Sada (Graphic Designer)",
        "Aulia Rahmah (Graphic Designer)",
      ],
      gallery: [
        "/images/works/imasa/hero.webp",
        "/images/works/imasa/beauty.webp",
        "/images/works/imasa/tag.webp",
        "/images/works/imasa/store.webp",
      ],
    },
    {
      slug: "yno",
      title: "YNO",
      category: "Beauty",
      industry: "Beauty",
      image: "/images/works/yno/yno.webp",
      description:
        "YNO is a deodorant with a visual identity designed to reflect boldness and freshness. Featuring a bold, expressive style with strong contrasts that highlight confidence and energy.",
      year: 2024,
      scope: ["Packaging", "Branding"],
      team: ["Team A", "Team B"],
      gallery: [
        "/images/works/yno/detail1.webp",
        "/images/works/yno/detail2.webp",
      ],
    },
    {
      slug: "casa",
      title: "Casa Solare",
      category: "Beauty",
      industry: "Beauty",
      image: "/images/works/casa/casa.webp",
      description:
        "Casa Solare is an artisanal fragrance brand inspired by the vibrant charm of sun-drenched European coastal villages. Its design embodies elegance, sophistication, and timeless style.",
      year: 2024,
      scope: ["Branding", "Packaging"],
      team: ["Team Casa"],
      gallery: [
        "/images/works/casa/detail1.webp",
        "/images/works/casa/detail2.webp",
      ],
    },
    {
      slug: "asian",
      title: "Asian Mood",
      category: "Food & Beverage",
      industry: "Food & Beverages",
      image: "/images/works/asian/asian.webp",
      description:
        "Asian Mood brings together authentic flavors with a vibrant design identity, celebrating the richness of Asian cuisine through bold and colorful visuals.",
      year: 2023,
      scope: ["Branding", "Packaging"],
      team: ["Team Asian Mood"],
      gallery: [
        "/images/works/asian/detail1.webp",
        "/images/works/asian/detail2.webp",
      ],
    },
    {
      slug: "soar",
      title: "SOAR Collective",
      category: "Event",
      industry: "Event",
      image: "/images/works/soar/soar.webp",
      description:
        "SOAR Collective is a creative event platform focused on collaboration and bold visual storytelling, uniting diverse talents into impactful experiences.",
      year: 2023,
      scope: ["Branding", "Visual Identity"],
      team: ["SOAR Team"],
      gallery: [
        "/images/works/soar/detail1.webp",
        "/images/works/soar/detail2.webp",
      ],
    },
    {
      slug: "kona",
      title: "Kona Padel Club",
      category: "Sport",
      industry: "Sport",
      image: "/images/works/kona/kona.webp",
      description:
        "Kona Padel Club represents energy and community spirit through its sporty and dynamic brand visuals.",
      year: 2023,
      scope: ["Branding"],
      team: ["Kona Team"],
      gallery: [
        "/images/works/kona/detail1.webp",
        "/images/works/kona/detail2.webp",
      ],
    },
    {
      slug: "grizzle",
      title: "Grizzle",
      category: "Food & Beverages",
      industry: "Food & Beverages",
      image: "/images/works/grizzle/grizzle.webp",
      description:
        "From day one, we knew Grizzle had to be more than just tasty food. It had to be memorable, fun, and recognizable.",
      year: 2023,
      scope: ["Branding", "Packaging"],
      team: ["Grizzle Team"],
      gallery: [
        "/images/works/grizzle/detail1.webp",
        "/images/works/grizzle/detail2.webp",
      ],
    },
    {
      slug: "beau",
      title: "Beau Vossa",
      category: "Fashion",
      industry: "Fashion",
      image: "/images/works/beau/beau.webp",
      description:
        "At Beau Vossa, fashion is not just about clothing, but also a powerful expression of identity.",
      year: 2024,
      scope: ["Branding"],
      team: ["Beau Team"],
      gallery: [
        "/images/works/beau/detail1.webp",
        "/images/works/beau/detail2.webp",
      ],
    },
    {
      slug: "forge",
      title: "ForgePoint",
      category: "Construction",
      industry: "Construction",
      image: "/images/works/forge/forge.webp",
      description:
        "ForgePoint is a forward-thinking construction company delivering innovative and sustainable building solutions.",
      year: 2023,
      scope: ["Branding"],
      team: ["Forge Team"],
      gallery: [
        "/images/works/forge/detail1.webp",
        "/images/works/forge/detail2.webp",
      ],
    },
    {
      slug: "krom",
      title: "KROM Estate",
      category: "Real Estate",
      industry: "Real Estate",
      image: "/images/works/krom/krom.jpg",
      description:
        "KROM Estate is a company engaged in property and consulting with professionalism and clarity.",
      year: 2024,
      scope: ["Branding", "Consulting"],
      team: ["KROM Team"],
      gallery: [
        "/images/works/krom/detail1.jpg",
        "/images/works/krom/detail2.jpg",
      ],
    },
    {
      slug: "marrie",
      title: "Marrie Tea",
      category: "Food & Beverages",
      industry: "Food & Beverages",
      image: "/images/works/marrie/marrie.webp",
      description:
        "Marrie Tea is a handmade tea brand inspired by cozy rural life and warm storytelling.",
      year: 2023,
      scope: ["Branding", "Packaging"],
      team: ["Marrie Team"],
      gallery: [
        "/images/works/marrie/detail1.webp",
        "/images/works/marrie/detail2.webp",
      ],
    },
    {
      slug: "keyzle",
      title: "Keyzle",
      category: "Food & Beverages",
      industry: "Food & Beverages",
      image: "/images/works/keyzle/keyzle.webp",
      description:
        "Keyzle represents boldness and creativity in modern food branding, blending playfulness with strong visual identity.",
      year: 2024,
      scope: ["Branding"],
      team: ["Keyzle Team"],
      gallery: [
        "/images/works/keyzle/detail1.webp",
        "/images/works/keyzle/detail2.webp",
      ],
    },
    {
      slug: "krown",
      title: "Krown",
      category: "Personal Care Service",
      industry: "Personal Care",
      image: "/images/works/krown/krown.webp",
      description:
        "Krown Barbershop combines vintage charm with contemporary elegance, inspired by the golden age of gentlemanly style.",
      year: 2024,
      scope: ["Branding", "Interior"],
      team: ["Krown Team"],
      gallery: [
        "/images/works/krown/detail1.webp",
        "/images/works/krown/detail2.webp",
      ],
    },
    {
      slug: "sunddae",
      title: "Sunddae",
      category: "Food & Beverages",
      industry: "Food & Beverages",
      image: "/images/works/sunddae/sunddae.webp",
      description:
        "Attractive coffee cup packaging design, rich in cultural value, inspired by Japanese aesthetics and taste.",
      year: 2023,
      scope: ["Branding", "Packaging"],
      team: ["Sunddae Team"],
      gallery: [
        "/images/works/sunddae/detail1.webp",
        "/images/works/sunddae/detail2.webp",
      ],
    },
  ];
  