import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/site";
import { ResourceCard } from "@/components/knowledge";
import { canonicalLinks, getPublishedResources, resourceCategories, type ResourceCategory } from "@/lib/resources";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources/")({
  head: () => ({ meta: [
    { title: "Knowledge Library | Practical Business Resources — Kaushal Hub" },
    { name: "description", content: "Practical guides, clear explanations and useful frameworks to help you understand entrepreneurship, test ideas and make better business decisions." },
    { property: "og:title", content: "The Kaushal Hub Knowledge Library" },
    { property: "og:description", content: "Good questions deserve useful answers. Explore practical business knowledge from Kaushal Hub." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: canonicalLinks("/resources") }),
  component: KnowledgeLibrary,
});

function KnowledgeLibrary() {
  const published = getPublishedResources();
  const [filter, setFilter] = useState<ResourceCategory | "all">("all");
  const visible = filter === "all" ? published : published.filter(resource => resource.category === filter);
  return <>
    <Section>
      <p className="eyebrow">The Kaushal Hub Knowledge Library</p>
      <h1 className="h1 mt-5 max-w-3xl">Good questions deserve useful answers.</h1>
      <p className="mt-6 max-w-3xl text-slate">Practical guides, clear explanations and useful frameworks to help you understand entrepreneurship, test ideas and make better business decisions.</p>
      <p className="mt-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-small font-medium text-navy">Free to explore. Built to be useful.</p>
    </Section>
    <Section white>
      <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
        <button onClick={() => setFilter("all")} aria-pressed={filter === "all"} className={cn("rounded-full border px-4 py-2 text-small font-medium transition-colors", filter === "all" ? "bg-navy text-primary-foreground" : "bg-card text-navy hover:bg-tint")}>All topics</button>
        {resourceCategories.map(category => (
          <button key={category.id} onClick={() => setFilter(category.id)} aria-pressed={filter === category.id} className={cn("rounded-full border px-4 py-2 text-small font-medium transition-colors", filter === category.id ? "bg-navy text-primary-foreground" : "bg-card text-navy hover:bg-tint")}>{category.title}</button>
        ))}
      </div>
      {visible.length > 0 ? (
        <div className="mt-10 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">{visible.map(resource => <ResourceCard key={resource.slug} resource={resource} />)}</div>
      ) : (
        <p className="mt-10 border-t pt-8 text-slate">No resources in this topic yet. New articles and guides are added as they are ready.</p>
      )}
      <div className="mt-16 space-y-10 border-t pt-12">
        {resourceCategories.map(category => (
          <div key={category.id}>
            <h2 className="h4 font-serif text-navy">{category.title}</h2>
            <p className="mt-2 max-w-2xl text-small text-slate">{category.description}</p>
          </div>
        ))}
      </div>
    </Section>
  </>;
}
