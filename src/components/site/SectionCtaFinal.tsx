import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";

export function SectionCtaFinal() {
  return (
    <section className="border-t border-border bg-surface py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Konsultacja</p>
          <TextReveal
            as="h2"
            text="Zaprojektuj prywatny system energii dla Twojego obiektu"
            className="mt-6 font-serif text-4xl leading-tight md:text-6xl"
          />
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Jeżeli chcesz zwiększyć niezależność energetyczną, prywatność profilu zużycia
            i bezpieczeństwo zasilania nieruchomości, porozmawiaj z AMC Energy.
          </p>
          <a
            href="#konsultacja"
            className="mt-12 inline-flex items-center justify-center rounded-sm bg-primary px-10 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Umów poufną konsultację
          </a>
        </Reveal>
      </div>
    </section>
  );
}
