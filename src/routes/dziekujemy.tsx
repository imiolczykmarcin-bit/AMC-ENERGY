import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dziekujemy")({
  component: ThankYouPage,
  head: () => ({
    meta: [
      { title: "Dziękujemy — AMC Energy" },
      { name: "description", content: "Dziękujemy za przesłanie zgłoszenia. Skontaktujemy się z Tobą najszybciej jak to możliwe." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-28 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Potwierdzenie</p>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            Dziękujemy za przesłanie zgłoszenia
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Skontaktujemy się z Tobą najszybciej jak to możliwe.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-sm bg-primary text-xs uppercase tracking-[0.22em] text-primary-foreground hover:opacity-90"
            >
              <Link to="/">Powrót do strony głównej</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
