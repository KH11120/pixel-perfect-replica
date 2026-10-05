import { createFileRoute } from "@tanstack/react-router";
import discussion from "@/assets/discussion.jpg";
import { ButtonLink, LogoMark, PeopleGrid, Section, SectionHeader, SiteCta, VisionMission, WhatWeDo, WorkingCopy, principles } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kaushal Hub — An initiative of SNN Eduworld" },
      { name: "description", content: "Kaushal Hub is an upskilling platform under SNN Eduworld, built around practical learning, capability and opportunity." },
      { property: "og:title", content: "About Kaushal Hub" },
      { property: "og:description", content: "An upskilling platform built around practical learning, capability and opportunity." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="section-pad">
        <div className="container-site grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="h1">About Kaushal Hub</h1>
            <p className="mt-6 max-w-xl text-slate">An upskilling platform under SNN Eduworld, built around practical learning, capability and opportunity. <WorkingCopy /></p>
          </div>
          <img src={discussion} alt="Two professionals in discussion" width={1280} height={960} className="aspect-[4/3] w-full rounded-xl object-cover lg:col-span-5" />
        </div>
      </section>

      <Section white>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeader eyebrow="Who we are" title="An organisation for practical learning." /></div>
          <div className="space-y-5 text-slate lg:col-span-8">
            <p>Kaushal Hub is an initiative of SNN Eduworld Pvt. Ltd. We design programs, build partnerships and grow a community that connects people with expertise and opportunity. <WorkingCopy /></p>
            <div className="rounded-lg border-l-2 border-saffron bg-background p-6">
              <p className="eyebrow">Founders' note</p>
              <p className="mt-3">[PLACEHOLDER: founders' note]</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="What we believe" title="Four principles." />
        <ol className="mt-10 border-t">
          {principles.map((p, i) => (
            <li key={p} className="flex items-baseline gap-6 border-b py-6">
              <span className="font-serif text-small text-slate">0{i + 1}</span>
              <span className="h3 font-serif text-navy">{p}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section tint>
        <SectionHeader eyebrow="What we do" title="Five areas we work across." />
        <div className="mt-12"><WhatWeDo /></div>
      </Section>

      <VisionMission />

      <section className="section-pad bg-navy">
        <div className="container-site max-w-3xl">
          <SectionHeader light eyebrow="Community" title="A community being built with care." sub="Kaushal Hub's community brings together professionals, experts, entrepreneurs, learners and alumni." />
          <p className="mt-6 text-primary-foreground/60">[PLACEHOLDER: planned activities such as peer learning, expert sessions, alumni sessions]</p>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Associations" title="Associations" />
        <div className="mt-10 flex flex-col gap-6 rounded-lg border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="text-ink"><span className="font-semibold text-navy">Experience to Enterprise:</span> in association with FITT, IIT Delhi</p>
          <div className="flex gap-3"><LogoMark label="FITT" /><LogoMark label="IIT Delhi" /></div>
        </div>
        <div className="mt-6"><ButtonLink to="/experience-to-enterprise" variant="text">About the program</ButtonLink></div>
      </Section>

      <Section white>
        <SectionHeader title="Team" />
        <div className="mt-10"><PeopleGrid /></div>
      </Section>

      <SiteCta />
    </>
  );
}
