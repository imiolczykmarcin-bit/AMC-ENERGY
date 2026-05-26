import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";

const steps = [
  {
    t: "Poufna konsultacja",
    d: "Rozmowa o potrzebach, obiekcie i oczekiwanym poziomie autonomii.",
  },
  {
    t: "Analiza profilu nieruchomości",
    d: "Ocena odbiorów, systemów krytycznych, przestrzeni technicznej i możliwych źródeł energii.",
  },
  {
    t: "Koncepcja systemu",
    d: "Dobór urządzeń, automatyki i logiki pracy.",
  },
  {
    t: "Projekt techniczny",
    d: "Przygotowanie rozwiązania do wdrożenia.",
  },
  {
    t: "Wykonawstwo i uruchomienie",
    d: "Realizacja, testy, konfiguracja i instruktaż.",
  },
  {
    t: "Monitoring i serwis",
    d: "Stała opieka lub tryb obsługi według preferencji klienta.",
  },
];

export function SectionProcess() {
  return (
    <section id="proces" className="border-t border-border bg-background py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Proces</p>
          <TextReveal
            as="h2"
            text="Dyskretna współpraca, krok po kroku"
            className="mt-6 font-serif text-4xl leading-tight md:text-5xl"
          />
        </Reveal>

        <ol className="mt-16">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <li className="grid grid-cols-[auto_1fr] gap-8 border-b border-border py-10 last:border-b-0">
                <span className="font-serif text-3xl text-primary md:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-foreground md:text-3xl">{s.t}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
