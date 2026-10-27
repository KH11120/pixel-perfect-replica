import { createFileRoute } from "@tanstack/react-router";
import { Handshake } from "lucide-react";
import workshop from "@/assets/workshop.jpg";
import { ButtonLink, Card, Section, SectionHeader, SiteCta } from "@/components/site";
import { KnowledgePreview } from "@/components/knowledge";
import { canonicalLinks } from "@/lib/resources";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaushal Hub | Practical Learning, Knowledge & Opportunity" },
      { name: "description", content: "Explore practical learning programs, expert knowledge and opportunities to turn knowledge into action with Kaushal Hub." },
      { property: "og:title", content: "Kaushal Hub | Practical Learning, Knowledge & Opportunity" },
      { property: "og:description", content: "Explore practical learning programs, expert knowledge and opportunities to turn knowledge into action with Kaushal Hub." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonicalLinks("/"),
  }),
  component: Home,
});

const facts = ["12 weeks", "~10 hours per week", "Online + campus immersion", "Co-branded certificate"];

const additionalPrograms = [
  {
    status: "Upcoming program",
    title: "Entrepreneurship for School Students",
    metadata: [{ label: "Eligibility", value: "Class 12 students" }],
    description: "An introduction to identifying problems, developing ideas and understanding how ventures are built.",
    interest: "school",
  },
  {
    status: "Upcoming program",
    title: "Entrepreneurship for Undergraduate Students",
    metadata: [{ label: "Eligibility", value: "Undergraduate students" }],
    description: "A practical introduction to identifying opportunities, testing ideas and exploring the process of building a venture.",
    interest: "undergraduate",
  },
  {
    status: "Upcoming program",
    title: "Generative AI in Action with Microsoft Intelligent Tools",
    metadata: [
      { label: "Format", value: "One-day, hands-on program" },
      { label: "Location", value: "IIT Delhi" },
    ],
    description: "Learn from Microsoft experts to understand, build and responsibly use Generative AI with real-world tools.",
    interest: "genai",
  },
] as const;

function HomeVisionMission() {
  return (
    <Section white>
      <div className="mx-auto max-w-6xl text-center">
        <p className="eyebrow">OUR VISION &amp; MISSION</p>
        <div className="mt-8">
          <p className="eyebrow !text-navy">VISION</p>
          <h2 className="mx-auto mt-3 max-w-4xl font-serif text-[32px] leading-10 text-navy md:text-[40px] md:leading-[48px]">
            A world where useful knowledge leads to meaningful action.
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <p className="eyebrow !text-navy">MISSION</p>
          <p className="mt-3 text-[18px] leading-7 text-slate">
            To make practical knowledge accessible, connect learning with real-world application, and create pathways for people to develop their capabilities and act on new opportunities.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Home() {
  return (
    <>
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Practical learning. Real-world application.</p>
            <h1 className="h1 mt-5">Practical learning for people ready to build what's next.</h1>
            <p className="mt-6 max-w-xl text-slate">Kaushal Hub brings together practical programs, useful knowledge and opportunities to turn what you know into what you can do.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/programs">Explore Programs</ButtonLink>
              <ButtonLink to="/about" variant="secondary">About Kaushal Hub</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Card>
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow">Featured program</p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-small font-medium text-green-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" aria-hidden="true" />
                  ENROLLING NOW
                </span>
              </div>
              <h2 className="h3 mt-6">Experience to Enterprise</h2>
              <p className="h4 mt-2 font-serif text-navy">Test the leap before you take it.</p>
              <p className="mt-3 text-[16px] leading-6 text-slate">A 12-week venture-building program for experienced professionals exploring entrepreneurship.</p>
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t pt-6">
                <span className="text-small text-slate">In association with FITT, IIT Delhi</span>
              </div>
              <p className="mt-4 text-small font-medium text-navy">12 weeks · Online + campus immersion</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/experience-to-enterprise" hash="application">Apply Now</ButtonLink>
                <ButtonLink to="/experience-to-enterprise" variant="secondary">
                  View Program
                </ButtonLink>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Section white>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">About Kaushal Hub</p>
            <h2 className="h2 mt-4">Knowledge is the beginning. Application is the point.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-serif text-[22px] leading-8 text-ink md:text-[26px] md:leading-9">Kaushal Hub brings together practical learning, expert knowledge and opportunities to put ideas into action.</p>
            <div className="mt-10 border-l-2 border-saffron pl-6">
              <p lang="hi" className="font-serif text-[30px] leading-10 text-navy md:text-[38px] md:leading-[48px]">कौशल से कुशल भारत</p>
              <p className="mt-2 text-small text-slate">From individual capability to a more capable India.</p>
            </div>
            <div className="mt-8"><ButtonLink to="/about" variant="text">Discover Kaushal Hub</ButtonLink></div>
          </div>
        </div>
      </Section>

      <Section tint>
        <div className="mb-10 md:mb-12">
          <p className="eyebrow">Explore our offerings</p>
          <h2 className="h2 mt-4">Find the right program for your next step.</h2>
          <p className="mt-4 max-w-none text-slate">From entrepreneurship to applied AI, explore practical programs designed for different stages of learning and building.</p>
        </div>
        <div className="grid overflow-hidden rounded-xl border bg-card lg:grid-cols-2">
          <img src={workshop} alt="Professionals working through a problem together" width={1280} height={960} loading="lazy" className="h-64 w-full object-cover lg:h-full" />
          <div className="p-6 md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 min-[360px]:flex-nowrap">
              <p className="eyebrow whitespace-nowrap !text-[11px] !tracking-[0.1em] sm:!text-[13px] sm:!tracking-[0.14em]">Featured program</p>
              <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-green-200 bg-green-50 px-2 py-1 text-[11px] leading-4 font-medium text-green-700 sm:px-3 sm:py-1.5 sm:text-small sm:leading-5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-600" aria-hidden="true" />
                ENROLLING NOW
              </span>
            </div>
            <h2 className="h2 mt-4">Experience to Enterprise</h2>
            <p className="h4 mt-2 font-serif text-navy">Test the leap before you take it.</p>
            <p className="mt-4 text-slate">A 12-week venture-building program for experienced professionals who want to test a business opportunity, engage real customers and build a credible plan before making their next move.</p>
            <p className="mt-6 text-small font-medium text-navy">In association with FITT, IIT Delhi</p>
            <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-border">
              {facts.map((f) => <li key={f} className="bg-card p-4 text-small font-medium text-navy">{f}</li>)}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/experience-to-enterprise" hash="application">Apply Now</ButtonLink>
              <ButtonLink to="/experience-to-enterprise" variant="secondary">
                View Program
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="h3">More Ways to Learn and Build</h3>
          <p className="mt-3 max-w-2xl text-slate">
            Explore upcoming programs designed for different stages of learning and professional growth.
          </p>
          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {additionalPrograms.map((program) => (
              <article key={program.title} className="flex h-full min-w-0 flex-col rounded-lg border bg-card p-6">
                <span className="inline-flex w-fit rounded-sm bg-tint px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">{program.status}</span>
                <h4 className="h4 mt-4 break-words font-serif text-navy">{program.title}</h4>
                <div className="mt-4 space-y-1 text-small text-slate">
                  {program.metadata.map((item) => (
                    <p key={item.label}><span className="font-semibold text-ink">{item.label}:</span> {item.value}</p>
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-6 text-slate">{program.description}</p>
                <div className="mt-6">
                  <ButtonLink to="/contact" search={{ interest: program.interest }} variant="text">Register Interest</ButtonLink>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8"><ButtonLink to="/programs" variant="text">Explore All Programs</ButtonLink></div>
        </div>
      </Section>

      <KnowledgePreview />

      <section id="community" className="section-pad scroll-mt-20 bg-navy">
        <div className="container-site">
          <div className="max-w-none">
            <p className="eyebrow !text-saffron">The Kaushal Hub Community</p>
            <h2 className="h2 mt-4 !text-primary-foreground">Learning gets stronger when knowledge is shared.</h2>
            <p className="mt-4 max-w-none text-primary-foreground/75">Connect with people who are learning, building, sharing expertise and exploring new opportunities. Join the Kaushal Hub community to hear about resources, learning initiatives and ways to participate.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact" search={{ interest: "community" }}>Join the Community</ButtonLink>
            <ButtonLink to="/resources" variant="inverse">Explore the Knowledge Library</ButtonLink>
          </div>
        </div>
      </section>

      <HomeVisionMission />

      <SiteCta />

      <Section tint className="!py-10 md:!py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-5">
            <Handshake className="h-7 w-7 shrink-0 text-navy" strokeWidth={1.5} />
            <div>
              <p className="eyebrow">Partner with Kaushal Hub</p>
              <h2 className="h4 mt-2 font-serif text-navy">Have expertise or an opportunity to share?</h2>
              <p className="mt-2 max-w-2xl text-slate">Connect with us to explore relevant learning, knowledge-sharing and collaboration opportunities.</p>
            </div>
          </div>
          <ButtonLink to="/contact" variant="text">Partner with Us</ButtonLink>
        </div>
      </Section>
    </>
  );
}
