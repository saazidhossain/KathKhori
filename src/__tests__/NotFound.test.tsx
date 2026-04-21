import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound", () => {
  it("renders Bengali 404 numeral", () => {
    render(<NotFound />);
    expect(screen.getByText("৪০৪")).toBeInTheDocument();
  });

  it("renders 'পাতাটি পাওয়া যায়নি' message", () => {
    render(<NotFound />);
    expect(screen.getByText("পাতাটি পাওয়া যায়নি")).toBeInTheDocument();
  });

  it("renders explanatory paragraph", () => {
    render(<NotFound />);
    expect(
      screen.getByText(/আপনি যে পাতাটি খুঁজছেন তা/)
    ).toBeInTheDocument();
  });

  it("renders a link back to the home page", () => {
    render(<NotFound />);
    const homeLink = screen.getByRole("link", { name: "মূল পাতায় ফিরুন" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
