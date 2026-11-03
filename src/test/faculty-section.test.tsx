import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FacultySection } from "@/components/faculty-section";
import { placeholderFaculty, type FacultyMember } from "@/lib/faculty";
import { programs } from "@/lib/programs";

const member: FacultyMember = {
  category: "Category",
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

  it("shows four portrait cards with expert perspectives and placeholder LinkedIn icons", () => {
    render(<FacultySection faculty={placeholderFaculty} />);
    expect(screen.getByRole("heading", { name: "Meet Your Faculty" })).toBeInTheDocument();
    expect(screen.getAllByRole("img", { name: "Faculty portrait placeholder" })).toHaveLength(4);
    for (const { category, designation, bio } of placeholderFaculty) {
      expect(screen.getByText(category)).toBeInTheDocument();
      expect(screen.getByText(designation)).toBeInTheDocument();
      expect(screen.getByText(bio)).toBeInTheDocument();
    }
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
