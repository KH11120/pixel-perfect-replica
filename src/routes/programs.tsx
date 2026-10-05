import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ButtonLink, Card, CheckItem, CtaBand, Section, Tag, buttonClass } from "@/components/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Kaushal Hub" },
      { name: "description", content: "Practical programs for experienced professionals, starting with Experience to Enterprise." },
      { property: "og:title", content: "Programs — Kaushal Hub" },
      { property: "og:description", content: "Practical programs for experienced professionals." },
    ],
  }),
  component: Programs,
});

function Programs() {
  const [done, setDone] = useState(false);
  return (
    <>
      <section className="section-pad">
        <div className="container-site">
          <h1 className="h1">Programs</h1>
          <p className="mt-4 text-slate">Practical programs for experienced professionals.</p>
        </div>
      </section>
      <Section tint>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 md:p-10">
            <Tag tone="saffron">Now enrolling</Tag>
            <h2 className="h2 mt-4">Experience to Enterprise</h2>
            <p className="mt-2 text-slate">Certificate Program in Entrepreneurship for Experienced Professionals. In association with FITT, IIT Delhi.</p>
            <ul className="mt-6 space-y-3">
              <CheckItem>12 weeks online, ~10 hrs a week</CheckItem>
              <CheckItem>2-3 day campus immersion at IIT Delhi</CheckItem>
              <CheckItem>Co-branded certificate with FITT, IIT Delhi</CheckItem>
            </ul>
            <div className="mt-8"><ButtonLink to="/experience-to-enterprise">View program</ButtonLink></div>
          </Card>
          <div className="rounded-lg border border-dashed bg-background p-6 md:p-8">
            <p className="eyebrow">Coming soon</p>
            <h3 className="h3 mt-4 !text-slate">More programs coming soon</h3>
            <p className="mt-2 text-small text-slate">Leave your email and we'll write when the next program opens.</p>
            {done ? <p className="mt-6 font-medium text-navy">Thanks — we'll be in touch.</p> : (
              <form className="mt-6 flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
                <input type="email" required placeholder="you@company.com" className="h-12 rounded-md border bg-card px-4 outline-none focus:border-navy" />
                <button className={buttonClass("secondary")}>Notify me</button>
              </form>
            )}
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
