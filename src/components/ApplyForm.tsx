import { useState } from "react";
import { Field, buttonClass } from "@/components/site";

function Done({ title, text }: { title: string; text: string }) {
  return <div className="rounded-lg border bg-card p-8"><h3 className="h3">{title}</h3><p className="mt-3 text-slate">{text}</p></div>;
}

export function ApplyForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <Done title="Thank you. Application received." text="Our team will review it and contact you to schedule a counselling call." />;
  return (
    <form className="grid gap-5 md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Years of professional experience" name="years" type="number" required />
      <Field label="Current role" name="role" required />
      <Field label="Organisation" name="org" required />
      <div className="md:col-span-2"><Field label="What interests you about the program?" name="interest" as="textarea" /></div>
      <Field label="Do you currently have an entrepreneurial idea?" name="idea" as="select" options={["Yes", "Exploring", "No"]} required />
      <Field label="How did you hear about us?" name="source" />
      <div className="md:col-span-2">
        <button className={buttonClass("primary", "w-full md:w-auto")}>Submit application</button>
        <p className="mt-4 text-small text-slate">Admission and associated opportunities are subject to eligibility and selection criteria.</p>
      </div>
    </form>
  );
}

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <Done title="Thank you. Enquiry received." text="We'll get back to you by email." />;
  return (
    <form className="grid gap-5 md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Organisation" name="org" />
      <Field label="I am interested in" name="topic" as="select" required options={["Program enquiry", "Community", "Partnership", "Expert or faculty", "General enquiry"]} />
      <div className="md:col-span-2"><Field label="Message" name="message" as="textarea" required /></div>
      <div className="md:col-span-2"><button className={buttonClass("primary", "w-full md:w-auto")}>Submit enquiry</button></div>
    </form>
  );
}
