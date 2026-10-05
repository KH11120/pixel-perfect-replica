import { createFileRoute } from "@tanstack/react-router";
import { Video, MonitorPlay, MessageSquareText, Landmark, AlertCircle } from "lucide-react";
import { Accordion, AudienceChips, ButtonLink, Card, CheckItem, CtaBand, FactTile, FittPill, PeopleGrid, Section, SectionHeader, Tag, buttonClass } from "@/components/site";
import { ApplyForm } from "@/components/ApplyForm";

export const Route = createFileRoute("/experience-to-enterprise")({
  head: () => ({
    meta: [
      { title: "Experience to Enterprise — Kaushal Hub × FITT, IIT Delhi" },
      { name: "description", content: "A 12-week online certificate program in entrepreneurship for experienced professionals, with campus immersion at IIT Delhi." },
      { property: "og:title", content: "Experience to Enterprise — Kaushal Hub" },
      { property: "og:description", content: "Turn your domain expertise into a validated venture, without leaving your job." },
    ],
  }),
  component: Program,
});

const modules = [
  ["Founder Foundations and Validation", "Weeks 1-3", "Choosing a pathway, personal runway and family-finance plan, employment-contract checkpoint (IP, moonlighting, non-compete), finding problems in your industry, customer discovery, buyer mapping, willingness-to-pay tests, pilot-first MVP.", "Opportunity brief, validated problem statement, pilot scope."],
  ["Build and Operate", "Weeks 4-5", "AI for non-coders, prompt engineering, no-code prototype or workflow automation, data-privacy basics (DPDP Act), briefing developers and vendors, running a venture alongside a job.", "Working prototype or automated workflow, core SOP."],
  ["Go-to-Market", "Weeks 6-7", "Ideal customer profile, positioning, founder-led content with AI, network-led B2B selling, referral and outbound, pilot to contract, channel partnerships.", "90-day go-to-market plan."],
  ["Finance, Funding and Pitching", "Weeks 8-9", "Unit economics and pricing, cash flow and runway, simple 3-statement model, GST/tax basics, funding routes (bootstrap, customer-funded, angel, VC, debt, government schemes and grants, incubators), cap table basics, entity choice, pitch and Q&A drills.", "Financial model, funding path memo, 10-slide deck."],
  ["Legal, Leadership and Metrics", "Weeks 10-11", "Founders' agreement, IP and trademark, contracts, compliance calendar, co-founder selection and equity, first hires and advisors, transition plan from corporate role, KPIs and dashboard, pivot/persevere/stop rules.", "Legal checklist, team and transition plan, KPI dashboard."],
  ["Capstone and Demo Day", "Week 12", "10-minute pitch and prototype or pilot demo with Q&A before a mock investor and mentor panel.", "Final pitch, project submission plan."],
];

const after = [
  ["Month 1 after completion", "Submit your Venture Project Dossier: problem and evidence, prototype/pilot results, business model and financials, 10-slide pitch, 5-minute video. Evaluated on a published rubric: problem evidence, traction, solution quality, team capability, scalability, feasibility.", "Kaushal Hub"],
  ["Outstanding ventures", "Incubation support.", "FITT"],
  ["Investor connect", "Only for ventures proposed and hosted for incubation.", "FITT"],
  ["Funding and grant support", "Based on availability.", "FITT"],
  ["Alumni community", "Batch-based and global.", "Kaushal Hub"],
];

function Program() {
  return (
    <>
      <section className="section-pad">
        <div className="container-site max-w-4xl">
          <FittPill />
          <h1 className="h1 mt-8">Experience to Enterprise</h1>
          <p className="h4 mt-4 font-serif text-navy">Certificate Program in Entrepreneurship for Experienced Professionals</p>
          <p className="mt-6 max-w-2xl text-slate">A 3-month online program to turn your domain expertise into a validated venture, without leaving your job.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/experience-to-enterprise" hash="apply">Apply Now</ButtonLink>
            <a href="#" className={buttonClass("secondary")}>Download brochure</a>
          </div>
          <p className="mt-4 text-small text-slate">Program name subject to final confirmation.</p>
        </div>
      </section>

      <Section tint>
        <SectionHeader eyebrow="At a glance" title="The essentials." />
        <div className="mt-10 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
          <FactTile label="Duration" value="12 weeks" />
          <FactTile label="Commitment" value="~10 hrs a week" note="6 live + 4 self-paced" />
          <FactTile label="Mode" value="Online + 2-3 day campus immersion at IIT Delhi" note="Meals included; travel and lodging not included" />
          <FactTile label="Certificate" value="Co-branded, verifiable online" />
          <FactTile label="Fee" value="Indicative Rs 75,000-1,50,000" note="Final to be confirmed" />
          <FactTile label="Registration fee" value="5% of program fee" />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeader title="What you will be able to do." /></div>
          <ul className="space-y-4 lg:col-span-7">
            <CheckItem>Identify and rank opportunities and choose a pathway</CheckItem>
            <CheckItem>Validate with 15+ customer conversations and test willingness to pay</CheckItem>
            <CheckItem>Scope and run a paid pilot</CheckItem>
            <CheckItem>Prototype with AI and no-code tools</CheckItem>
            <CheckItem>Plan go-to-market using your network</CheckItem>
            <CheckItem>Build a financial model, choose a funding route incl. government schemes and grants, understand legal and IP basics</CheckItem>
            <CheckItem>Pitch to a mock investor and mentor panel</CheckItem>
          </ul>
        </div>
      </Section>

      <Section tint>
        <SectionHeader eyebrow="Curriculum" title="Six modules, twelve weeks." />
        <div className="mt-10">
          <Accordion items={modules.map(([t, w, topics, prod], i) => ({
            q: `${i + 1}. ${t} · ${w}`,
            a: (<div className="space-y-4"><p>{topics}</p><p className="rounded-md bg-tint p-4 text-navy"><span className="font-semibold">You produce: </span>{prod}</p></div>),
          }))} />
        </div>
      </Section>

      <Section>
        <SectionHeader title="How it works." />
        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {[[Video, "Live sessions led by FITT-network experts and KH faculty"], [MonitorPlay, "Self-paced tutorials and assessments on our platform"], [MessageSquareText, "Mentor feedback on your own venture"], [Landmark, "Campus immersion at FITT, IIT Delhi"]].map(([I, t]: any) => (
            <Card key={t} className="!p-6"><I className="h-7 w-7 text-navy" strokeWidth={1.5} /><p className="mt-4 font-medium text-navy">{t}</p></Card>
          ))}
        </div>
      </Section>

      <Section tint>
        <SectionHeader eyebrow="After the program" title="What can follow, for selected ventures." />
        <ol className="mt-10 border-l-2 border-navy/20 pl-6 md:pl-8">
          {after.map(([t, d, by], i) => (
            <li key={t} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[33px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-navy bg-background md:-left-[41px]" />
              <div className="flex flex-wrap items-center gap-3"><p className="h4 font-serif text-navy">{t}</p><Tag>{by}</Tag></div>
              <p className="mt-2 max-w-3xl text-slate">{d}</p>
              {i === 0 && null}
            </li>
          ))}
        </ol>
        <div className="mt-10 flex gap-4 rounded-lg border border-saffron/50 bg-saffron/10 p-6">
          <AlertCircle className="h-6 w-6 shrink-0 text-navy" strokeWidth={1.5} />
          <p className="font-medium text-navy">These benefits are conditional on selection and available funding. No funding or investment is guaranteed.</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <p className="eyebrow">Certification</p>
            <h3 className="h3 mt-4">Co-branded certificate</h3>
            <ul className="mt-6 space-y-3 text-slate">
              <CheckItem>Minimum 70% attendance and 40% cumulative evaluation score</CheckItem>
              <CheckItem>Physical copy handed over at the campus immersion</CheckItem>
              <CheckItem>Digital copy verifiable through an online portal</CheckItem>
            </ul>
          </Card>
          <Card>
            <p className="eyebrow">Fees and payment</p>
            <h3 className="h3 mt-4">Rs 75,000-1,50,000</h3>
            <p className="mt-2 text-small text-slate">Indicative band. Final fee to be confirmed.</p>
            <ul className="mt-6 space-y-3 text-slate">
              <CheckItem>5% registration fee to confirm your seat</CheckItem>
              <CheckItem>Card and card-EMI payment</CheckItem>
            </ul>
          </Card>
        </div>
      </Section>

      <Section tint>
        <SectionHeader title="Who should join." />
        <div className="mt-10"><AudienceChips /></div>
        <p className="mt-8 text-slate"><span className="font-semibold text-navy">Not a fit if:</span> you want a coding course or guaranteed funding.</p>
      </Section>

      <Section>
        <SectionHeader title="Faculty." />
        <div className="mt-10"><PeopleGrid note="Faculty from FITT network (~70%) and Kaushal Hub (~30%)." /></div>
      </Section>

      <Section tint>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeader eyebrow="FAQ" title="Before you apply." /></div>
          <div className="lg:col-span-8">
            <Accordion items={[
              { q: "What is the weekly schedule?", a: "About 10 hours a week: 6 hours of live sessions on weekends and evenings, plus 4 hours self-paced. [Exact timing to be confirmed]" },
              { q: "Do I need a coding background?", a: "No. You will prototype with AI and no-code tools." },
              { q: "What if I miss a session?", a: "Recordings are available, but certification needs at least 70% attendance." },
              { q: "What happens after Demo Day?", a: "You submit a Venture Project Dossier within a month. Outstanding ventures may progress to incubation support with FITT, subject to evaluation and availability." },
              { q: "What is the refund policy?", a: "[Placeholder: refund policy to be confirmed]" },
            ]} />
          </div>
        </div>
      </Section>

      <CtaBand />

      <Section id="apply">
        <SectionHeader title="Apply to Experience to Enterprise." sub="Takes about five minutes. We'll follow up with a counselling call." />
        <div className="mt-10 max-w-3xl"><ApplyForm /></div>
      </Section>
    </>
  );
}
