import { useState } from "react";
import { Linkedin, UserRound } from "lucide-react";
import { Section, SectionHeader } from "@/components/site";
import { cn } from "@/lib/utils";
import { publicAsset } from "@/lib/public-asset";
import type { FacultyMember } from "@/lib/faculty";

const gridByCount: Record<number, string> = {
  1: "max-w-xs",
  2: "max-w-3xl min-[480px]:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

export function FacultySection({
  faculty,
  tint,
  white,
}: {
  faculty: FacultyMember[];
  tint?: boolean;
  white?: boolean;
}) {
  if (faculty.length === 0) return null;

  return (
    <Section {...(tint ? { tint } : {})} {...(white ? { white } : {})}>
      <SectionHeader
        title="Meet Your Faculty"
        sub="Learn from experienced professionals and subject-matter experts who bring practical knowledge and real-world perspectives to the learning experience."
      />
      <ul
        className={cn(
          "mt-8 grid gap-5",
          gridByCount[faculty.length] ?? "min-[480px]:grid-cols-2 lg:grid-cols-4",
        )}
      >
        {faculty.map((member, index) => (
          <li key={`${member.name}-${index}`}>
            <FacultyCard member={member} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function FacultyCard({ member }: { member: FacultyMember }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = !!member.photo && !photoFailed;
  const role = [member.designation, member.organisation].filter(Boolean).join(", ");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border bg-card">
      <div className="relative aspect-[4/3] border-b bg-navy/5 sm:aspect-[4/5]">
        {showPhoto ? (
          <img
            src={publicAsset(member.photo!)}
            alt={`Portrait of ${member.name}`}
            loading="lazy"
            onError={() => setPhotoFailed(true)}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div
            className="grid h-full w-full place-items-center"
            role="img"
            aria-label="Faculty portrait placeholder"
          >
            <UserRound className="h-20 w-20 text-navy/25" strokeWidth={1.25} aria-hidden="true" />
          </div>
        )}
        <LinkedInBadge name={member.name} url={member.linkedinUrl} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="h4 font-serif text-navy">{member.name}</h3>
        {role && <p className="mt-1 text-small font-medium text-slate">{role}</p>}
        <p className="mt-3 text-[15px] leading-6 text-slate">{member.bio}</p>
      </div>
    </article>
  );
}

function LinkedInBadge({ name, url }: { name: string; url: string }) {
  const badge =
    "absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border bg-card text-navy shadow-sm";

  if (!url) {
    return (
      <span className={cn(badge, "opacity-60")} aria-hidden="true">
        <Linkedin className="h-4 w-4" />
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn (opens in a new tab)`}
      className={cn(badge, "transition-colors hover:bg-navy hover:text-primary-foreground")}
    >
      <Linkedin className="h-4 w-4" />
    </a>
  );
}
