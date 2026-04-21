import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Gift, Palette, Zap } from "lucide-react";
import { useState } from "react";

/**
 * কাঠখড়ি - Kath khori Brand Showcase
 * Premium Bengali Aesthetic | Editorial Design Philosophy
 * Pure craftsmanship, timeless beauty, refined typography
 * Design: Calm pacing, premium editorial feel, Bengali typographic beauty
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("logo");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663093897748/C6BuqTzS3vo7vQMy4X6tvf/kath-khori-logo-premium-MyX5KSTRvwfmJNEbCHdGGr.webp"
              alt="কাঠখড়ি Logo"
              className="h-10 w-10"
            />
            <div>
              <h1 className="font-display text-lg font-bold text-primary">
                কাঠখড়ি
              </h1>
              <p className="text-xs text-muted-foreground">
                কারুশিল্পের সৌন্দর্য
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#showcase" className="text-sm font-medium hover:text-primary transition">
              প্রদর্শনী
            </a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition">
              বৈশিষ্ট্য
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition">
              যোগাযোগ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-accent tracking-widest">
                  প্রিমিয়াম কারুশিল্প ব্র্যান্ড
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight">
                সময়ের সৌন্দর্য
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                কাঠখড়ি হস্তনির্মিত কাঠের সৃষ্টিতে বিশেষজ্ঞ—মার্জিত দেয়াল ঘড়ি থেকে শুরু করে সজ্জামূলক শিল্পকর্ম পর্যন্ত। প্রতিটি পণ্য কারুশিল্প, প্রাকৃতিক সৌন্দর্য এবং কালজয়ী ডিজাইনের প্রতীক।
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  size="lg"
                >
                  সংগ্রহ দেখুন <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  আরও জানুন
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-3xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663093897748/C6BuqTzS3vo7vQMy4X6tvf/kath-khori-logo-premium-MyX5KSTRvwfmJNEbCHdGGr.webp"
                alt="কাঠখড়ি লোগো"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Assets Showcase */}
      <section id="showcase" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              ব্র্যান্ড পরিচয়
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              সমস্ত প্ল্যাটফর্ম জুড়ে সর্বাধিক প্রভাবের জন্য ডিজাইন করা প্রিমিয়াম ভিজ্যুয়াল পরিচয়
            </p>
          </div>

          {/* Asset Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {[
              { id: "logo", label: "লোগো" },
              { id: "facebook", label: "ফেসবুক কভার" },
              { id: "instagram", label: "ইনস্টাগ্রাম প্রোফাইল" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Asset Display */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {activeTab === "logo" && (
              <div className="p-8 md:p-16 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center min-h-96">
                <div className="text-center">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663093897748/C6BuqTzS3vo7vQMy4X6tvf/kath-khori-logo-premium-MyX5KSTRvwfmJNEbCHdGGr.webp"
                    alt="কাঠখড়ি লোগো"
                    className="h-64 w-64 mx-auto mb-6 drop-shadow-xl"
                  />
                  <h3 className="font-display text-2xl font-bold mb-2">
                    প্রাথমিক লোগো
                  </h3>
                  <p className="text-muted-foreground">
                    জ্যামিতিক কাঠের নান্দনিকতা উষ্ণ টোন এবং মার্জিত টাইপোগ্রাফি সহ
                  </p>
                </div>
              </div>
            )}

            {activeTab === "facebook" && (
              <div className="p-8 md:p-12">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663093897748/C6BuqTzS3vo7vQMy4X6tvf/kath-khori-facebook-premium-nVynGnpDkxF4Hp3n5xa5iu.webp"
                  alt="ফেসবুক কভার"
                  className="w-full rounded-lg shadow-md"
                />
                <div className="mt-6">
                  <h3 className="font-display text-2xl font-bold mb-2">
                    ফেসবুক কভার (১২০০×৬২৮পিক্স)
                  </h3>
                  <p className="text-muted-foreground">
                    উষ্ণ কাঠের নান্দনিকতা পণ্য প্রদর্শনী এবং ব্র্যান্ড বার্তা সহ
                  </p>
                </div>
              </div>
            )}

            {activeTab === "instagram" && (
              <div className="p-8 md:p-16 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663093897748/C6BuqTzS3vo7vQMy4X6tvf/kath-khori-instagram-premium-exkFiuijjTy6tDmjRNFV33.webp"
                    alt="ইনস্টাগ্রাম প্রোফাইল"
                    className="h-64 w-64 mx-auto rounded-full shadow-xl mb-6 border-4 border-white"
                  />
                  <h3 className="font-display text-2xl font-bold mb-2">
                    ইনস্টাগ্রাম প্রোফাইল চিত্র (১০৮০×১০৮০পিক্স)
                  </h3>
                  <p className="text-muted-foreground">
                    সোশ্যাল মিডিয়া উপস্থিতির জন্য নিখুঁত ন্যূনতমবাদী জ্যামিতিক লোগো
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Brand Features */}
      <section id="features" className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              কেন কাঠখড়ি?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              প্রিমিয়াম গুণমান, কারুশিল্প এবং কালজয়ী ডিজাইন
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "কালজয়ী ডিজাইন",
                description:
                  "প্রতিটি টুকরা সময়ের পরীক্ষায় টিকে থাকার জন্য তৈরি, ঐতিহ্যবাহী কৌশলকে সমসাময়িক নান্দনিকতার সাথে একত্রিত করে।",
              },
              {
                icon: Gift,
                title: "নিখুঁত উপহার",
                description:
                  "হস্তনির্মিত কাঠের আইটেম প্রিয়জনদের জন্য অর্থপূর্ণ উপহার তৈরি করে, যেকোনো অনুষ্ঠানের জন্য উপযুক্ত।",
              },
              {
                icon: Palette,
                title: "কারুশিল্প গুণমান",
                description:
                  "প্রিমিয়াম উপকরণ এবং সতর্ক মনোযোগ নিশ্চিত করে যে প্রতিটি পণ্য আমাদের উচ্চ মান পূরণ করে।",
              },
              {
                icon: Zap,
                title: "দ্রুত ডেলিভারি",
                description:
                  "সারাদেশে হোম ডেলিভারি উপলব্ধ যার সাথে দেয়াল ঘড়িতে বিনামূল্যে ব্যাটারি।",
              },
              {
                icon: Clock,
                title: "কাস্টম অর্ডার",
                description:
                  "আপনার কাঠের সৃষ্টিগুলি কাস্টম ডিজাইন এবং বিশেষত্ব সহ ব্যক্তিগতকৃত করুন।",
              },
              {
                icon: Gift,
                title: "টেকসই",
                description:
                  "পরিবেশ বান্ধব কাঠের পণ্য যা প্রাকৃতিক সৌন্দর্য এবং স্থায়িত্ব উদযাপন করে।",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={idx}
                  className="p-6 border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              ব্র্যান্ড রঙের প্যালেট
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              প্রাকৃতিক কাঠ এবং কারুশিল্প প্রতিফলিত করে উষ্ণ, পরিশীলিত রঙ
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: "আখরোট বাদামী", hex: "#8B6F47", desc: "প্রাথমিক ব্র্যান্ড রঙ" },
              { name: "হালকা সোনা", hex: "#D4A574", desc: "গৌণ উচ্চারণ" },
              { name: "উষ্ণ সোনা", hex: "#C19A6B", desc: "উচ্চারণ রঙ" },
              { name: "নরম বেজ", hex: "#E8DCC8", desc: "সীমানা এবং বিভাজক" },
              { name: "ক্রিম সাদা", hex: "#FFF8F0", desc: "পটভূমি" },
            ].map((color, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="w-full h-32 rounded-lg shadow-md mb-4 border-2 border-border"
                  style={{ backgroundColor: color.hex }}
                />
                <h3 className="font-display font-bold text-sm">{color.name}</h3>
                <p className="text-xs text-muted-foreground mb-1">{color.hex}</p>
                <p className="text-xs font-medium text-primary">{color.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              টাইপোগ্রাফি সিস্টেম
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              প্রিমিয়াম ফন্ট জোড়া: Playfair Display (প্রদর্শনী) + Inter (বডি)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Display Font */}
            <Card className="p-8 border-border">
              <h3 className="font-display text-2xl font-bold mb-6">
                Playfair Display
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    H1 - ৫৬পিক্স সাহসী
                  </p>
                  <h1 className="font-display text-5xl font-bold">
                    সময়ের সৌন্দর্য
                  </h1>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    H2 - ৪৮পিক্স সাহসী
                  </p>
                  <h2 className="font-display text-4xl font-bold">
                    কারুশিল্প তৈরি
                  </h2>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    H3 - ৩২পিক্স সাহসী
                  </p>
                  <h3 className="font-display text-3xl font-bold">
                    প্রিমিয়াম গুণমান
                  </h3>
                </div>
              </div>
            </Card>

            {/* Body Font */}
            <Card className="p-8 border-border">
              <h3 className="font-display text-2xl font-bold mb-6">Inter</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    বডি - ১৬পিক্স নিয়মিত
                  </p>
                  <p className="text-base leading-relaxed">
                    কাঠখড়ি হস্তনির্মিত কাঠের সৃষ্টিতে বিশেষজ্ঞ যা ঐতিহ্যবাহী কৌশলকে সমসাময়িক ডিজাইনের সাথে একত্রিত করে।
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    ছোট - ১৪পিক্স নিয়মিত
                  </p>
                  <p className="text-sm leading-relaxed">
                    প্রতিটি পণ্য প্রিমিয়াম গুণমান এবং স্থায়ী সৌন্দর্য নিশ্চিত করতে সতর্কতার সাথে তৈরি করা হয়।
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    ক্যাপশন - ১২পিক্স নিয়মিত
                  </p>
                  <p className="text-xs leading-relaxed">
                    প্রিমিয়াম উপকরণ এবং কারুশিল্প দক্ষতা দিয়ে হস্তনির্মিত।
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            কাঠখড়ি অভিজ্ঞতা করতে প্রস্তুত?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            আমাদের হস্তনির্মিত কাঠের সৃষ্টির সংগ্রহ অন্বেষণ করুন এবং আপনার বাড়ির জন্য বা উপহার হিসাবে নিখুঁত টুকরা খুঁজে পান।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              এখনই কিনুন
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              আমাদের সাথে যোগাযোগ করুন
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold mb-4">কাঠখড়ি</h3>
              <p className="text-sm opacity-75">
                কালজয়ী সৌন্দর্যের জন্য হস্তনির্মিত কাঠের সৃষ্টি।
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">পণ্য</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    দেয়াল ঘড়ি
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    সজ্জামূলক আইটেম
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    উপহার সেট
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">কোম্পানি</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    আমাদের সম্পর্কে
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    যোগাযোগ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    প্রশ্নোত্তর
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">আমাদের অনুসরণ করুন</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    ফেসবুক
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    ইনস্টাগ্রাম
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    হোয়াটসঅ্যাপ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>
              © ২০২৬ কাঠখড়ি। সর্বাধিকার সংরক্ষিত। | সময়ের সৌন্দর্য
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
