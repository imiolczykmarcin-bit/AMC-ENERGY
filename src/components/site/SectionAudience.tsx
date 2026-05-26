import audienceImg from "@/assets/section-audience.jpg";
import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";


export function SectionAudience() {
  return (
    <section id="dla-kogo" className="relative isolate border-t border-border py-28 md:py-36">
      <img
        src={audienceImg}
        alt="Rezydencja w leśnej polanie o złotej godzinie"
        width={1600}
        height={1024}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-65"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/50 to-background/85" />


      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Dla kogo</p>
          <TextReveal
            as="h2"
            text="Dla nieruchomości, w których energia jest elementem bezpieczeństwa"
            className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-6xl"
          />
      </Reveal>

      </div>
    </section>
  );
}
