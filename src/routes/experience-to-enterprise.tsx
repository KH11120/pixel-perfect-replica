import { createFileRoute } from "@tanstack/react-router";
import { Video, MonitorPlay, MessageSquareText, Landmark, AlertCircle } from "lucide-react";
import workshop from "@/assets/workshop.jpg";
import { Accordion, ButtonLink, Card, CheckItem, CtaBand, FactTile, FittPill, LogoMark, PeopleGrid, Section, SectionHeader, buttonClass } from "@/components/site";
import { ApplyForm } from "@/components/ApplyForm";

export const Route = createFileRoute("/experience-to-enterprise")({
  head: () => ({
    meta: [
      { title: "Experience to Enterprise — A Kaushal Hub program" },
      { name: "description", content: "A 12-week venture-building program for experienced professionals, a Kaushal Hub program in association with FITT, IIT Delhi." },
      { property: "og:title", content: "Experience to Enterprise — A Kaushal Hub program" },
      { property: "og:description", content: "Explore, validate and pursue a real entrepreneurial opportunity without first leaving your job." },
    ],
  }),
  component: Program,
});

const modules: [string, string, string, string][] = [
  ["Founder Foundations and Validation", "Weeks 1-3", "Choosing a pathway, personal runway and family-finance plan, employment-contract checkpoint (IP, moonlighting, non-compete), finding problems in your industry, customer discovery (15+ interviews), buyer mapping, willingness-to-pay tests, pilot-first MVP.", "Opportunity brief, validated problem statement, pilot scope."],
  ["Build and Operate", "Weeks 4-5", "AI for non-coders, prompt engineering, no-code prototype or workflow automation, data-privacy basics (DPDP Act), briefing developers and vendors, running a venture alongside a job.", "Working prototype or automated workflow, core SOP."],
  ["Go-to-Market", "Weeks 6-7", "Ideal customer profile, positioning, founder-led content with AI, network-led B2B selling, referral and outbound, pilot to contract, channel partnerships.", "90-day go-to-market plan."],
  ["Finance, Funding and Pitching", "Weeks 8-9", "Unit economics and pricing, cash flow and runway, simple 3-statement model, GST/tax basics, funding routes (bootstrap, customer-funded, angel, VC, debt, government schemes and grants, incubators), cap table basics, entity choice, pitch and Q&A drills.", "Financial model, funding path memo, 10-slide deck."],
  ["Legal, Leadership and Metrics", "Weeks 10-11", "Founders' agreement, IP and trademark, contracts, compliance calendar, co-founder selection and equity, first hires and advisors, transition plan from corporate role, KPIs and dashboard, pivot/persevere/stop rules.", "Legal checklist, team and transition plan, KPI dashboard."],
  ["Capstone and Demo Day", "Week 12", "10-minute pitch and prototype or pilot demo with Q&A before a mock investor and mentor panel.", "Final pitch, project submission plan."],
];

const after: [string, string][] = [
  ["Month 1 after completion", "Submit a Venture Project Dossier: problem and evidence, prototype or pilot results, business model and financials, 10-slide pitch, 5-minute video."],
  ["Evaluation", "Assessed on a published rubric: problem evidence, traction, solution quality, team capability, scalability, feasibility."],
  ["Selected ventures", "Ventures selected after evaluation may be considered for further support."],
  ["Potential support", "Incubation; investor connect (only for ventures proposed and hosted for incubation); funding and grant support (based on availability); alumni community (run by Kaushal Hub)."],
];

const faq: [string, string][] = [
  ["Who is this for?", "Experienced working professionals, typically 30-50, with industry knowledge, networks and credibility, who want to explore entrepreneurship while still working."],
  ["Do I need a technical background?", "No. You will use AI and no-code tools. Complex technology may still need developers or vendors."],
  ["Do I need to quit my job?", "No. The program is designed to run alongside a job."],
  ["How many hours per week?", "About 10 hours: about 6 live and about 4 self-paced and venture work."],
  ["What is the FITT, IIT Delhi association?", "Experience to Enterprise is a Kaushal Hub program offered in association with FITT, IIT Delhi. Kaushal Hub is a separate organisation. [Wording pending FITT approval]"],
  ["What does the campus immersion involve?", "2-3 days at FITT, IIT Delhi. Dates to be announced. Meals included; travel and lodging not included. The physical certificate is handed over here."],
  ["What are the certificate requirements?", "Minimum 70% attendance and 40% cumulative evaluation score."],
  ["Is incubation guaranteed?", "No. Incubation is for selected ventures, subject to evaluation, availability and FITT arrangements."],
  ["Is funding guaranteed?", "No. Funding and grant support are for selected ventures and based on availability. Nothing is guaranteed."],
  ["How does post-program evaluation work?", "Within a month of completion you submit a Venture Project Dossier, which is evaluated on a published rubric."],
  ["What does it cost?", "Indicative fee Rs 75,000 to 1,50,000. Final fee to be confirmed. Registration fee is 5% of the program fee."],
  ["Can I pay by EMI?", "Cards and card EMI, subject to final arrangements."],
  ["What if I miss a session?", "Certificate requires minimum 70% attendance. [PLACEHOLDER: make-up and refund policy]"],
];

function Program() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Kaushal Hub program</p>
            <div className="mt-5"><FittPill /></div>
            <h1 className="h1 mt-6">Experience to Enterprise</h1>
            <p className="h4 mt-4 font-serif text-navy">Certificate Program in Entrepreneurship for Experienced Professionals</p>
            <p className="mt-6 max-w-xl text-slate">A 12-week practical venture-building program for experienced professionals who want to explore, validate and pursue a real entrepreneurial opportunity without first leaving their job.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/experience-to-enterprise" hash="apply">Apply Now</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">Request information</ButtonLink>
            </div>
            <p className="mt-4 text-small text-slate">Program name subject to final confirmation.</p>
          </div>
          <img src={workshop} alt="Participants in a working session" width={1280} height={960} className="aspect-[4/3] w-full rounded-xl object-cover lg:col-span-5" />
        </div>
        <div className="container-site mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-5">
          <FactTile label="Duration" value="12 weeks" />
          <FactTile label="Weekly" value="~10 hrs" note="6 live + 4 self-paced and venture work" />
          <FactTile label="Format" value="Online + 2-3 day campus immersion" />
          <FactTile label="Background" value="No technical background required" />
          <FactTile label="Participants" value="Typically aged 30-50" />
        </div>
      </section>

      {/* Why */}
      <Section white>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeader eyebrow="Why this program" title="A practical route from idea to evidence." /></div>
          <div className="lg:col-span-7">
            <p className="font-serif text-[24px] leading-8 text-navy md:text-[28px] md:leading-9">Your venture becomes the classroom.</p>
            <p className="mt-2 font-serif text-[24px] leading-8 text-navy md:text-[28px] md:leading-9">Evidence is what moves the venture forward.</p>
            <p className="mt-6 text-slate">Every module asks you to act on your own opportunity: talk to customers, test prices, scope a pilot. Theory is kept to what you need to make the next decision.</p>
          </div>
        </div>
      </Section>

      {/* Who */}
      <Section tint>
        <SectionHeader eyebrow="Who it's for" title="Experienced professionals exploring entrepreneurship while still working." sub="Typically 30-50, with industry knowledge, networks and credibility." />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {["Mid-career managers", "Domain specialists", "Consultants", "Senior individual contributors"].map((a) => <div key={a} className="rounded-lg border bg-card px-5 py-4 font-medium text-navy">{a}</div>)}
        </div>
        <p className="mt-8 text-slate">Founding, building inside your employer, buying into a business or productising expertise. No coding needed.</p>
        <p className="mt-3 text-slate"><span className="font-semibold text-navy">Not a fit if:</span> you want a coding course or guaranteed funding.</p>
      </Section>

      {/* Outcomes */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeader title="What you will be able to do." /></div>
          <ul className="space-y-4 lg:col-span-7">
            <CheckItem>Rank opportunities and pick a pathway</CheckItem>
            <CheckItem>Validate with 15+ customer conversations and test willingness to pay</CheckItem>
            <CheckItem>Scope and run a paid pilot</CheckItem>
            <CheckItem>Prototype with AI and no-code tools</CheckItem>
            <CheckItem>Plan go-to-market through your network</CheckItem>
            <CheckItem>Build a financial model, choose a funding route incl. government schemes and grants, understand legal and IP basics</CheckItem>
            <CheckItem>Pitch to a mock investor and mentor panel</CheckItem>
          </ul>
        </div>
      </Section>

      {/* Curriculum */}
      <Section white>
        <SectionHeader eyebrow="Curriculum" title="Six modules, twelve weeks." />
        <div className="relative mt-10 pl-8 md:pl-12">
          <div className="absolute bottom-6 left-3 top-6 w-px bg-border md:left-5" />
          <div className="space-y-3">
            {modules.map(([t, w, topics, prod], i) => (
              <div key={t} className="relative">
                <span className="absolute -left-8 top-5 grid h-6 w-6 place-items-center rounded-full border border-navy bg-card text-[12px] font-semibold text-navy md:-left-12 md:h-10 md:w-10 md:text-small">{i + 1}</span>
                <Accordion items={[{ q: <><span className="eyebrow block !text-slate">{w}</span><span className="mt-1 block">{t}</span></>, a: <div className="space-y-4"><p>{topics}</p><p className="rounded-md bg-tint p-4 text-navy"><span className="font-semibold">You produce: </span>{prod}</p></div> }]} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Build while you work + AI */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="md:p-10">
            <p className="eyebrow">Build while you work</p>
            <h2 className="h3 mt-4">You don't have to quit your job on day one.</h2>
            <p className="mt-4 text-slate">About 10 hours a week lets you test an opportunity before making any career transition. The program gives you a method and evidence; it does not promise business success.</p>
          </Card>
          <Card className="md:p-10">
            <p className="eyebrow">AI and no-code</p>
            <h2 className="h3 mt-4">Move faster as a non-technical founder.</h2>
            <p className="mt-4 text-slate">AI research, prompt engineering, no-code tools, workflow automation and prototypes. Complex technology may still need developers or vendors, and you will learn how to brief them.</p>
          </Card>
        </div>
      </Section>

      {/* How it works */}
      <Section tint>
        <SectionHeader title="How it works." />
        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {([[Video, "Live sessions with FITT-network experts and Kaushal Hub faculty"], [MonitorPlay, "Self-paced tutorials and assessments on the Kaushal Hub platform"], [MessageSquareText, "Mentor feedback on your own venture"], [Landmark, "Campus immersion at FITT, IIT Delhi"]] as const).map(([I, t]) => (
            <Card key={t} className="!p-6"><I className="h-7 w-7 text-navy" strokeWidth={1.5} /><p className="mt-4 text-[16px] font-medium leading-6 text-navy">{t}</p></Card>
          ))}
        </div>
      </Section>

      {/* FITT association */}
      <Section white>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader title="In association with FITT, IIT Delhi" sub="Kaushal Hub is a separate organisation. Experience to Enterprise is a Kaushal Hub program offered in association with FITT, IIT Delhi." />
          <div className="flex gap-3"><LogoMark label="FITT" /><LogoMark label="IIT Delhi" /></div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6 md:p-8">
            <p className="eyebrow !text-navy">FITT's role</p>
            <ul className="mt-5 space-y-3 text-slate">
              <CheckItem>Co-branded certification</CheckItem>
              <CheckItem>Faculty and expert network (about 70% of teaching faculty)</CheckItem>
              <CheckItem>Campus immersion</CheckItem>
              <CheckItem>Joint curriculum design</CheckItem>
              <CheckItem>Post-program incubation, investor connect and grant support for selected ventures</CheckItem>
            </ul>
            <p className="mt-5 text-small text-slate">[Wording pending FITT approval]</p>
          </div>
          <div className="rounded-lg border p-6 md:p-8">
            <p className="eyebrow !text-navy">Kaushal Hub's role</p>
            <ul className="mt-5 space-y-3 text-slate">
              <CheckItem>Learning platform</CheckItem>
              <CheckItem>Admissions and learner support</CheckItem>
              <CheckItem>Community</CheckItem>
              <CheckItem>About 30% of faculty</CheckItem>
            </ul>
          </div>
        </div>
      </Section>

      {/* Campus + certificate */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="md:p-10">
            <p className="eyebrow">Campus immersion</p>
            <h3 className="h3 mt-4">2-3 days at FITT, IIT Delhi</h3>
            <ul className="mt-6 space-y-3 text-slate">
              <CheckItem>Dates: to be announced</CheckItem>
              <CheckItem>Meals included; travel and lodging not included</CheckItem>
              <CheckItem>Physical certificate handed over here</CheckItem>
            </ul>
          </Card>
          <Card className="md:p-10">
            <p className="eyebrow">Certificate</p>
            <h3 className="h3 mt-4">Co-branded certificate</h3>
            <ul className="mt-6 space-y-3 text-slate">
              <CheckItem>Minimum 70% attendance and 40% cumulative evaluation score</CheckItem>
              <CheckItem>Physical copy at immersion; encrypted digital copy verifiable online</CheckItem>
            </ul>
            <p className="mt-6 text-small text-slate">The certificate confirms completion. It does not assess or guarantee the success of a venture.</p>
          </Card>
        </div>
      </Section>

      {/* After */}
      <Section tint>
        <SectionHeader eyebrow="After the program" title="What can follow, for selected ventures." />
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {after.map(([t, d], i) => (
            <li key={t} className="border-t-2 border-navy pt-5">
              <p className="font-serif text-small text-slate">0{i + 1}</p>
              <p className="h4 mt-2 font-serif text-navy">{t}</p>
              <p className="mt-2 text-[16px] leading-6 text-slate">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex gap-4 rounded-lg border border-saffron/50 bg-saffron/10 p-6">
          <AlertCircle className="h-6 w-6 shrink-0 text-navy" strokeWidth={1.5} />
          <p className="font-medium text-navy">These opportunities are selective and subject to evaluation, availability and FITT arrangements. No incubation, investor access or funding is guaranteed.</p>
        </div>
      </Section>

      {/* Details */}
      <Section white>
        <SectionHeader title="Program details." />
        <dl className="mt-10 grid border-t md:grid-cols-2 md:gap-x-12">
          {[["Duration", "12 weeks"], ["Weekly time", "About 10 hours (about 6 live, about 4 self-paced and venture work)"], ["Format", "Online + campus immersion"], ["Indicative fee", "Rs 75,000 to 1,50,000 [final fee to be confirmed]"], ["Registration fee", "5% of program fee"], ["Payment", "Cards and card EMI, subject to final arrangements"], ["Technical background", "Not required"]].map(([k, v]) => (
            <div key={k} className="grid grid-cols-5 gap-4 border-b py-4">
              <dt className="col-span-2 text-small font-semibold uppercase tracking-wider text-slate">{k}</dt>
              <dd className="col-span-3 text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHeader title="Faculty." />
        <div className="mt-10"><PeopleGrid /></div>
      </Section>

      <Section tint>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeader eyebrow="FAQ" title="Before you apply." /></div>
          <div className="lg:col-span-8"><Accordion items={faq.map(([q, a]) => ({ q, a, key: q }))} /></div>
        </div>
      </Section>

      <CtaBand title="Ready to apply?" primary={["Apply Now", "/contact"]} secondary={["Download brochure", "#"]} />

      <Section id="apply" white>
        <SectionHeader title="Take the next step." sub="Apply to Experience to Enterprise. We'll follow up with a counselling call." />
        <div className="mt-10 max-w-3xl"><ApplyForm /></div>
      </Section>
    </>
  );
}
