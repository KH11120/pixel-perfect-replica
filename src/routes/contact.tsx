import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ApplyForm, CommunityForm, EnquiryForm, InterestForm } from "@/components/ApplyForm";
import { Card, Step, SiteButton } from "@/components/site";
import { canonicalLinks } from "@/lib/resources";
import { cn } from "@/lib/utils";

type Tab = "apply" | "interest" | "enquiry";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { interest?: string } => {
    const interest = search["interest"];
    return typeof interest === "string" ? { interest } : {};
  },
  head: () => ({
    meta: [
      { title: "Contact and apply — Kaushal Hub" },
      { name: "description", content: "Apply to Experience to Enterprise, register interest in a planned program, join the community, or send Kaushal Hub an enquiry." },
      { property: "og:title", content: "Contact and apply — Kaushal Hub" },
      { property: "og:description", content: "Apply, register interest, join the community or partner with Kaushal Hub." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonicalLinks("/contact"),
  }),
  component: Contact,
});

const interestLabels: Record<string, string> = {
  school: "Entrepreneurship for School Students",
  undergraduate: "Entrepreneurship for Undergraduate Students",
  ai: "AI & Future Skills",
};

function Contact() {
  const { interest } = Route.useSearch();
  const initial: Tab = interest === "community" || interestLabels[interest ?? ""] ? "interest" : "apply";
  const [tab, setTab] = useState<Tab>(initial);
  const isCommunity = interest === "community";
  return (
    <section className="section-pad">
      <div className="container-site">
        <h1 className="h1">Contact and apply</h1>
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div role="tablist" className="grid grid-cols-3 rounded-md border bg-card p-1">
              {([["apply", "Apply to Experience to Enterprise"], ["interest", "Register interest"], ["enquiry", "Enquiry or partnership"]] as const).map(([k, l]) => (
                <SiteButton variant="text" key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={cn("h-auto min-h-12 rounded-md px-3 py-3 text-small font-semibold transition-colors", tab === k ? "bg-navy text-primary-foreground" : "text-navy hover:bg-tint")}>{l}</SiteButton>
              ))}
            </div>
            <div className="mt-6 rounded-lg border bg-card p-6 md:p-8">
              {tab === "apply" && (<><h2 className="h3">Take the next step.</h2><div className="mt-6"><ApplyForm /></div></>)}
              {tab === "interest" && (isCommunity ? (
                <><h2 className="h3">Join the Kaushal Hub Community</h2><p className="mt-3 text-slate">Tell us a little about your interests. We'll use this information to understand how you would like to participate and share relevant opportunities.</p><div className="mt-6"><CommunityForm /></div></>
              ) : (
                <><h2 className="h3">Register your interest.</h2><p className="mt-3 text-slate">Planned programs are not open for admission yet. Register your interest and we'll contact you when details are confirmed.</p><div className="mt-6"><InterestForm program={interestLabels[interest ?? ""]} /></div></>
              ))}
              {tab === "enquiry" && (<><h2 className="h3">Send us an enquiry.</h2><div className="mt-6"><EnquiryForm /></div></>)}
            </div>
          </div>
          <div className="space-y-6 lg:col-span-5">
            <Card>
              <h3 className="h4">What happens next</h3>
              <div className="mt-6 space-y-6">
                <Step n={1} title="We review" text="Our team reads your application." />
                <Step n={2} title="Counselling call" text="A conversation to check fit and answer questions." />
                <Step n={3} title="Admission and registration fee" text="Confirm your seat with the registration fee." />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
