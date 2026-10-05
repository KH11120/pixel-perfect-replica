import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { ApplyForm } from "@/components/ApplyForm";
import { Card, Step, buttonClass } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Apply or talk to us — Kaushal Hub" },
      { name: "description", content: "Apply to Experience to Enterprise or book a counselling call with the Kaushal Hub team." },
      { property: "og:title", content: "Apply or talk to us — Kaushal Hub" },
      { property: "og:description", content: "Apply or book a counselling call." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <h1 className="h1">Apply or talk to us</h1>
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7"><ApplyForm /></div>
          <div className="space-y-6 lg:col-span-5">
            <Card>
              <h3 className="h4">Contact</h3>
              <ul className="mt-4 space-y-3 text-slate">
                <li className="flex gap-3"><Mail className="h-5 w-5 text-navy" strokeWidth={1.5} />hello@kaushalhub.in [placeholder]</li>
                <li className="flex gap-3"><Phone className="h-5 w-5 text-navy" strokeWidth={1.5} />+91 00000 00000 [placeholder]</li>
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-navy" strokeWidth={1.5} />Address [placeholder], New Delhi</li>
              </ul>
              <a href="#" className={buttonClass("secondary", "mt-6 w-full")}>Book a counselling call</a>
            </Card>
            <Card>
              <h3 className="h4">What happens next</h3>
              <div className="mt-6 space-y-6">
                <Step n={1} title="We review" text="Our team reads your application within a few working days." />
                <Step n={2} title="Counselling call" text="A short call to check fit and answer your questions." />
                <Step n={3} title="Admission" text="Confirm your seat with the registration fee." />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
