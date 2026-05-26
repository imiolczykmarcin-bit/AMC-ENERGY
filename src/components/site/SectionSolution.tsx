import solutionImg from "@/assets/section-solution.jpg";
import iconSun from "@/assets/icons3d/sun.png";
import iconBattery from "@/assets/icons3d/battery.png";
import iconFuel from "@/assets/icons3d/fuel.png";
import iconWind from "@/assets/icons3d/wind.png";
import iconCpu from "@/assets/icons3d/cpu.png";
import iconPlug from "@/assets/icons3d/plug.png";
import iconThermometer from "@/assets/icons3d/thermometer.png";
import iconShield from "@/assets/icons3d/shield.png";
import iconActivity from "@/assets/icons3d/activity.png";
import iconSliders from "@/assets/icons3d/sliders.png";
import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";

type Element = {
  k: string;
  t: string;
  d: string;
  icon: string;
  /** tailwind class applied to icon on group-hover for a tailored animation */
  anim: string;
};

const elements: Element[] = [
  { k: "01", t: "Fotowoltaika (PV)", d: "Produkcja energii zintegrowana z architekturą.", icon: iconSun, anim: "group-hover:rotate-12" },
  { k: "02", t: "Magazyn energii BESS", d: "Pojemność dopasowana do profilu domu.", icon: iconBattery, anim: "group-hover:scale-110" },
  { k: "03", t: "Agregat rezerwowy + ATS", d: "Automatyczne przełączanie źródła zasilania podczas awarii.", icon: iconFuel, anim: "group-hover:-translate-y-1" },
  { k: "04", t: "Mikroturbina wiatrowa", d: "Dodatkowa produkcja energii przy korzystnych warunkach wiatrowych.", icon: iconWind, anim: "group-hover:-translate-y-1" },
  { k: "05", t: "Smart Energy Management", d: "Logika pracy dostosowana do trybu życia.", icon: iconCpu, anim: "group-hover:rotate-6" },
  { k: "06", t: "Integracja EV", d: "Ładowanie zharmonizowane z produkcją PV.", icon: iconPlug, anim: "group-hover:rotate-12" },
  { k: "07", t: "Integracja z pompą ciepła", d: "Optymalizacja największych odbiorów.", icon: iconThermometer, anim: "group-hover:-translate-y-1" },
  { k: "08", t: "Backup krytyczny", d: "Priorytetowe zasilanie wybranych obwodów.", icon: iconShield, anim: "group-hover:scale-110" },
  { k: "09", t: "Monitoring", d: "Lokalny lub zdalny, wedle preferencji właściciela.", icon: iconActivity, anim: "group-hover:rotate-3" },
  { k: "10", t: "Tryb pracy", d: "Konfigurowany pod oczekiwany poziom autonomii.", icon: iconSliders, anim: "group-hover:scale-110" },
];

export function SectionSolution() {
  return (
    <section id="system" className="border-t border-border bg-surface py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Rozwiązanie</p>
            <TextReveal
              as="h2"
              text="AMC Private Energy System"
              className="mt-6 font-serif text-4xl leading-tight md:text-6xl"
            />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Projektujemy prywatne systemy energetyczne dla obiektów, które mogą pracować
              hybrydowo lub w trybie wysokiej autonomii. Łączymy fotowoltaikę, magazyn energii
              BESS, agregat rezerwowy, automatykę ATS, monitoring pracy systemu i zarządzanie
              energią.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="aspect-[16/11] overflow-hidden">
              <img
                src={solutionImg}
                alt="Magazyn energii BESS w technicznej części rezydencji"
                width={1600}
                height={1100}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>


        <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {elements.map((el, i) => (
            <Reveal key={el.k} delay={i * 40} className="bg-surface">
              <div className="group relative flex h-full flex-col overflow-hidden p-7 transition-colors duration-500 hover:bg-background">
                {/* subtle gold glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-700 group-hover:bg-primary/15"
                />

                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-primary">{el.k}</span>
                  <div className="relative h-16 w-16">
                    <div
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <img
                      src={el.icon}
                      alt=""
                      width={128}
                      height={128}
                      loading="lazy"
                      className={`h-full w-full object-contain drop-shadow-[0_6px_18px_rgba(201,168,76,0.35)] transition-transform duration-500 ease-out ${el.anim}`}
                    />
                  </div>
                </div>

                <h3 className="mt-6 font-serif text-xl text-foreground">{el.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{el.d}</p>

                {/* gold underline that grows on hover */}
                <span
                  aria-hidden
                  className="mt-6 block h-px w-8 origin-left scale-x-100 bg-primary/40 transition-transform duration-500 group-hover:w-full group-hover:bg-primary/70"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
