import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Home from "../pages/Home";

// Helper: wrap with minimal providers that Home depends on indirectly
function renderHome() {
  return render(<Home />);
}

describe("Home – rendering", () => {
  it("renders the brand name কাঠখড়ি in the header", () => {
    renderHome();
    // Multiple instances expected (header + footer)
    const matches = screen.getAllByText("কাঠখড়ি");
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("renders hero tagline", () => {
    renderHome();
    // The h2 hero heading
    expect(screen.getAllByText("সময়ের সৌন্দর্য").length).toBeGreaterThanOrEqual(1);
  });

  it("renders hero paragraph about the brand", () => {
    renderHome();
    // Two similar paragraphs exist — check at least one contains the brand description
    const matches = screen.getAllByText(/কাঠখড়ি হস্তনির্মিত কাঠের সৃষ্টিতে বিশেষজ্ঞ/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("renders primary CTA button 'সংগ্রহ দেখুন'", () => {
    renderHome();
    expect(
      screen.getByRole("button", { name: /সংগ্রহ দেখুন/ })
    ).toBeInTheDocument();
  });

  it("renders secondary CTA button 'আরও জানুন'", () => {
    renderHome();
    expect(
      screen.getByRole("button", { name: "আরও জানুন" })
    ).toBeInTheDocument();
  });

  it("renders navigation anchor links", () => {
    renderHome();
    // Nav bar links — use href to distinguish from footer links
    expect(screen.getByRole("link", { name: "প্রদর্শনী" })).toHaveAttribute("href", "#showcase");
    expect(screen.getByRole("link", { name: "বৈশিষ্ট্য" })).toHaveAttribute("href", "#features");
    // Multiple যোগাযোগ links exist (nav + footer), just assert at least one
    const contactLinks = screen.getAllByRole("link", { name: "যোগাযোগ" });
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the brand identity section heading", () => {
    renderHome();
    expect(screen.getByText("ব্র্যান্ড পরিচয়")).toBeInTheDocument();
  });

  it("renders all three tab buttons for brand assets", () => {
    renderHome();
    expect(screen.getByRole("button", { name: "লোগো" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "ফেসবুক কভার" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "ইনস্টাগ্রাম প্রোফাইল" })
    ).toBeInTheDocument();
  });

  it("renders the features section heading", () => {
    renderHome();
    expect(screen.getByText("কেন কাঠখড়ি?")).toBeInTheDocument();
  });

  it("renders all six feature cards", () => {
    renderHome();
    const featureTitles = [
      "কালজয়ী ডিজাইন",
      "নিখুঁত উপহার",
      "কারুশিল্প গুণমান",
      "দ্রুত ডেলিভারি",
      "কাস্টম অর্ডার",
      "টেকসই",
    ];
    for (const title of featureTitles) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }
  });

  it("renders color palette section heading", () => {
    renderHome();
    expect(screen.getByText("ব্র্যান্ড রঙের প্যালেট")).toBeInTheDocument();
  });

  it("renders all five brand colors", () => {
    renderHome();
    expect(screen.getByText("#8B6F47")).toBeInTheDocument();
    expect(screen.getByText("#D4A574")).toBeInTheDocument();
    expect(screen.getByText("#C19A6B")).toBeInTheDocument();
    expect(screen.getByText("#E8DCC8")).toBeInTheDocument();
    expect(screen.getByText("#FFF8F0")).toBeInTheDocument();
  });

  it("renders typography section heading", () => {
    renderHome();
    expect(screen.getByText("টাইপোগ্রাফি সিস্টেম")).toBeInTheDocument();
  });

  it("renders footer copyright line", () => {
    renderHome();
    expect(
      screen.getByText(/© ২০২৬ কাঠখড়ি\। সর্বাধিকার সংরক্ষিত।/)
    ).toBeInTheDocument();
  });

  it("renders footer social media links", () => {
    renderHome();
    expect(screen.getByRole("link", { name: "ফেসবুক" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "ইনস্টাগ্রাম" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "হোয়াটসঅ্যাপ" })).toBeInTheDocument();
  });

  it("header logo image has a meaningful alt text", () => {
    renderHome();
    expect(screen.getByAltText("কাঠখড়ি Logo")).toBeInTheDocument();
  });
});

describe("Home – tab interaction", () => {
  it("default active tab shows logo panel with 'প্রাথমিক লোগো' heading", () => {
    renderHome();
    expect(screen.getByText("প্রাথমিক লোগো")).toBeInTheDocument();
    expect(screen.queryByAltText("ফেসবুক কভার")).not.toBeInTheDocument();
    expect(screen.queryByAltText("ইনস্টাগ্রাম প্রোফাইল")).not.toBeInTheDocument();
  });

  it("clicking 'ফেসবুক কভার' tab shows facebook panel", async () => {
    const user = userEvent.setup();
    renderHome();
    const fbTab = screen.getByRole("button", { name: "ফেসবুক কভার" });
    await user.click(fbTab);
    expect(screen.getByAltText("ফেসবুক কভার")).toBeInTheDocument();
    expect(screen.queryByText("প্রাথমিক লোগো")).not.toBeInTheDocument();
    expect(
      screen.getByText(/ফেসবুক কভার \(১২০০×৬২৮পিক্স\)/)
    ).toBeInTheDocument();
  });

  it("clicking 'ইনস্টাগ্রাম প্রোফাইল' tab shows instagram panel", async () => {
    const user = userEvent.setup();
    renderHome();
    const igTab = screen.getByRole("button", { name: "ইনস্টাগ্রাম প্রোফাইল" });
    await user.click(igTab);
    expect(screen.getByAltText("ইনস্টাগ্রাম প্রোফাইল")).toBeInTheDocument();
    expect(screen.queryByText("প্রাথমিক লোগো")).not.toBeInTheDocument();
    expect(
      screen.getByText(/ইনস্টাগ্রাম প্রোফাইল চিত্র \(১০৮০×১০৮০পিক্স\)/)
    ).toBeInTheDocument();
  });

  it("can switch back to logo tab after visiting facebook tab", async () => {
    const user = userEvent.setup();
    renderHome();
    await user.click(screen.getByRole("button", { name: "ফেসবুক কভার" }));
    await user.click(screen.getByRole("button", { name: "লোগো" }));
    expect(screen.getByText("প্রাথমিক লোগো")).toBeInTheDocument();
    expect(screen.queryByAltText("ফেসবুক কভার")).not.toBeInTheDocument();
  });

  it("active tab button receives highlighted styling class", async () => {
    const user = userEvent.setup();
    renderHome();
    const fbTab = screen.getByRole("button", { name: "ফেসবুক কভার" });
    await user.click(fbTab);
    expect(fbTab.className).toContain("bg-primary");
  });

  it("inactive tabs do not have the active bg-primary class", async () => {
    renderHome();
    const fbTab = screen.getByRole("button", { name: "ফেসবুক কভার" });
    // Initially logo is active, so facebook should be inactive
    expect(fbTab.className).not.toContain("bg-primary");
  });
});

describe("Home – CTA section", () => {
  it("renders 'কাঠখড়ি অভিজ্ঞতা করতে প্রস্তুত?' heading", () => {
    renderHome();
    expect(
      screen.getByText("কাঠখড়ি অভিজ্ঞতা করতে প্রস্তুত?")
    ).toBeInTheDocument();
  });

  it("renders 'এখনই কিনুন' CTA button", () => {
    renderHome();
    expect(
      screen.getByRole("button", { name: "এখনই কিনুন" })
    ).toBeInTheDocument();
  });

  it("renders 'আমাদের সাথে যোগাযোগ করুন' CTA button", () => {
    renderHome();
    expect(
      screen.getByRole("button", { name: "আমাদের সাথে যোগাযোগ করুন" })
    ).toBeInTheDocument();
  });
});
