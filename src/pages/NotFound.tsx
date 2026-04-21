import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground">
      <h1 className="font-display text-8xl font-bold text-primary">৪০৪</h1>
      <p className="text-2xl text-muted-foreground font-medium">পাতাটি পাওয়া যায়নি</p>
      <p className="text-muted-foreground text-center max-w-md">
        আপনি যে পাতাটি খুঁজছেন তা সরানো হয়েছে বা বিদ্যমান নেই।
      </p>
      <Button asChild size="lg" className="mt-2">
        <a href="/">মূল পাতায় ফিরুন</a>
      </Button>
    </div>
  );
}
