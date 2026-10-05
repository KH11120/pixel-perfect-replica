import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Clock, MessagesSquare, Presentation, Hammer, Users, Network, FileCheck, Cpu, Map, LineChart, Projector, UsersRound } from "lucide-react";
import { Accordion, AudienceChips, ButtonLink, Card, CheckItem, CtaBand, FittPill, LogoMark, PeopleGrid, Section, SectionHeader, Step, Tag, VisionMission } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaushal Hub — Upskilling for experienced professionals" },
      { name: "description", content: "Turn years of expertise into ventures and careers. Experience to Enterprise, in association with FITT, IIT Delhi." },
      { property: "og:title", content: "Kaushal Hub — Upskilling for experienced professionals" },
      { property: "og:description", content: "Turn years of expertise into ventures and careers, with FITT, IIT Delhi." },
    ],
  }),
  component: Home,
});

const facts = [
  [Award, "Co-branded certificate with FITT, IIT Delhi"],
  [Clock, "12 weeks, ~10 hrs a week, alongside your job"],
  [MessagesSquare, "15+ real customer conversations"],
  [Presentation, "Mock investor and mentor panel"],
] as const;

function Home() {
  return (
    <>
      <section className="pb-12 pt-12 md:pb-20 md:pt-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FittPill />
            <p className="eyebrow mt-8">Upskilling for experienced professionals</p>
            <h1 className="h1 mt-4">Your experience is already worth building on.</h1>
            <p className="mt-6 max-w-xl text-slate">Kaushal Hub helps working professionals turn years of expertise into ventures, new careers and real impact, with structure, mentors and an ecosystem behind you.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/experience-to-enterprise">Explore Experience to Enterprise</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">Talk to our team</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Card className="border-t-4 border-t-saffron">
              <Tag tone="saffron">Now enrolling</Tag>
              <h3 className="h3 mt-4">Experience to Enterprise</h3>
              <ul className="mt-6 space-y-3 text-slate">
                <CheckItem>12 weeks, online</CheckItem>
                <CheckItem>2-3 day campus immersion at IIT Delhi</CheckItem>
                <CheckItem>Certificate co-branded with FITT, IIT Delhi</CheckItem>
              </ul>
              <Link to="/experience-to-enterprise" className="mt-6 inline-block text-small font-semibold text-navy underline underline-offset-4">View program</Link>
            </Card>
          </div>
        </div>
        <div className="container-site mt-14">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-4">
            {facts.map(([Icon, t]) => (
              <div key={t} className="flex flex-col gap-3 bg-card p-5 md:flex-row md:items-start">
                <Icon className="h-6 w-6 shrink-0 text-navy" strokeWidth={1.5} />
                <p className="text-small text-ink">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section tint>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h2">Backed by an ecosystem that builds startups.</h2>
            <p className="mt-4 text-slate">Experience to Enterprise is run with FITT, IIT Delhi, the institute's innovation and technology-transfer body. Ventures that stand out after evaluation can progress to incubation support.</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <LogoMark label="FITT" /><LogoMark label="IIT Delhi" /><LogoMark label="SNN Eduworld" />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="The gap" title="You have the experience. What's missing is the route." sub="Senior professionals hold industry knowledge, networks and credibility. Few have a low-risk, structured path from idea to first customer. We built one." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[[Hammer, "Learn by building", "Every assignment is applied to your own venture."], [Users, "Test with real customers", "Validate before you invest your savings."], [Network, "Connect to the ecosystem", "Mentors, investors, alumni and incubation pathways."]].map(([I, t, d]: any) => (
            <Card key={t}><I className="h-7 w-7 text-navy" strokeWidth={1.5} /><h4 className="h4 mt-6">{t}</h4><p className="mt-2 text-slate">{d}</p></Card>
          ))}
        </div>
      </Section>

      <Section tint>
        <Card className="grid gap-10 md:p-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Featured program</p>
            <h2 className="h2 mt-4">Experience to Enterprise</h2>
            <p className="mt-3 text-slate">Certificate Program in Entrepreneurship for Experienced Professionals</p>
            <div className="mt-6 flex flex-wrap gap-2"><Tag>12 weeks</Tag><Tag>Online + campus immersion</Tag><Tag>Weekends and evenings [timing TBC]</Tag></div>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <ul className="space-y-4">
              <CheckItem>Validate a real problem with 15+ customer interviews</CheckItem>
              <CheckItem>Prototype with AI and no-code tools, no coding needed</CheckItem>
              <CheckItem>Finish with a financial model, funding path and investor-grade pitch</CheckItem>
            </ul>
            <div><ButtonLink to="/experience-to-enterprise">See full program</ButtonLink></div>
          </div>
        </Card>
      </Section>

      <Section>
        <SectionHeader title="From experience to enterprise in five steps." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <Step n={1} title="Choose your path" text="Find and rank opportunities in your own industry." />
          <Step n={2} title="Validate with customers" text="Run 15+ conversations and test willingness to pay." />
          <Step n={3} title="Build and sell" text="Prototype with no-code tools and scope a paid pilot." />
          <Step n={4} title="Fund and pitch" text="Model the finances and pitch to a mock panel." />
          <Step n={5} title="Join the pathway" text="Selected ventures progress to incubation support." />
        </div>
      </Section>

      <VisionMission />

      <Section>
        <SectionHeader title="Built for professionals who've already done the hard years." />
        <div className="mt-10"><AudienceChips /></div>
        <p className="mt-8 max-w-3xl text-slate">Thinking of founding, building inside your employer, buying into a business or productising your expertise? No coding background needed.</p>
      </Section>

      <Section tint>
        <SectionHeader title="Not just a certificate. A venture with evidence behind it." />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {[[FileCheck, "Validated problem statement"], [Cpu, "Working prototype or automated workflow"], [Map, "90-day go-to-market plan"], [LineChart, "Financial model and funding memo"], [Projector, "10-slide investor pitch"], [UsersRound, "Alumni community access"]].map(([I, t]: any) => (
            <div key={t} className="rounded-lg border bg-card p-5 md:p-6"><I className="h-6 w-6 text-navy" strokeWidth={1.5} /><p className="mt-4 font-medium text-navy">{t}</p></div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Learn from people who've built and funded companies." />
        <div className="mt-12"><PeopleGrid note="Faculty from the FITT network and Kaushal Hub." /></div>
      </Section>

      <Section tint>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeader eyebrow="FAQ" title="Questions we hear most." /></div>
          <div className="lg:col-span-8">
            <Accordion items={[
              { q: "Do I need to leave my job?", a: "No, the program is designed around a working schedule." },
              { q: "Do I need a business idea already?", a: "No, Module 1 helps you find and rank opportunities in your own industry." },
              { q: "Will I get funding?", a: "Funding, investor access and incubation are for selected ventures, subject to evaluation and availability. Nothing is guaranteed." },
              { q: "What does it cost?", a: "An indicative fee band is shown on the program page, with card EMI options." },
            ]} />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
