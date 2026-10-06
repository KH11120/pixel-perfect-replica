import { createFileRoute } from "@tanstack/react-router";
import { Handshake } from "lucide-react";
import workshop from "@/assets/workshop.jpg";
import { AssociationsStrip, DevPrograms, ImpactLine, ButtonLink, Card, FittPill, LogoMark, Section, SectionHeader, SiteCta, Tag, VisionMission, WhatWeDo, WorkingCopy } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaushal Hub — Practical upskilling for professionals" },
      { name: "description", content: "Kaushal Hub brings together practical learning, expertise, technology and opportunity through programs, partnerships and a community." },
      { property: "og:title", content: "Kaushal Hub — Practical upskilling for professionals" },
      { property: "og:description", content: "Programs, partnerships and a community for professionals building what's next." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1 Hero */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Upskilling platform</p>
            <h1 className="h1 mt-5">Practical upskilling for people building what's next.</h1>
            <p className="mt-6 max-w-xl text-slate">Kaushal Hub brings together practical learning, expertise, technology and opportunity, through programs, partnerships and a community.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/programs">Explore Programs</ButtonLink>
              <ButtonLink to="/about" variant="secondary">About Kaushal Hub</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Card>
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow">Featured program</p>
                <Tag tone="saffron">Now enrolling</Tag>
              </div>
              <h3 className="h3 mt-6">Experience to Enterprise</h3>
              <p className="mt-2 text-[16px] leading-6 text-slate">Certificate Program in Entrepreneurship for Experienced Professionals</p>
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t pt-6">
                <LogoMark label="FITT" small /><LogoMark label="IIT Delhi" small />
                <span className="text-small text-slate">In association with FITT, IIT Delhi</span>
              </div>
              <p className="mt-4 text-small font-medium text-navy">12 weeks · Online + campus immersion</p>
              <div className="mt-6"><ButtonLink to="/experience-to-enterprise" variant="text">View program</ButtonLink></div>
            </Card>
          </div>
        </div>
      </section>
      <AssociationsStrip />

      {/* 2 About */}
      <Section white>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">About Kaushal Hub</p>
            <h2 className="h2 mt-4">What is Kaushal Hub?</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-serif text-[22px] leading-8 text-ink md:text-[26px] md:leading-9">Kaushal means skill. Kaushal Hub is an upskilling platform for practical learning, capability building and meaningful connections between people, expertise and opportunity.</p>
            <p className="mt-6 text-slate">Through programs, partnerships and community, we create pathways to learn, apply and move forward. <WorkingCopy /></p>
            <div className="mt-10 border-l-2 border-saffron pl-6">
              <p className="font-serif text-[32px] leading-10 text-navy md:text-[40px] md:leading-[48px]">Kaushal se Kushal Bharat</p>
              <p className="mt-2 text-small text-slate">Kaushal (skill) to Kushal (capable) <WorkingCopy /></p>
            </div>
            <div className="mt-8"><ButtonLink to="/about" variant="text">About Kaushal Hub</ButtonLink></div>
          </div>
        </div>
      </Section>

      {/* 3 What we do */}
      <Section>
        <SectionHeader eyebrow="What we do" title="Five areas we work across." />
        <p className="mt-2 text-small text-slate"><WorkingCopy>[WORKING COPY — areas to be confirmed]</WorkingCopy></p>
        <div className="mt-12"><WhatWeDo /></div>
      </Section>

      {/* 4 Programs */}
      <Section tint>
        <SectionHeader eyebrow="Programs" title="Programs from Kaushal Hub" />
        <div className="mt-10" />
        <div className="grid overflow-hidden rounded-xl border bg-card lg:grid-cols-2">
          <img src={workshop} alt="Professionals in a working session" width={1280} height={960} loading="lazy" className="h-64 w-full object-cover lg:h-full" />
          <div className="p-6 md:p-12">
            <Tag tone="saffron">Now enrolling</Tag>
            <h2 className="h2 mt-4">Experience to Enterprise</h2>
            <p className="mt-2 text-slate">Certificate Program in Entrepreneurship for Experienced Professionals</p>
            <div className="mt-6"><FittPill /></div>
            <ImpactLine className="mt-6" />
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-border">
              {["12 weeks", "~10 hrs a week", "Online + campus immersion", "Co-branded certificate"].map((f) => <dd key={f} className="bg-card p-4 text-small font-medium text-navy">{f}</dd>)}
            </dl>
            <div className="mt-6 flex flex-wrap gap-2"><Tag>Provisional patent route (where eligible)</Tag><Tag>The batch invests in itself</Tag></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/experience-to-enterprise">Explore the program</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">Request information</ButtonLink>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3"><DevPrograms /></div>
        <div className="mt-8"><ButtonLink to="/programs" variant="text">View all programs</ButtonLink></div>
      </Section>

      {/* 5 Community */}
      <section className="section-pad bg-navy">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader light eyebrow="The Kaushal Hub community" title="The people around you can change what comes next." sub="A community of professionals, experts, entrepreneurs and learners who share knowledge and create opportunities together." />
            <div className="mt-8"><a href="/about" className="inline-flex items-center gap-2 font-semibold text-primary-foreground underline-offset-4 hover:underline">Learn about the community →</a></div>
          </div>
          <ul className="grid content-end gap-px lg:col-span-5">
            {["Professionals", "Experts", "Entrepreneurs", "Learners and alumni"].map((l) => (
              <li key={l} className="border-b border-primary-foreground/15 py-4 font-serif text-[22px] text-primary-foreground">{l}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 Vision & mission */}
      <VisionMission />

      {/* 7 Partner */}
      <Section tint className="!py-12 md:!py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-5">
            <Handshake className="h-8 w-8 shrink-0 text-navy" strokeWidth={1.5} />
            <div>
              <h3 className="h3">Partner with Kaushal Hub</h3>
              <p className="mt-2 max-w-2xl text-slate">For institutions, organisations, experts and ecosystem partners looking to create meaningful learning and opportunity.</p>
            </div>
          </div>
          <ButtonLink to="/contact" variant="secondary">Partner With Us</ButtonLink>
        </div>
      </Section>

      <SiteCta />
    </>
  );
}
