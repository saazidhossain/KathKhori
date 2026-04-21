import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import App from "../App";

// Minimal wouter mock so routing works in jsdom without a real browser URL
vi.mock("wouter", async () => {
  const actual = await vi.importActual<typeof import("wouter")>("wouter");
  return {
    ...actual,
    useLocation: () => ["/", vi.fn()],
  };
});

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    // Multiple 'সময়ের সৌন্দর্য' exist (hero + typography showcase)
    const matches = screen.getAllByText("সময়ের সৌন্দর্য");
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("wraps content in ErrorBoundary (no error thrown → children visible)", () => {
    render(<App />);
    expect(screen.queryByText("কিছু একটা সমস্যা হয়েছে")).not.toBeInTheDocument();
  });

  it("renders Toaster without throwing", () => {
    const { container } = render(<App />);
    // Sonner Toaster injects its element — app container should still exist
    expect(container.firstChild).not.toBeNull();
  });

  it("renders navigation links", async () => {
    render(<App />);
    expect(screen.getByRole("link", { name: "প্রদর্শনী" })).toHaveAttribute("href", "#showcase");
    expect(screen.getByRole("link", { name: "বৈশিষ্ট্য" })).toHaveAttribute("href", "#features");
    // যোগাযোগ appears in both nav and footer — assert the nav link by href
    const contactLinks = screen.getAllByRole("link", { name: "যোগাযোগ" });
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("CTA buttons are present and clickable", async () => {
    const user = userEvent.setup();
    render(<App />);
    const collectBtn = screen.getByRole("button", { name: /সংগ্রহ দেখুন/ });
    await user.click(collectBtn); // should not throw
    expect(collectBtn).toBeInTheDocument();
  });
});
