import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/site/Landing";

const title = "Prywatna energia dla rezydencji | AMC Private Energy System";
const description =
  "Autonomiczne systemy zasilania dla domów premium: PV, magazyn energii BESS, agregat, ATS i Smart Energy Management. Niezależność, prywatność i bezpieczeństwo.";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AMC Private Energy System",
          serviceType: "Prywatna infrastruktura energetyczna dla rezydencji",
          provider: {
            "@type": "Organization",
            name: "AMC Energy",
            url: "https://www.amcenergy.pl",
          },
          areaServed: "PL",
          description,
        }),
      },
    ],
  }),
});
