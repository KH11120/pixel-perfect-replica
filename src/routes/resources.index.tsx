import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site";
import { ResourceCard } from "@/components/knowledge";
import { canonicalLinks, getPublishedResources, resourceCategories } from "@/lib/resources";

export const Route = createFileRoute("/resources/")({
  head: () => ({ meta: [
    { title: "Knowledge Library | Practical Business Resources — Kaushal Hub" },
    { name: "description", content: "Practical, evidence-informed resources for understanding entrepreneurship, testing ideas and making better business decisions from Kaushal Hub." },
    { property: "og:title", content: "The Kaushal Hub Knowledge Library" },
    { property: "og:description", content: "Clear answers for people building something new. Explore practical business knowledge from Kaushal Hub." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: canonicalLinks("/resources") }),
  component: KnowledgeLibrary,
});

function KnowledgeLibrary() {
  const published = getPublishedResources();
  return <>
    <Section>
      <p className="eyebrow">The Kaushal Hub Knowledge Library</p>
      <h1 className="h1 mt-5 max-w-3xl">Clear answers for people building something new.</h1>
      <p className="mt-6 max-w-3xl text-slate">Practical, evidence-informed resources for understanding entrepreneurship, testing ideas and making better business decisions.</p>
      <nav aria-label="Library topics" className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {resourceCategories.map(category => <a key={category.id} href={`#${category.id}`} className="border-t py-4 text-small font-medium text-navy">{category.title} →</a>)}
      </nav>
    </Section>
    <Section white>
      {published.length === 0 && <p className="mb-12 border-b pb-6 text-slate">Our first resources are being prepared. No articles or downloads have been published yet.</p>}
      <div className="space-y-12">
        {resourceCategories.map(category => {
          const entries = published.filter(resource => resource.category === category.id);
          return <section key={category.id} id={category.id} className="scroll-mt-28 border-b pb-12 last:border-0 last:pb-0">
            <SectionHeader title={category.title} sub={category.description} />
            {entries.length > 0 && <div className="mt-8 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">{entries.map(resource => <ResourceCard key={resource.slug} resource={resource} />)}</div>}
          </section>;
        })}
      </div>
    </Section>
  </>;
}