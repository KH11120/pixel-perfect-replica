import { useState } from "react";
import { ArrowRight, Linkedin, UserRound } from "lucide-react";
import { Section, SectionHeader, SiteButton } from "@/components/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { publicAsset } from "@/lib/public-asset";
import type { FacultyMember } from "@/lib/faculty";

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
      {/* Flex-wrap keeps cards equal width and centres any incomplete last row. */}
      <ul className="mt-8 flex flex-wrap justify-center gap-5">
        {faculty.map((member) => (
          <li
            key={member.name}
            className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <FacultyCard member={member} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border bg-card">
      <FacultyPhoto
        member={member}
        className="aspect-[4/3] border-b sm:aspect-[4/5]"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="h4 font-serif text-navy">{member.name}</h3>
          <LinkedInButton member={member} />
        </div>
        <p className="mt-1 text-small font-medium text-slate">{member.designation}</p>
        <p className="mt-4 flex-1 border-t pt-4 text-[15px] leading-6 text-slate">
          {member.shortBio}
        </p>
        <FacultyDialog member={member} />
      </div>
    </article>
  );
}

function FacultyDialog({ member }: { member: FacultyMember }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SiteButton
          variant="text"
          className="mt-5 self-start"
          aria-label={`Read more about ${member.name}`}
        >
          Read More
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </SiteButton>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-2xl gap-0 overflow-y-auto bg-card p-0">
        <div className="grid gap-5 border-b p-5 pr-12 sm:grid-cols-[160px_1fr] sm:items-center sm:p-6 sm:pr-12">
          <FacultyPhoto
            member={member}
            className="aspect-square w-32 rounded-lg border sm:w-full"
          />
          <div>
            <DialogTitle className="font-serif text-[22px] font-medium leading-[30px] text-navy md:text-[28px] md:leading-9">
              {member.name}
            </DialogTitle>
            <DialogDescription className="mt-2 text-small font-medium text-slate">
              {member.designation}
            </DialogDescription>
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-small font-semibold text-navy hover:underline"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border bg-card">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </span>
              View LinkedIn Profile
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <h4 className="eyebrow">About</h4>
          <div className="mt-3 space-y-3 text-[15px] leading-7 text-slate">
            {member.fullBio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FacultyPhoto({
  member,
  className,
  loading,
}: {
  member: FacultyMember;
  className?: string;
  loading?: "lazy";
}) {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-navy/5", className)}>
      {member.photo && !photoFailed ? (
        <img
          src={publicAsset(member.photo)}
          alt={`Portrait of ${member.name}`}
          {...(loading ? { loading } : {})}
          onError={() => setPhotoFailed(true)}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div
          className="grid h-full w-full place-items-center"
          role="img"
          aria-label={`Portrait of ${member.name} unavailable`}
        >
          <UserRound className="h-1/3 w-1/3 text-navy/25" strokeWidth={1.25} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}

function LinkedInButton({ member }: { member: FacultyMember }) {
  return (
    <a
      href={member.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${member.name} on LinkedIn (opens in a new tab)`}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border bg-card text-navy shadow-sm transition-colors hover:bg-navy hover:text-primary-foreground"
    >
      <Linkedin className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
