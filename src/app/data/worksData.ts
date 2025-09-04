// src/data/worksData.ts

export interface Work {
  slug: string;
  title: string;
  category: string;
  image: string;        // gambar utama (thumbnail/cover)
  logo: string;         // logo brand (selalu ada)
  description: string;
  year?: number;        
  scope?: string[];     
  industry?: string;    
  team?: string[];      
  gallery?: string[];   
}

export const worksData: Work[] = [
  {
    slug: "imasa",
    title: "Imasa",
    category: "Fashion",
    industry: "Fashion",
    image: "/images/works/imasa/imasa.webp",
    logo: "/images/clients/IMASA.jpg",
    description:
      "Imasa is designed to balance modernity and spirituality. Its visual identity carries a minimalist style with an elegant feel, presenting prayer garments that are not merely clothing for worship, but a representation of harmony between aesthetics and Islamic meaning.",
    year: 2025,
    scope: ["Branding"],
    team: [
      "Rizaldi Nosh (Art Director)",
      "Kinanti Sendiko Sari (Graphic Designer)",
      "Aulia Rakhman (Graphic Designer)",
    ],
    gallery: [
      "/images/works/imasa/7.jpg",
      "/images/works/imasa/1.jpg",
      "/images/works/imasa/6.jpg",
      "/images/works/imasa/2.jpg",
      "/images/works/imasa/9.jpg",
      "/images/works/imasa/4.jpg",
    ],
  },
  {
    slug: "yno",
    title: "YNO",
    category: "Beauty",
    industry: "Beauty",
    image: "/images/works/yno/yno hero.webp",
    logo: "/images/clients/YNO.jpg",
    description:
      "YNO is a deodorant with a visual identity designed to reflect boldness and freshness. Featuring a bold, expressive style with striking colors, the brand presents a strong, energetic, and characterful impression. On the other hand, the logo and brandmark are maintained with a minimalist approach to preserve simplicity, clarity, and consistency. This combination creates a unique branding, bold yet elegant, expressive but still functional.",
    year: 2025,
    scope: ["Brand Identity"],
    team: [
      "Rizaldi Nosh (Art Director)",
      "Kinanti Sendiko Sari (Graphic Designer)",
    ],
    gallery: [
      "/images/works/yno/7.webp",
      "/images/works/yno/1.png",
      "/images/works/yno/2.png",
      "/images/works/yno/4.webp",
      "/images/works/yno/3.png",
      "/images/works/yno/5.png",
      "/images/works/yno/8.png",
    ],
  },
  {
    slug: "casa",
    title: "Casa ",
    category: "Beauty",
    industry: "Beauty",
    image: "/images/works/casa/Casa Hero.webp",
    logo: "/images/clients/CASA.jpg",
    description:
      "Casa Solare is an artisanal fragrance brand inspired by...",
    year: 2024,
    scope: ["Branding", "Packaging"],
    team: ["Team Casa"],
    gallery: [
      "/images/works/casa/1.webp",
      "/images/works/casa/5.png",
      "/images/works/casa/2.webp",
      "/images/works/casa/6.png",
      "/images/works/casa/7.png",
      "/images/works/casa/4.webp",
      "/images/works/casa/8.png",
    ],
  },
  {
    slug: "asian",
    title: "Asian Mood",
    category: "Food & Beverage",
    industry: "Food & Beverages",
    image: "/images/works/asian/asian hero.webp",
    logo: "/images/clients/ASIAN MOOD.jpg", // ✅ tambahkan logo
    description:
      "Asian Mood brings together authentic flavors...",
    year: 2023,
    scope: ["Branding", "Packaging"],
    team: ["Team Asian Mood"],
    gallery: [
      "/images/works/asian/3.jpg",
      "/images/works/asian/7.jpg",
      "/images/works/asian/5.jpg",
      "/images/works/asian/6.jpg",
      "/images/works/asian/1.jpg",
      "/images/works/asian/2.jpg",
      "/images/works/asian/4.jpg",
    ],
  },
  {
    slug: "soar",
    title: "SOAR Collective",
    category: "Event",
    industry: "Event",
    image: "/images/works/soar/soar hero.mp4",
    logo: "/images/clients/SOAR.JPG",
    description:
      "SOAR Collective is a creative event platform focused on collaboration...",
    year: 2023,
    scope: ["Branding", "Visual Identity"],
    team: ["SOAR Team"],
    gallery: [
      "/images/works/soar/6.png",
      "/images/works/soar/2.jpg",
      "/images/works/soar/5.png",
      "/images/works/soar/3.jpg",
      "/images/works/soar/7.png",
      "/images/works/soar/4.png",
      "/images/works/soar/8.png",
    ],
  },
  {
    slug: "kona",
    title: "Kona Padel Club",
    category: "Sport",
    industry: "Sport",
    image: "/images/works/kona/kona hero.jpg",
    logo: "/images/clients/KONA.webp", // ✅ tambahkan logo
    description:
      "Kona Padel Club represents energy and community spirit...",
    year: 2023,
    scope: ["Branding"],
    team: ["Kona Team"],
    gallery: [
      "/images/works/kona/1.jpg",
      "/images/works/kona/2.jpg",
      "/images/works/kona/3.jpg",
      "/images/works/kona/4.jpg",
      "/images/works/kona/5.jpg",
      "/images/works/kona/6.jpg",
      "/images/works/kona/7.jpg", 
    ],
  },
  {
    slug: "grizzle",
    title: "Grizzle",
    category: "Food & Beverages",
    industry: "Food & Beverages",
    image: "/images/works/grizzle/grizzle hero.jpg",
    logo: "/images/clients/GRIZZLE.png", // ✅ tambahkan logo
    description:
      "From day one, we knew Grizzle had to be more than just tasty food...",
    year: 2023,
    scope: ["Branding", "Packaging"],
    team: ["Grizzle Team"],
    gallery: [
      "/images/works/grizzle/1.jpg",
      "/images/works/grizzle/2.jpg",
      "/images/works/grizzle/3.jpg",
      "/images/works/grizzle/4.jpg",
      "/images/works/grizzle/5.jpg",
      "/images/works/grizzle/6.jpg",
      "/images/works/grizzle/7.jpg", 
    ],
  },
  {
    slug: "beau",
    title: "Beau Vossa",
    category: "Fashion",
    industry: "Fashion",
    image: "/images/works/beau/beau hero.png",
    logo: "/images/clients/BEAU.jpg", // ✅ tambahkan logo
    description:
      "At Beau Vossa, fashion is not just about clothing...",
    year: 2024,
    scope: ["Branding"],
    team: ["Beau Team"],
    gallery: [
      "/images/works/beau/1.png",
      "/images/works/beau/2.jpg",
      "/images/works/beau/3.png",
      "/images/works/beau/4.jpg",
      "/images/works/beau/5.jpg",
      "/images/works/beau/6.png",
      "/images/works/beau/8.png", 
    ],
  },
  {
    slug: "forge",
    title: "ForgePoint",
    category: "Construction",
    industry: "Construction",
    image: "/images/works/forge/forge hero.mp4",
    logo: "/images/clients/FORGE.jpg", // ✅ tambahkan logo
    description:
      "ForgePoint is a forward-thinking construction company...",
    year: 2023,
    scope: ["Branding"],
    team: ["Forge Team"],
    gallery: [
      "/images/works/forge/1.jpg",
      "/images/works/forge/2.jpg",
      "/images/works/forge/3.jpg",
      "/images/works/forge/4.mp4",
      "/images/works/forge/5.jpg",
      "/images/works/forge/6.jpg",
      "/images/works/forge/7.jpg", 
    ],
  },
  {
    slug: "krom",
    title: "KROM Estate",
    category: "Real Estate",
    industry: "Real Estate",
    image: "/images/works/krom/krom hero.jpg",
    logo: "/images/clients/KROM.jpg", // ✅ tambahkan logo
    description:
      "KROM Estate is a company engaged in property...",
    year: 2024,
    scope: ["Branding", "Consulting"],
    team: ["KROM Team"],
    gallery: [
      "/images/works/krom/1.jpg",
      "/images/works/krom/2.jpg",
      "/images/works/krom/3.jpg",
      "/images/works/krom/4.jpg",
      "/images/works/krom/5.jpg",
      "/images/works/krom/6.jpg",
      "/images/works/krom/7.jpg", 
    ],
  },
  {
    slug: "marrie",
    title: "Marrie Tea",
    category: "Food & Beverages",
    industry: "Food & Beverages",
    image: "/images/works/marrie/marrie hero.jpg",
    logo: "/images/clients/MARRIE.jpg", // ✅ tambahkan logo
    description:
      "Marrie Tea is a handmade tea brand inspired by cozy rural life...",
    year: 2023,
    scope: ["Branding", "Packaging"],
    team: ["Marrie Team"],
    gallery: [
      "/images/works/marrie/1.png",
      "/images/works/marrie/2.png",
      "/images/works/marrie/3.png",
      "/images/works/marrie/4.png",
      "/images/works/marrie/5.png",
      "/images/works/marrie/6.png",
      "/images/works/marrie/7.png", 
      "/images/works/marrie/7.png", 
    ],
  },
  {
    slug: "keyzle",
    title: "Keyzle",
    category: "Food & Beverages",
    industry: "Food & Beverages",
    image: "/images/works/keyzle/keyzle hero.jpg",
    logo: "/images/clients/KEYZLE.jpg", // ✅ tambahkan logo
    description:
      "Keyzle represents boldness and creativity...",
    year: 2024,
    scope: ["Branding"],
    team: ["Keyzle Team"],
    gallery: [
      "/images/works/keyzle/1.png",
      "/images/works/keyzle/2.png",
      "/images/works/keyzle/3.png",
      "/images/works/keyzle/4.png",
      "/images/works/keyzle/5.png",
      "/images/works/keyzle/6.png",
      "/images/works/keyzle/7.png", 
    ],
  },
  {
    slug: "krown",
    title: "Krown",
    category: "Personal Care Service",
    industry: "Personal Care",
    image: "/images/works/krown/krown hero.png",
    logo: "/images/clients/KROWN.jpg", // ✅ tambahkan logo
    description:
      "Krown Barbershop combines vintage charm with contemporary elegance...",
    year: 2024,
    scope: ["Branding", "Interior"],
    team: ["Krown Team"],
    gallery: [
      "/images/works/krown/1.png",
      "/images/works/krown/2.jpg",
      "/images/works/krown/3.png",
      "/images/works/krown/4.jpg",
      "/images/works/krown/5.jpg",
      "/images/works/krown/6.jpg",
      "/images/works/krown/7.jpg",
      "/images/works/krown/8.png", 
    ],
  },
  {
    slug: "sunddae",
    title: "Sunddae",
    category: "Food & Beverages",
    industry: "Food & Beverages",
    image: "/images/works/sunddae/sunddae hero.jpg",
    logo: "/images/clients/SUNDDAE.jpg", // ✅ tambahkan logo
    description:
      "Attractive coffee cup packaging design...",
    year: 2023,
    scope: ["Branding", "Packaging"],
    team: ["Sunddae Team"],
    gallery: [
      "/images/works/sunddae/1.jpg",
      "/images/works/sunddae/2.jpg",
      "/images/works/sunddae/3.jpg",
      "/images/works/sunddae/4.jpg",
      "/images/works/sunddae/5.jpg",
      "/images/works/sunddae/6.jpg",
      "/images/works/sunddae/7.jpg", 
      "/images/works/sunddae/8.jpg", 
      "/images/works/sunddae/9.jpg", 
      "/images/works/sunddae/10.jpg", 
      "/images/works/sunddae/11.jpg", 
    ],
  },
];
