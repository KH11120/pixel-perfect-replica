import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FacultySection } from "@/components/faculty-section";
import { facultyMembers } from "@/lib/faculty";
import { programs } from "@/lib/programs";

describe("FacultySection", () => {
  it("renders nothing when a program has no faculty", () => {
    const { container } = render(<FacultySection faculty={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders one card per faculty member with photo, designation, short bio and LinkedIn link", () => {
    render(<FacultySection faculty={facultyMembers} />);
    expect(screen.getByRole("heading", { name: "Meet Your Faculty" })).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(facultyMembers.length);
    for (const member of facultyMembers) {
      const card = screen.getByRole("heading", { name: member.name }).closest("article")!;
      const scope = within(card as HTMLElement);
      expect(scope.getByRole("img", { name: `Portrait of ${member.name}` })).toHaveAttribute(
        "src",
        expect.stringContaining(member.photo),
      );
      expect(scope.getByText(member.designation)).toBeInTheDocument();
      expect(scope.getByText(member.shortBio)).toBeInTheDocument();
      const link = scope.getByRole("link", { name: `${member.name} on LinkedIn (opens in a new tab)` });
      expect(link).toHaveAttribute("href", member.linkedinUrl);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("opens a popup with the matching faculty member's full bio and LinkedIn link", () => {
    render(<FacultySection faculty={facultyMembers} />);
    for (const member of facultyMembers) {
      fireEvent.click(screen.getByRole("button", { name: `Read more about ${member.name}` }));
      const dialog = screen.getByRole("dialog");
      const scope = within(dialog);
      expect(scope.getByRole("heading", { name: member.name })).toBeInTheDocument();
      expect(scope.getByText(member.designation)).toBeInTheDocument();
      expect(scope.getByRole("img", { name: `Portrait of ${member.name}` })).toBeInTheDocument();
      expect(scope.getByText("About")).toBeInTheDocument();
      for (const paragraph of member.fullBio) expect(scope.getByText(paragraph)).toBeInTheDocument();
      const link = scope.getByRole("link", { name: /View LinkedIn Profile/ });
      expect(link).toHaveAttribute("href", member.linkedinUrl);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      fireEvent.keyDown(dialog, { key: "Escape" });
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    }
  });

  it("shows a neutral placeholder instead of a broken image when a photo fails to load", () => {
    const member = { ...facultyMembers[0]!, photo: "/faculty/missing.jpg" };
    render(<FacultySection faculty={[member]} />);
    fireEvent.error(screen.getByRole("img", { name: `Portrait of ${member.name}` }));
    expect(
      screen.getByRole("img", { name: `Portrait of ${member.name} unavailable` }),
    ).toBeInTheDocument();
    expect(document.querySelector("img")).toBeNull();
  });

  it("gives every program faculty profiles", () => {
    for (const program of programs) expect(program.faculty.length).toBeGreaterThan(0);
  });
});
