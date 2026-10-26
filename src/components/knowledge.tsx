import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import { ButtonLink, Section, SectionHeader } from "@/components/site";
import { getPublishedResources, resourceCategories, type Resource } from "@/lib/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  const category = resourceCategories.find(item => item.id === resource.category);
  return <article className="flex flex-col border-t py-6">
    <p className="eyebrow">{category?.title} · {resource.readingTime}</p>
    <h3 className="h4 mt-4"><Link to="/resources/$slug" params={{ slug: resource.slug }}>{resource.title}</Link></h3>
    <p className="mt-3 flex-1 text-slate">{resource.summary}</p>
    <Link to="/resources/$slug" params={{ slug: resource.slug }} className="mt-5 inline-flex items-center gap-2 text-small font-semibold text-navy">Read Article <ArrowRight className="h-4 w-4" /></Link>
  </article>;
}

export function KnowledgePreview() {
  const published = getPublishedResources().slice(0, 6);
  return <Section white>
    <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
      <SectionHeader eyebrow="The Kaushal Hub Knowledge Library" title="Good questions deserve useful answers." sub="Explore practical guides, articles and resources that help you understand a problem, test an idea and make better decisions." />
      <BookOpen className="h-12 w-12 shrink-0 text-navy" strokeWidth={1} aria-hidden="true" />
    </div>
    {published.length > 0 ? <div className="mt-10 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">{published.map(resource => <ResourceCard key={resource.slug} resource={resource} />)}</div> : <p className="mt-8 text-small text-slate">The first resources are being prepared.</p>}
    <div className="mt-8"><ButtonLink to="/resources" variant="text">Explore the Library</ButtonLink></div>
  </Section>;
}

export function ResourceArticle({ resource }: { resource: Resource }) {
  const related = getPublishedResources().filter(item => resource.relatedSlugs.includes(item.slug));
  return <>
    <Section>
      <div className="mx-auto max-w-3xl">
        <ButtonLink to="/resources" variant="text">Knowledge Library</ButtonLink>
        <p className="eyebrow mt-10">{resource.type}</p>
        <h1 className="h1 mt-4">{resource.title}</h1>
        <p className="mt-6 text-slate">{resource.introduction}</p>
        {(resource.author || resource.publishedAt) && <p className="mt-5 text-small text-slate">{resource.author}{resource.publishedAt && <> · Published <time dateTime={resource.publishedAt}>{resource.publishedAt}</time></>}{resource.updatedAt && <> · Updated <time dateTime={resource.updatedAt}>{resource.updatedAt}</time></>}</p>}
      </div>
    </Section>
    <Section white>
      <article className="mx-auto max-w-3xl space-y-12">
        {resource.sections.map(section => <section key={section.heading}><h2 className="h3">{section.heading}</h2><div className="mt-5 space-y-5 text-slate">{section.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{section.example && <aside className="border-l-2 border-navy pl-5">{section.example}</aside>}</div></section>)}
        <section><h2 className="h3">Next steps</h2><ul className="mt-5 list-disc space-y-3 pl-5 text-slate">{resource.nextSteps.map(step => <li key={step}>{step}</li>)}</ul></section>
        {resource.assetUrl && <a href={resource.assetUrl} className="inline-flex items-center gap-2 font-semibold text-navy" target="_blank" rel="noopener noreferrer">Open {resource.type.toLowerCase()} <ArrowRight className="h-4 w-4" /></a>}
        {resource.programLink && <ButtonLink to="/experience-to-enterprise" variant="text">Explore Experience to Enterprise</ButtonLink>}
      </article>
    </Section>
    {related.length > 0 && <Section><SectionHeader title="Related resources" /><div className="mt-8 grid gap-8 md:grid-cols-2">{related.map(item => <ResourceCard key={item.slug} resource={item} />)}</div></Section>}
  </>;
}