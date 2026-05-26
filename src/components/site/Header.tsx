import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#kontekst", label: "Kontekst" },
  { href: "#system", label: "System" },
  { href: "#korzysci", label: "Korzyści" },
  { href: "#dla-kogo", label: "Dla kogo" },
  { href: "#tryby", label: "Tryby" },
  { href: "#proces", label: "Proces" },
  { href: "#konsultacja", label: "Formularz" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link
          to="/prywatna-energia-dla-rezydencji"
          className="flex shrink-0 flex-col leading-none"
          aria-label="AMC — Private Energy System"
        >
          <img
            src="https://res.cloudinary.com/dvea5ksmk/image/upload/v1779777171/AMC_ENERGY_private_vf3lsg.svg"
            alt="AMC Energy — Private Energy System"
            className="h-12 w-auto md:h-14"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-muted-foreground lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#konsultacja"
          className="shrink-0 rounded-sm border border-primary/60 bg-transparent px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Konsultacja
        </a>
      </div>
    </header>
  );
}
