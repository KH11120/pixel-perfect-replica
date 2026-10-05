import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { ApplyForm, EnquiryForm } from "@/components/ApplyForm";
import { Card, Step, buttonClass } from "@/components/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact and apply — Kaushal Hub" },
      { name: "description", content: "Apply to Experience to Enterprise, or send Kaushal Hub an enquiry or partnership request." },
      { property: "og:title", content: "Contact and apply — Kaushal Hub" },
      { property: "og:description", content: "Apply, enquire or partner with Kaushal Hub." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [tab, setTab] = useState<"apply" | "enquiry">("apply");
  return (
    <section className="section-pad">
      <div className="container-site">
        <h1 className="h1">Contact and apply</h1>
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div role="tablist" className="grid grid-cols-2 rounded-md border bg-card p-1">
              {([["apply", "Apply to Experience to Enterprise"], ["enquiry", "Enquiry or partnership"]] as const).map(([k, l]) => (
                <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={cn("rounded-[6px] px-3 py-3 text-small font-semibold transition-colors", tab === k ? "bg-navy text-primary-foreground" : "text-navy hover:bg-tint")}>{l}</button>
              ))}
            </div>
            <div className="mt-6 rounded-lg border bg-card p-6 md:p-8">
              {tab === "apply" ? (<><h2 className="h3">Take the next step.</h2><div className="mt-6"><ApplyForm /></div></>) : (<><h2 className="h3">Send us an enquiry.</h2><div className="mt-6"><EnquiryForm /></div></>)}
            </div>
          </div>
          <div className="space-y-6 lg:col-span-5">
            <Card>
              <h3 className="h4">Contact</h3>
              <ul className="mt-4 space-y-3 text-slate">
                <li className="flex gap-3"><Mail className="mt-1 h-5 w-5 shrink-0 text-navy" strokeWidth={1.5} />[PLACEHOLDER email]</li>
                <li className="flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-navy" strokeWidth={1.5} />[PLACEHOLDER phone]</li>
                <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-navy" strokeWidth={1.5} />[PLACEHOLDER address]</li>
              </ul>
              <a href="#" className={buttonClass("secondary", "mt-6 w-full")}>Book a counselling call</a>
            </Card>
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
