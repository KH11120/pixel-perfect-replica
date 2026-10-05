import { useState } from "react";
import { Field, buttonClass } from "@/components/site";

export function ApplyForm() {
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className="rounded-lg border bg-card p-8">
      <h3 className="h3">Thank you. Application received.</h3>
      <p className="mt-3 text-slate">Our team will review it and contact you to schedule a counselling call.</p>
    </div>
  );
  return (
    <form className="grid gap-5 rounded-lg border bg-card p-6 shadow-soft md:grid-cols-2 md:p-8" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <Field label="Full name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" required />
      <Field label="Years of experience" name="years" type="number" required />
      <div className="md:col-span-2"><Field label="Current role and company" name="role" required /></div>
      <div className="md:col-span-2"><Field label="Program" name="program" as="select" options={["Experience to Enterprise"]} /></div>
      <div className="md:col-span-2"><Field label="What are you hoping to build?" name="goal" as="textarea" /></div>
      <label className="flex gap-3 text-small text-slate md:col-span-2">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-navy" />
        I agree to be contacted by Kaushal Hub about my application, and accept the Privacy Policy.
      </label>
      <div className="md:col-span-2"><button className={buttonClass("primary", "w-full md:w-auto")}>Submit application</button></div>
    </form>
  );
}
