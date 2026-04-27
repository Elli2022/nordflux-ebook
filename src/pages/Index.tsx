import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ConverterCard } from "@/components/converter/ConverterCard";
import { HowItWorks } from "@/components/HowItWorks";
import { FormatsSection } from "@/components/FormatsSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  const converterRef = useRef<HTMLDivElement>(null);

  const scrollToConverter = () => {
    converterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCta={scrollToConverter} />
      <main className="flex-1">
        <Hero onCta={scrollToConverter} />
        <ConverterCard ref={converterRef} />
        <HowItWorks />
        <FormatsSection />
        <FAQ />
      </main>
      <Footer />

      {/* SEO: structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Convertor",
            description:
              "Modern e-book converter for EPUB, MOBI, PDF, TXT and DOCX. Drop a file, pick a target format, download the result.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
    </div>
  );
};

export default Index;
