import { notFound } from "next/navigation";
import Image from "next/image";
import { worksData } from "@/app/data/worksData";

interface Props {
  params: { slug: string };
}

export default function WorkDetailPage({ params }: Props) {
  const work = worksData.find((w) => w.slug === params.slug);

  if (!work) return notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Image */}
      <div className="relative w-full overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Content */}
      <section className="w-full px-6 md:px-20 py-16">
        {/* Title + Year in same row */}
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">{work.title}</h1>
          {work.year && (
            <p className="text-2xl md:text-3xl font-semibold">{work.year}</p>
          )}
        </div>

        {/* Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          {/* Left - Scope & Industry */}
          <div className="space-y-8 text-sm md:text-base">
            {work.scope && (
              <div>
                <p className="text-foreground/50 mb-1">Scope of work</p>
                <p className="font-medium">{work.scope.join(", ")}</p>
              </div>
            )}
            {work.industry && (
              <div>
                <p className="text-foreground/50 mb-1">Industry</p>
                <p className="font-medium">{work.industry}</p>
              </div>
            )}
          </div>

          {/* Middle - Team */}
          {work.team && (
            <div className="text-sm md:text-base">
              <p className="text-foreground/50 mb-2">Team</p>
              <ul className="space-y-1">
                {work.team.map((member, i) => (
                  <li key={i} className="font-medium">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Right - Description */}
          <div>
            <p className="text-lg md:text-xl leading-relaxed">
              {work.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
