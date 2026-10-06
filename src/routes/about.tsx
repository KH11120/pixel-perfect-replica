import { createFileRoute } from "@tanstack/react-router";
import discussion from "@/assets/discussion.jpg";
import { AssociationsStrip, DevPrograms, Tag, ButtonLink, PeopleGrid, Section, SectionHeader, SiteCta, VisionMission, WhatWeDo, WorkingCopy, principles } from "@/components/site";

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
      <AssociationsStrip note="Experience to Enterprise is a Kaushal Hub program in association with FITT, IIT Delhi." />

      <Section white>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="Who we are" title="An organisation for practical learning." />
            <div className="mt-8 border-l-2 border-saffron pl-5">
              <p className="font-serif text-[28px] leading-9 text-navy md:text-[36px] md:leading-[44px]">Kaushal se Kushal Bharat</p>
              <p className="mt-2 text-small text-slate">Kaushal (skill) to Kushal (capable)</p>
            </div>
          </div>
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

      <Section>
        <SectionHeader eyebrow="Programs" title="Programs from Kaushal Hub" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg border border-navy bg-card p-6">
            <Tag tone="saffron">Now enrolling</Tag>
            <h3 className="h4 mt-5 font-serif">Experience to Enterprise</h3>
            <p className="mt-2 flex-1 text-[16px] leading-6 text-slate">A Kaushal Hub program, in association with FITT, IIT Delhi.</p>
            <div className="mt-5"><ButtonLink to="/experience-to-enterprise" variant="text">View program</ButtonLink></div>
          </div>
          <DevPrograms />
        </div>
      </Section>

      <VisionMission />

      <section className="section-pad bg-navy">
        <div className="container-site max-w-3xl">
          <SectionHeader light eyebrow="Community" title="A community being built with care." sub="Kaushal Hub's community brings together professionals, experts, entrepreneurs, learners and alumni." />
          <p className="mt-6 text-primary-foreground/60">[PLACEHOLDER: planned activities such as peer learning, expert sessions, alumni sessions]</p>
        </div>
      </section>

      <Section white>
        <SectionHeader title="Team" />
        <div className="mt-10"><PeopleGrid /></div>
      </Section>

      <SiteCta />
    </>
  );
}
