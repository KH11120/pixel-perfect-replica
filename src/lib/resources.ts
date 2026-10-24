export const resourceCategories = [
  { id: "ideas", title: "Idea & Problem Validation", description: "Questions about identifying worthwhile problems, testing assumptions and evaluating opportunities." },
  { id: "customers", title: "Customers & Market Research", description: "Customer interviews, buyer behaviour, market alternatives and willingness to pay." },
  { id: "building", title: "Building Your First Offer", description: "MVPs, prototypes, pilots, early product development and testing a solution." },
  { id: "sales", title: "Sales & Go-to-Market", description: "Positioning, founder-led sales, customer acquisition, referrals and early commercial relationships." },
  { id: "finance", title: "Business Models & Finance", description: "Pricing, unit economics, break-even analysis, cash flow and financial planning." },
  { id: "legal", title: "Legal, Operations & Risk", description: "Business structures, contracts, intellectual property, compliance and operational decisions." },
] as const;

export type ResourceCategory = typeof resourceCategories[number]["id"];
export type ResourceType = "Article" | "Practical guide" | "Worksheet" | "Template" | "Video" | "Checklist" | "Case-based explainer";
export type Resource = {
  slug: string;
  title: string;
  summary: string;
  category: ResourceCategory;
  type: ResourceType;
  status: "draft" | "published";
  editorialApproved: boolean;
  introduction: string;
  sections: { heading: string; paragraphs: string[]; example?: string }[];
  nextSteps: string[];
  relatedSlugs: string[];
  programLink?: boolean;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  assetUrl?: string;
};

// Editorial concepts only. These must never appear as published resource cards.
const concepts: [string, string, string, ResourceCategory][] = [
  ["is-a-business-idea-worth-pursuing", "How Do You Know If a Business Idea Is Worth Pursuing?", "A practical framework for assessing a business idea before investing significant time or money.", "ideas"],
  ["test-whether-customers-will-pay", "How to Test Whether Customers Will Actually Pay", "Understand the difference between positive feedback and evidence of genuine demand.", "customers"],
  ["mvp-prototype-or-pilot", "MVP, Prototype or Pilot: What Should You Build First?", "Choose an appropriate way to test a solution before committing to a larger build.", "building"],
  ["calculate-business-break-even", "How to Calculate the Break-Even Point for a New Business", "Understand the relationship between pricing, costs and the sales needed to cover expenses.", "finance"],
  ["build-a-business-alongside-employment", "How to Build a Business While Keeping Your Full-Time Job", "Explore how to structure early validation and venture-building alongside employment.", "legal"],
  ["pivot-persist-or-stop", "When Should You Pivot, Persist or Stop?", "Use evidence, customer response and commercial assumptions to make better decisions.", "ideas"],
];

export const resources: Resource[] = concepts.map(([slug, title, summary, category]) => ({
  slug, title, summary, category, type: "Article", status: "draft", editorialApproved: false,
  introduction: "", sections: [], nextSteps: [], relatedSlugs: [],
}));

export function isPublishedResource(resource: Resource) {
  return resource.status === "published" && resource.editorialApproved &&
    resource.introduction.trim().length > 0 && resource.sections.length > 0 &&
    resource.sections.every(section => section.heading.trim().length > 0 && section.paragraphs.some(paragraph => paragraph.trim().length > 0)) &&
    resource.nextSteps.some(step => step.trim().length > 0) &&
    (!["Worksheet", "Template", "Video"].includes(resource.type) || Boolean(resource.assetUrl));
}

export function getPublishedResources(source: Resource[] = resources) {
  return source.filter(isPublishedResource);
}
export function findPublishedResource(slug: string) {
  return getPublishedResources().find(resource => resource.slug === slug);
}

// Set only to the verified published/custom origin, never the draft preview origin.
export const PUBLIC_SITE_ORIGIN = "";
export function canonicalLinks(path: string) {
  return [{ rel: "canonical", href: PUBLIC_SITE_ORIGIN ? `${PUBLIC_SITE_ORIGIN}${path}` : path }];
}
export function publishedPagePaths() {
  return ["/", "/about", "/programs", "/experience-to-enterprise", "/contact", "/resources", ...getPublishedResources().map(resource => `/resources/${resource.slug}`)];
}

// Real sample asset required before exposing the download action.
export const SAMPLE_DOSSIER_URL = "";
export const SAMPLE_DISCLOSURE = "Illustrative example for demonstration purposes. Not an actual participant venture or program outcome.";