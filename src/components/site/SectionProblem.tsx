import problemImg from "@/assets/section-problem.jpg";
import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";

export function SectionProblem() {
  return (
    <section id="kontekst" className="border-t border-border bg-background py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Kontekst</p>
          <TextReveal
            as="h2"
            text="Twój dom ma swój energetyczny rytm"
            className="mt-6 font-serif text-4xl leading-tight md:text-5xl"
          />
          <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Każdy obiekt generuje charakterystyczny profil zużycia energii. Ogrzewanie,
              klimatyzacja, pompa ciepła, brama, monitoring, ładowarka EV, basen, sauna,
              oświetlenie i system smart home tworzą wzorzec pracy budynku.
            </p>
            <p>Dla większości użytkowników to tylko dane techniczne.</p>
            <p className="text-foreground">
              Dla właścicieli nieruchomości premium to element prywatności, bezpieczeństwa
              i kontroli.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={problemImg}
              alt="Panel sterowania smart home w premium rezydencji"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
