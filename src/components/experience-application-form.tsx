import { useState } from "react";
import { Field, buttonClass } from "@/components/site";

export function ExperienceApplicationForm() {
  const [attempted, setAttempted] = useState(false);

  return (
    <form
      className="grid gap-5 md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        if (event.currentTarget.reportValidity()) setAttempted(true);
      }}
    >
      <div className="md:col-span-2">
        <h3 className="h3">Contact and Professional Background</h3>
        <p className="mt-2 text-small text-slate">
          Share the details needed to understand your professional context.
        </p>
      </div>

      <Field label="Full name" name="name" required />
      <Field label="Email address" name="email" type="email" required />
      <Field label="Phone number" name="phone" type="tel" required />
      <Field label="Current role" name="role" required />
      <Field
        label="Years of professional experience"
        name="years"
        as="select"
        options={[
          "Less than 3 years",
          "3–5 years",
          "6–10 years",
          "11–15 years",
          "16–20 years",
          "More than 20 years",
        ]}
        required
      />
      <Field label="Industry or area of expertise" name="industry" required />

      <div className="mt-4 md:col-span-2">
        <h3 className="h3">Motivation and Entrepreneurial Mindset</h3>
        <p className="mt-2 text-small text-slate">
          You can apply while you are still exploring and do not need a fully developed business
          idea.
        </p>
      </div>
      <div className="md:col-span-2">
        <Field
          label="What interests you about exploring entrepreneurship?"
          name="motivation"
          as="textarea"
          required
        />
      </div>
      <div className="md:col-span-2">
        <Field
          label="What business problem, opportunity or idea are you interested in investigating? (Optional)"
          name="opportunity"
          as="textarea"
        />
      </div>
      <div className="md:col-span-2">
        <Field
          label="What would you most like to gain from this program?"
          name="goals"
          as="textarea"
          required
        />
      </div>
      <div className="md:col-span-2">
        <Field
          label="How ready are you to explore a venture alongside your current professional commitments?"
          name="readiness"
          as="textarea"
          required
        />
      </div>

      <div className="md:col-span-2">
        <button type="submit" className={buttonClass("primary", "w-full md:w-auto")}>
          Submit Application
        </button>
        {attempted && (
          <p
            role="alert"
            className="mt-4 rounded-md border border-saffron/40 bg-saffron/10 p-4 text-small text-navy"
          >
            Your application has not been submitted. Online application processing is not connected,
            so this form cannot send or save your details yet.
          </p>
        )}
        <p className="mt-4 text-small text-slate">
          This application form does not take payment. Any subsequent program-registration and
          payment steps are separate.
        </p>
      </div>
    </form>
  );
}
