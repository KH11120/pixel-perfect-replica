import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ButtonLink, Card, FittPill, Section, SiteCta, Tag, buttonClass , AssociationsStrip, DevPrograms, ImpactLine } from "@/components/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Kaushal Hub" },
      { name: "description", content: "Practical programs designed around capability, opportunity and real-world application." },
      { property: "og:title", content: "Programs — Kaushal Hub" },
      { property: "og:description", content: "Practical programs designed around capability, opportunity and real-world application." },
    ],
  }),
  component: Programs,
});

function Programs() {
  const [done, setDone] = useState(false);
  return (
    <>
      <section className="section-pad">
        <div className="container-site max-w-3xl">
          <h1 className="h1">Programs</h1>
          <p className="mt-6 text-slate">Practical programs designed around capability, opportunity and real-world application.</p>
        </div>
      </section>
      <Section tint>
        <p className="eyebrow mb-4">Now enrolling</p>
        <Card className="md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <FittPill />
            <Tag tone="saffron">Now enrolling</Tag>
          </div>
          <h2 className="h2 mt-8">Experience to Enterprise</h2>
          <p className="h4 mt-2 font-serif text-navy">Test the leap before you take it.</p>
          <p className="mt-4 text-slate">A 12-week venture-building program for experienced professionals exploring entrepreneurship.</p>
          <div className="mt-6 flex flex-wrap gap-2"><Tag>12 weeks</Tag><Tag>~10 hrs per week</Tag><Tag>Online + campus immersion</Tag></div>
          <div className="mt-8"><ButtonLink to="/experience-to-enterprise">View program</ButtonLink></div>
        </Card>
        <p className="eyebrow mb-4 mt-16">In development: Entrepreneurship</p>
        <div className="grid gap-6 md:grid-cols-3"><DevPrograms withLinks /></div>
        <div id="notify" className="mx-auto mt-16 max-w-xl py-12 text-center md:py-16">
          <p className="h3 font-serif text-navy">Notify me about new programs</p>
          <p className="mt-3 text-slate">Leave your email and we'll write when the next one opens.</p>
          {done ? <p className="mt-8 font-medium text-navy">Email sign-up is not open yet. Your email has not been saved.</p> : (
            <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <input type="email" required placeholder="you@company.com" aria-label="Email" className="h-12 flex-1 rounded-md border bg-card px-4 outline-none focus:border-navy" />
              <button className={buttonClass("secondary")}>Notify me</button>
            </form>
          )}
        </div>
      </Section>
      <AssociationsStrip />
      <SiteCta />
    </>
  );
}
