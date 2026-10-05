import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ChevronDown, Menu, X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------- Button ---------- */
type Variant = "primary" | "secondary" | "inverse" | "text";
const btn: Record<Variant, string> = {
  primary: "h-12 px-6 rounded-full bg-saffron text-navy font-semibold hover:brightness-95",
  secondary: "h-12 px-6 rounded-full border border-navy text-navy font-semibold hover:bg-navy hover:text-primary-foreground",
  inverse: "h-12 px-6 rounded-full border border-primary-foreground/60 text-primary-foreground font-semibold hover:bg-primary-foreground/10",
  text: "text-navy font-semibold underline underline-offset-4 hover:text-ink",
};
export function buttonClass(v: Variant = "primary", extra?: string) {
  return cn("inline-flex items-center justify-center gap-2 text-[16px] transition-colors", btn[v], extra);
}
export function ButtonLink({ to, hash, variant = "primary", children, className }: { to: string; hash?: string; variant?: Variant; children: ReactNode; className?: string }) {
  return <Link to={to} hash={hash} className={buttonClass(variant, className)}>{children}</Link>;
}

/* ---------- Logos ---------- */
export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className={cn("grid h-8 w-8 place-items-center rounded-md font-serif text-[18px]", light ? "bg-primary-foreground text-navy" : "bg-navy text-primary-foreground")}>K</span>
      <span className={cn("font-serif text-[20px] font-medium", light ? "text-primary-foreground" : "text-navy")}>Kaushal Hub</span>
    </Link>
  );
}
export function LogoMark({ label, small }: { label: string; small?: boolean }) {
  return (
    <span className={cn("inline-flex items-center justify-center rounded-md border border-dashed border-slate/40 bg-card font-semibold tracking-wide text-slate", small ? "h-6 px-2 text-[11px]" : "h-14 px-6 text-small")}>
      {label}
    </span>
  );
}
export function FittPill() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border bg-card py-1.5 pl-2 pr-4 shadow-soft">
      <LogoMark label="FITT" small /><LogoMark label="IIT Delhi" small />
      <span className="text-small font-medium text-navy">In association with FITT, IIT Delhi</span>
    </div>
  );
}

/* ---------- Navbar ---------- */
const links = [
  { to: "/programs", label: "Programs" },
  { to: "/about", label: "About" },
  { to: "/experience-to-enterprise", label: "Experience to Enterprise" },
  { to: "/contact", label: "Contact" },
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-[15px] text-ink hover:text-navy" activeProps={{ className: "font-semibold text-navy" }}>{l.label}</Link>
          ))}
        </nav>
        <div className="hidden lg:block"><ButtonLink to="/contact">Apply Now</ButtonLink></div>
        <button className="p-2 text-navy lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t bg-background lg:hidden">
          <div className="container-site flex flex-col py-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="border-b py-4 text-navy last:border-0">{l.label}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function StickyApply() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/95 p-3 backdrop-blur md:hidden">
      <ButtonLink to="/contact" className="w-full">Apply Now</ButtonLink>
    </div>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  const col = (title: string, items: [string, string][]) => (
    <div>
      <p className="eyebrow !text-primary-foreground/60">{title}</p>
      <ul className="mt-4 space-y-2 text-[15px]">
        {items.map(([l, to]) => <li key={l}><Link to={to} className="text-primary-foreground/85 hover:text-primary-foreground">{l}</Link></li>)}
      </ul>
    </div>
  );
  return (
    <footer className="bg-ink pb-24 pt-16 text-primary-foreground md:pb-12">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-4 font-serif text-[20px] text-primary-foreground/85">Experience, turned into enterprise.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {col("Programs", [["All programs", "/programs"], ["Experience to Enterprise", "/experience-to-enterprise"]])}
            {col("About", [["Our story", "/about"], ["Partners", "/about"]])}
            {col("Contact", [["Apply", "/contact"], ["Talk to our team", "/contact"]])}
          </div>
        </div>
        <div className="mt-12 space-y-3 border-t border-primary-foreground/15 pt-8 text-small text-primary-foreground/70">
          <p>Kaushal Hub is an initiative of SNN Eduworld Pvt. Ltd.</p>
          <p className="max-w-3xl">Incubation, investor connect and funding support are available only for ventures selected after evaluation and are subject to availability. No funding or investment is guaranteed.</p>
          <div className="flex flex-wrap gap-6 pt-2">
            <a href="#" className="underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="underline underline-offset-4">Terms</a>
            <span>© {new Date().getFullYear()} SNN Eduworld Pvt. Ltd.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Layout primitives ---------- */
export function Section({ children, tint, className, id }: { children: ReactNode; tint?: boolean; className?: string; id?: string }) {
  return <section id={id} className={cn("section-pad", tint ? "bg-tint" : "bg-background", className)}><div className="container-site">{children}</div></section>;
}
export function SectionHeader({ eyebrow, title, sub, center }: { eyebrow?: string; title: string; sub?: ReactNode; center?: boolean }) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="h2">{title}</h2>
      {sub && <p className="mt-4 text-slate">{sub}</p>}
    </div>
  );
}
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border bg-card p-6 shadow-soft md:p-8", className)}>{children}</div>;
}
export function FactTile({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-lg border bg-card p-5 md:p-6">
      <p className="eyebrow">{label}</p>
      <p className="mt-2 font-serif text-[20px] leading-7 text-navy">{value}</p>
      {note && <p className="mt-2 text-small text-slate">{note}</p>}
    </div>
  );
}
export function Tag({ children, tone = "tint" }: { children: ReactNode; tone?: "tint" | "saffron" }) {
  return <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-small font-medium", tone === "tint" ? "bg-tint text-navy" : "bg-saffron/15 text-navy")}>{children}</span>;
}
export function CheckItem({ children }: { children: ReactNode }) {
  return <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-saffron" strokeWidth={2.5} /><span>{children}</span></li>;
}

/* ---------- Accordion ---------- */
export function Accordion({ items }: { items: { q: string; a: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y rounded-lg border bg-card">
      {items.map((it, i) => (
        <div key={it.q}>
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6" aria-expanded={open === i}>
            <span className="h4 font-serif text-navy">{it.q}</span>
            <ChevronDown className={cn("h-5 w-5 shrink-0 text-navy transition-transform", open === i && "rotate-180")} />
          </button>
          {open === i && <div className="px-5 pb-6 text-slate md:px-6">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}

/* ---------- Step ---------- */
export function Step({ n, title, text }: { n: number; title: string; text: string }) {
  return (
    <div>
      <span className="grid h-10 w-10 place-items-center rounded-full border border-navy font-serif text-navy">{n}</span>
      <p className="h4 mt-4 font-serif text-navy">{title}</p>
      <p className="mt-2 text-small text-slate">{text}</p>
    </div>
  );
}

/* ---------- Form field ---------- */
const inputCls = "mt-2 w-full rounded-md border bg-card px-4 py-3 text-[16px] text-ink outline-none focus:border-navy focus:ring-1 focus:ring-navy";
export function Field({ label, name, type = "text", required, as, options, placeholder }: { label: string; name: string; type?: string; required?: boolean; as?: "textarea" | "select"; options?: string[]; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-small font-medium text-ink">{label}{required && " *"}</span>
      {as === "textarea" ? <textarea name={name} required={required} rows={4} placeholder={placeholder} className={inputCls} />
        : as === "select" ? <select name={name} required={required} className={inputCls}>{options?.map((o) => <option key={o}>{o}</option>)}</select>
        : <input name={name} type={type} required={required} placeholder={placeholder} className={inputCls} />}
    </label>
  );
}

/* ---------- Shared blocks ---------- */
export function VisionMission() {
  return (
    <section className="section-pad bg-navy">
      <div className="container-site grid gap-6 md:grid-cols-2">
        {[["Vision", "A country where experience compounds into enterprise."], ["Mission", "To give experienced professionals a practical, low-risk, mentor-backed route to build ventures and careers on their own expertise."]].map(([t, d]) => (
          <div key={t} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-8 md:p-10">
            <p className="eyebrow !text-saffron">{t}</p>
            <p className="h3 mt-4 font-serif !text-primary-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export const audiences = ["Mid-career managers", "Domain specialists", "Consultants", "Senior individual contributors"];
export function AudienceChips() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {audiences.map((a) => <div key={a} className="rounded-lg border bg-card px-5 py-4 font-medium text-navy">{a}</div>)}
    </div>
  );
}
export function PeopleGrid({ n = 4, note }: { n?: number; note?: string }) {
  return (
    <>
      <div className={cn("grid grid-cols-2 gap-4 md:gap-6", n === 3 ? "md:grid-cols-3" : "md:grid-cols-4")}>
        {Array.from({ length: n }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg border bg-card">
            <div className="aspect-[4/5] bg-tint" />
            <div className="p-4">
              <p className="font-serif text-[18px] text-navy">Name [placeholder]</p>
              <p className="text-small text-slate">Role, Organisation</p>
            </div>
          </div>
        ))}
      </div>
      {note && <p className="mt-6 text-small text-slate">{note}</p>}
    </>
  );
}
export function CtaBand({ title = "Ready to build on what you know?" }: { title?: string }) {
  return (
    <section className="section-pad bg-navy">
      <div className="container-site flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <h2 className="h2 max-w-xl !text-primary-foreground">{title}</h2>
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/contact">Apply Now</ButtonLink>
          <a href="#" className={buttonClass("inverse")}>Download brochure</a>
        </div>
      </div>
    </section>
  );
}
