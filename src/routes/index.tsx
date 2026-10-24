import { createFileRoute } from "@tanstack/react-router";
import { Handshake } from "lucide-react";
import workshop from "@/assets/workshop.jpg";
import { BrochureLink, ButtonLink, Card, DevPrograms, Section, SectionHeader, SiteCta, Tag, VisionMission } from "@/components/site";
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
                <Tag>Featured program</Tag>
              </div>
              <h2 className="h3 mt-6">Experience to Enterprise</h2>
              <p className="h4 mt-2 font-serif text-navy">Test the leap before you take it.</p>
              <p className="mt-3 text-[16px] leading-6 text-slate">A 12-week venture-building program for experienced professionals exploring entrepreneurship.</p>
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t pt-6">
                <span className="text-small text-slate">In association with FITT, IIT Delhi</span>
              </div>
              <p className="mt-4 text-small font-medium text-navy">12 weeks · Online + campus immersion</p>
              <div className="mt-6"><ButtonLink to="/experience-to-enterprise" variant="text">View Program</ButtonLink></div>
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
        <div className="grid overflow-hidden rounded-xl border bg-card lg:grid-cols-2">
          <img src={workshop} alt="Professionals working through a problem together" width={1280} height={960} loading="lazy" className="h-64 w-full object-cover lg:h-full" />
          <div className="p-6 md:p-12">
            <p className="eyebrow">Featured program</p>
            <h2 className="h2 mt-4">Experience to Enterprise</h2>
            <p className="h4 mt-2 font-serif text-navy">Test the leap before you take it.</p>
            <p className="mt-4 text-slate">A 12-week venture-building program for experienced professionals who want to test a business opportunity, engage real customers and build a credible plan before making their next move.</p>
            <p className="mt-6 text-small font-medium text-navy">In association with FITT, IIT Delhi</p>
            <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-md border bg-border">
              {facts.map((f) => <li key={f} className="bg-card p-4 text-small font-medium text-navy">{f}</li>)}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/experience-to-enterprise">Explore the Program</ButtonLink>
              <BrochureLink />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Programs & Learning Initiatives" sub="Explore practical learning programs and initiatives designed for different stages of learning, capability-building and professional growth." />
        <div className="mt-10 grid gap-6 md:grid-cols-3"><DevPrograms /></div>
        <div className="mt-8"><ButtonLink to="/programs" variant="text">Explore All Programs</ButtonLink></div>
      </Section>

      <Section>
        <SectionHeader eyebrow="From learning to application" title="Knowledge should help you take the next step." sub="We bring practical learning and relevant expertise closer to the decisions, challenges and opportunities people face in the real world." />
        <ol className="mt-12 grid gap-8 border-t pt-10 md:grid-cols-3">
          {[["Learn", "Access useful knowledge and practical learning."], ["Apply", "Use what you learn to work through real questions and challenges."], ["Move Forward", "Make more informed decisions and pursue meaningful opportunities."]].map(([t, d], i) => (
            <li key={t}>
              <p className="font-serif text-small text-slate">0{i + 1}</p>
              <p className="h4 mt-2 font-serif text-navy">{t}</p>
              <p className="mt-2 text-slate">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <KnowledgePreview />

      <section className="section-pad bg-navy">
        <div className="container-site max-w-3xl">
          <SectionHeader light eyebrow="Community" title="People, expertise and opportunity, connected." sub="Kaushal Hub is building a community where learners, practitioners and experts can share knowledge and learn from one another." />
        </div>
      </section>

      <VisionMission />

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
