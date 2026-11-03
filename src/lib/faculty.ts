export type FacultyMember = {
  /** Subject area shown above the name, e.g. "Entrepreneurship". */
  category: string;
  name: string;
  designation: string;
  organisation?: string;
  /** Two to three lines introducing the faculty member and their perspective. */
  bio: string;
  /** Path under `public/` (e.g. "/images/faculty/jane-doe.jpg"). Leave empty to show the neutral portrait placeholder. */
  photo?: string;
  /** Full LinkedIn profile URL. Leave empty to show the icon as a non-clickable placeholder. */
  linkedinUrl: string;
};

/**
 * Placeholder profiles until real faculty details are confirmed. To set a program's
 * own faculty, replace `faculty: placeholderFaculty` in its data with an array of
 * FacultyMember entries.
 */
export const placeholderFaculty: FacultyMember[] = [
  {
    category: "Entrepreneurship",
    name: "Expert Name",
    designation: "Entrepreneurship Expert",
    bio: "[Expert perspective on identifying meaningful problems and validating a business opportunity.]",
    linkedinUrl: "",
  },
  {
    category: "Venture Building",
    name: "Expert Name",
    designation: "Venture-Building Practitioner",
    bio: "[Expert perspective on turning an early idea into a testable product or service.]",
    linkedinUrl: "",
  },
  {
    category: "Business and Markets",
    name: "Expert Name",
    designation: "Business and Market Expert",
    bio: "[Expert perspective on understanding customers, building a business model and reaching the market.]",
    linkedinUrl: "",
  },
  {
    category: "Innovation and Technology",
    name: "Expert Name",
    designation: "Innovation and Technology Expert",
    bio: "[Expert perspective on using technology and practical experimentation to build a venture.]",
    linkedinUrl: "",
  },
];
