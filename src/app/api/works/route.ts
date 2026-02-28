import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const works = await prisma.work.findMany({
      orderBy: { createdAt: "desc" }, // ✅ sudah valid karena field ada
    });
    return Response.json(works);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch works" }), {
      status: 500,
    });
  }
}
