import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FacultySection } from "@/components/faculty-section";
import { placeholderFaculty, type FacultyMember } from "@/lib/faculty";
import { programs } from "@/lib/programs";

const member: FacultyMember = {
  name: "Test Expert",
  designation: "Designation",
  organisation: "Organisation",
  bio: "Bio.",
  linkedinUrl: "",
};

describe("FacultySection", () => {
  it("renders nothing when a program has no faculty", () => {
    const { container } = render(<FacultySection faculty={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("shows the LinkedIn icon as a non-clickable placeholder when no URL is set", () => {
    render(<FacultySection faculty={placeholderFaculty} />);
    expect(screen.getByRole("heading", { name: "Meet Your Faculty" })).toBeInTheDocument();
    expect(screen.getAllByRole("img", { name: "Faculty portrait placeholder" })).toHaveLength(3);
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("links the LinkedIn icon in a new tab once a URL is added", () => {
    render(
      <FacultySection
        faculty={[{ ...member, linkedinUrl: "https://www.linkedin.com/in/example" }]}
      />,
    );
    const link = screen.getByRole("link", { name: /Test Expert on LinkedIn/ });
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/example");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("gives every program faculty profiles", () => {
    for (const program of programs) expect(program.faculty.length).toBeGreaterThan(0);
  });
});
