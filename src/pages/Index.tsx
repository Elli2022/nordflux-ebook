import { Navbar } from "@/components/ebook/Navbar";
import { ProgressBar } from "@/components/ebook/ProgressBar";
import { Hero } from "@/components/ebook/Hero";
import { HorizontalChapter } from "@/components/ebook/HorizontalChapter";
import { Principles } from "@/components/ebook/Principles";
import { CTA } from "@/components/ebook/CTA";
import { Footer } from "@/components/ebook/Footer";
import { CHAPTERS } from "@/lib/ebook-data";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ProgressBar />
      <main className="flex-1">
        <Hero />
        <section id="chapters" aria-label="Kapitel">
          {CHAPTERS.map((chapter, i) => (
            <HorizontalChapter key={chapter.number} chapter={chapter} index={i} />
          ))}
        </section>
        <Principles />
        <CTA />
      </main>
      <Footer />

      {/* SEO: structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: "Digital Marknadsföring 2026",
            author: { "@type": "Organization", name: "Convertor" },
            publisher: { "@type": "Organization", name: "Convertor" },
            inLanguage: "sv-SE",
            bookFormat: "https://schema.org/EBook",
            description:
              "En interaktiv e-bok från webbyrån Convertor om vad som faktiskt funkar inom digital marknadsföring 2026.",
          }),
        }}
      />
    </div>
  );
};

export default Index;
