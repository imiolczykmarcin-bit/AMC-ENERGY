import benefitsImg from "@/assets/section-benefits.jpg";
import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";


const benefits = [
  {
    t: "Niezależność od sieci",
    d: "Twój obiekt może działać nawet wtedy, gdy infrastruktura zewnętrzna jest niedostępna lub niestabilna.",
  },
  {
    t: "Prywatność profilu zużycia",
    d: "System ogranicza ekspozycję szczegółowego rytmu pracy domu w standardowym modelu sieciowym.",
  },
  {
    t: "Bezpieczeństwo zasilania",
    d: "Najważniejsze funkcje domu mogą być zabezpieczone: monitoring, bramy, oświetlenie, ogrzewanie, chłodzenie, serwerownia, smart home, łączność.",
  },
  {
    t: "Komfort klasy premium",
    d: "System działa automatycznie, bez konieczności ręcznego przełączania źródeł zasilania.",
  },
  {
    t: "Dyskretna integracja z architekturą",
    d: "Technologia nie musi dominować wizualnie nad rezydencją.",
  },
  {
    t: "Indywidualny projekt",
    d: "Każdy system jest projektowany pod konkretny dom, styl użytkowania i wymagany poziom autonomii.",
  },
];

export function SectionBenefits() {
  return (
    <section id="korzysci" className="relative isolate border-t border-border py-28 md:py-36">
      <img
        src={benefitsImg}
        alt="Rezydencja nocą z ciepłym wewnętrznym światłem"
        width={1600}
        height={900}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/55 to-background/85" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Korzyści</p>
          <TextReveal
            as="h2"
            text="Energia jako element bezpieczeństwa, komfortu i prywatności"
            className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-5xl"
          />
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={i * 80}>
              <article className="border-l border-primary/40 pl-6">
                <h3 className="font-serif text-2xl text-foreground">{b.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
