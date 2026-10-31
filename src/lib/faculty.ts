export type FacultyMember = {
  name: string;
  designation: string;
  organisation: string;
  /** Two to three lines introducing the faculty member. */
  bio: string;
  /** Path under `public/` (e.g. "/images/faculty/jane-doe.jpg"). Leave empty to show the neutral portrait placeholder. */
  photo?: string;
  /** Full LinkedIn profile URL. Leave empty to show the icon as a non-clickable placeholder. */
  linkedinUrl: string;
};

const PLACEHOLDER_BIO =
  "Faculty biography will be added here. This section will introduce the expert’s professional experience, subject expertise, and relevant industry background.";

/**
 * Placeholder profiles until real faculty details are confirmed. To set a program's
 * own faculty, replace `faculty: placeholderFaculty` in its data with an array of
 * FacultyMember entries.
 */
export const placeholderFaculty: FacultyMember[] = [
  {
    name: "Faculty Name",
    designation: "Designation",
    organisation: "Organisation",
    bio: PLACEHOLDER_BIO,
    linkedinUrl: "",
  },
  {
    name: "Industry Expert",
    designation: "Designation",
    organisation: "Organisation",
    bio: PLACEHOLDER_BIO,
    linkedinUrl: "",
  },
  {
    name: "Academic Expert",
    designation: "Designation",
    organisation: "Organisation",
    bio: PLACEHOLDER_BIO,
    linkedinUrl: "",
  },
];
