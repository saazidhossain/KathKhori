import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ErrorBoundary from "../components/ErrorBoundary";

function BrokenChild({ shouldThrow = false }: { shouldThrow?: boolean }) {
  if (shouldThrow) throw new Error("test error message");
  return <div>Child rendered fine</div>;
}

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <BrokenChild />
      </ErrorBoundary>
    );
    expect(screen.getByText("Child rendered fine")).toBeInTheDocument();
    expect(
      screen.queryByText("কিছু একটা সমস্যা হয়েছে")
    ).not.toBeInTheDocument();
  });

  it("renders the Bengali error heading when a child throws", () => {
    // Suppress expected console.error from React
    const spy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);

    render(
      <ErrorBoundary>
        <BrokenChild shouldThrow />
      </ErrorBoundary>
    );

    expect(
      screen.getByText("কিছু একটা সমস্যা হয়েছে")
    ).toBeInTheDocument();
    expect(screen.getByText("test error message")).toBeInTheDocument();

    spy.mockRestore();
  });

  it("renders the retry button when an error is caught", () => {
    const spy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);

    render(
      <ErrorBoundary>
        <BrokenChild shouldThrow />
      </ErrorBoundary>
    );

    expect(
      screen.getByRole("button", { name: "পুনরায় চেষ্টা করুন" })
    ).toBeInTheDocument();

    spy.mockRestore();
  });

  it("clicking retry clears the error state and re-renders children", async () => {
    const spy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);
    const user = userEvent.setup();

    const { rerender } = render(
      <ErrorBoundary>
        <BrokenChild shouldThrow />
      </ErrorBoundary>
    );

    // Error UI is visible
    const retryBtn = screen.getByRole("button", { name: "পুনরায় চেষ্টা করুন" });

    // Re-render with non-throwing child before clicking retry
    rerender(
      <ErrorBoundary>
        <BrokenChild shouldThrow={false} />
      </ErrorBoundary>
    );

    await user.click(retryBtn);
    expect(screen.getByText("Child rendered fine")).toBeInTheDocument();

    spy.mockRestore();
  });
});
