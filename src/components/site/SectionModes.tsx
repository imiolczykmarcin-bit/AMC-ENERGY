import modesImg from "@/assets/section-modes.jpg";
import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";


const modes = [
  {
    k: "Tryb backup",
    d: "System podtrzymuje wybrane odbiory w razie awarii sieci.",
  },
  {
    k: "Tryb hybrydowy",
    d: "Dom korzysta z PV, TURBINY, BESS i agregatu według zaprogramowanej logiki.",
  },
  {
    k: "Tryb wysokiej autonomii",
    d: "System maksymalizuje samowystarczalność i ogranicza zależność od zewnętrznej infrastruktury.",
  },
  {
    k: "Tryb krytyczny",
    d: "Priorytet dla bezpieczeństwa: monitoring, brama, oświetlenie, ogrzewanie, łączność, automatyka budynku.",
  },
];

export function SectionModes() {
  return (
    <section id="tryby" className="relative isolate border-t border-border py-28 md:py-36">
      <img
        src={modesImg}
        alt="Techniczne pomieszczenie z magazynem energii BESS"
        width={1600}
        height={900}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-65"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/85 via-surface/50 to-surface/85" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Tryby pracy</p>
          <TextReveal
            as="h2"
            text="Logika pracy projektowana pod styl życia"
            className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-5xl"
          />
        </Reveal>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
          {modes.map((m, i) => (
            <Reveal key={m.k} delay={i * 80} className="bg-surface">
              <div className="flex h-full flex-col p-10">
                <span className="text-xs tracking-[0.22em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-3xl text-foreground">{m.k}</h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
