import heroImg from "@/assets/hero-residence.jpg";

export function SectionHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Nowoczesna rezydencja o zmierzchu z dyskretnym oświetleniem wnętrza"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <p className="mb-6 text-xs uppercase tracking-[0.32em] text-primary">
          AMC Private Energy System
        </p>
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
          Prywatna energia<br />dla Twojego obiektu
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Autonomiczne systemy zasilania dla domów premium, w których liczy się niezależność,
          prywatność i ciągłość działania.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#konsultacja"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Umów prywatną konsultację
          </a>
          <a
            href="#system"
            className="inline-flex items-center justify-center rounded-sm border border-border bg-transparent px-8 py-4 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Sprawdź możliwości dla Twojego obiektu
          </a>
        </div>
      </div>
    </section>
  );
}
