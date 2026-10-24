import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, Card, FittPill, Section, SiteCta, Tag, DevPrograms } from "@/components/site";
import { canonicalLinks } from "@/lib/resources";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Kaushal Hub" },
      { name: "description", content: "Practical programs designed around capability, opportunity and real-world application." },
      { property: "og:title", content: "Programs — Kaushal Hub" },
      { property: "og:description", content: "Practical programs designed around capability, opportunity and real-world application." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonicalLinks("/programs"),
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <section className="section-pad">
        <div className="container-site max-w-3xl">
          <h1 className="h1">Programs & Learning Initiatives</h1>
          <p className="mt-6 text-slate">Explore practical learning programs and initiatives designed for different stages of learning, capability-building and professional growth.</p>
        </div>
      </section>
      <Section tint>
        <p className="eyebrow mb-4">Featured program</p>
        <Card className="md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <FittPill />
            <Tag>Featured program</Tag>
          </div>
          <h2 className="h2 mt-8">Experience to Enterprise</h2>
          <p className="h4 mt-2 font-serif text-navy">Test the leap before you take it.</p>
          <p className="mt-4 text-slate">A 12-week venture-building program for experienced professionals exploring entrepreneurship.</p>
          <div className="mt-6 flex flex-wrap gap-2"><Tag>12 weeks</Tag><Tag>~10 hrs per week</Tag><Tag>Online + campus immersion</Tag></div>
          <div className="mt-8"><ButtonLink to="/experience-to-enterprise">Explore Program</ButtonLink></div>
        </Card>
        <p className="eyebrow mb-4 mt-16">Planned programs & learning initiatives</p>
        <div className="grid gap-6 md:grid-cols-3"><DevPrograms /></div>
      </Section>
      <SiteCta />
    </>
  );
}
