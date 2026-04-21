import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 bg-background text-foreground">
          <h2 className="font-display text-3xl font-bold text-destructive">
            কিছু একটা সমস্যা হয়েছে
          </h2>
          <p className="text-muted-foreground text-center max-w-md">
            {this.state.error?.message}
          </p>
          <button
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            পুনরায় চেষ্টা করুন
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
