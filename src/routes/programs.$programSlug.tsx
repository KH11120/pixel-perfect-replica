import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProgramDetail } from "@/components/program-detail";
import { ButtonLink, Section } from "@/components/site";
import { canonicalLinks } from "@/lib/resources";
import { findProgram } from "@/lib/programs";

export const Route = createFileRoute("/programs/$programSlug")({
  loader: ({ params }) => {
    const program = findProgram(params.programSlug);
    if (!program) throw notFound();
    return program;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Kaushal Hub` },
          { name: "description", content: loaderData.seoDescription },
          { property: "og:title", content: `${loaderData.title} | Kaushal Hub` },
          { property: "og:description", content: loaderData.seoDescription },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [
          { title: "Program unavailable | Kaushal Hub" },
          { name: "description", content: "This program page is not available." },
          { name: "robots", content: "noindex, nofollow" },
        ],
    links: loaderData ? canonicalLinks(loaderData.path) : [],
  }),
  component: ProgramPage,
  notFoundComponent: UnavailableProgram,
});

function ProgramPage() {
  return <ProgramDetail program={Route.useLoaderData()} />;
}

function UnavailableProgram() {
  return (
    <Section>
      <h1 className="h2">Program unavailable</h1>
      <p className="mt-4 text-slate">This program page is not available.</p>
      <div className="mt-8">
        <ButtonLink to="/programs">Back to all programs</ButtonLink>
      </div>
    </Section>
  );
}
