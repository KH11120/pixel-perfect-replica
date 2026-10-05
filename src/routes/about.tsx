import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, LogoMark, PeopleGrid, Section, SectionHeader, VisionMission } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kaushal Hub — Experience into enterprise" },
      { name: "description", content: "Kaushal Hub is an upskilling platform under SNN Eduworld for experienced professionals." },
      { property: "og:title", content: "About Kaushal Hub" },
      { property: "og:description", content: "We help experience turn into enterprise." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <p className="eyebrow">About</p>
          <h1 className="h1 mt-4">We help experience turn into enterprise.</h1>
          <p className="mt-6 text-slate">Kaushal Hub is an upskilling platform under SNN Eduworld, built for professionals who want more than another course.</p>
        </div>
      </section>
      <Section tint>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeader eyebrow="Our story" title="Why Kaushal Hub exists." /></div>
          <div className="space-y-5 text-slate lg:col-span-8">
            <p>[Placeholder: founders' note, paragraph one — the gap we saw among senior professionals with deep expertise but no structured route to build on it.]</p>
            <p>[Placeholder: paragraph two — why existing courses and bootcamps did not fit people with careers, families and obligations.]</p>
            <p>[Placeholder: paragraph three — what we built instead, and the partnership with FITT, IIT Delhi.]</p>
          </div>
        </div>
      </Section>
      <VisionMission />
      <Section>
        <SectionHeader title="What we hold ourselves to." />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {["Evidence over opinion", "Apply, don't just learn", "Respect for experience", "Honest promises"].map((v, i) => (
            <div key={v} className="rounded-lg border bg-card p-6"><p className="font-serif text-saffron">0{i + 1}</p><p className="h4 mt-4 font-serif text-navy">{v}</p></div>
          ))}
        </div>
      </Section>
      <Section tint>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Our partners" title="FITT, IIT Delhi" sub="The Foundation for Innovation and Technology Transfer is IIT Delhi's innovation and technology-transfer body. It co-delivers Experience to Enterprise and supports selected ventures through incubation." />
            <p className="mt-4 text-small text-slate">[Wording pending FITT approval]</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end"><LogoMark label="FITT" /><LogoMark label="IIT Delhi" /></div>
        </div>
      </Section>
      <Section>
        <SectionHeader title="The team." />
        <div className="mt-12"><PeopleGrid /></div>
      </Section>
      <CtaBand />
    </>
  );
}
