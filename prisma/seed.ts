import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ✅ pastikan path ini sesuai dengan folder project kamu
  const { worksData } = await import("../src/data/worksData.ts");

  for (const work of worksData) {
    await prisma.work.upsert({
      where: { slug: work.slug },
      update: {
        title: work.title,
        category: work.category,
        image: work.image,
        logo: work.logo,
        description: work.description,
        year: work.year ?? null,
        industry: work.industry ?? null,
        scope: JSON.stringify(work.scope ?? []),
        team: JSON.stringify(work.team ?? []),
        gallery: JSON.stringify(work.gallery ?? []),
      },
      create: {
        slug: work.slug,
        title: work.title,
        category: work.category,
        image: work.image,
        logo: work.logo,
        description: work.description,
        year: work.year ?? null,
        industry: work.industry ?? null,
        scope: JSON.stringify(work.scope ?? []),
        team: JSON.stringify(work.team ?? []),
        gallery: JSON.stringify(work.gallery ?? []),
        // createdAt & updatedAt otomatis diisi Prisma
      },
    });
  }

  console.log("✅ Database berhasil di-seed dengan upsert!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding gagal:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
