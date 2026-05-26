import { Header } from "./Header";
import { Footer } from "./Footer";
import { useSmoothAnchorScroll } from "./useSmoothAnchorScroll";
import { SectionHero } from "./SectionHero";
import { SectionProblem } from "./SectionProblem";
import { SectionSolution } from "./SectionSolution";
import { SectionBenefits } from "./SectionBenefits";
import { SectionAudience } from "./SectionAudience";
import { SectionModes } from "./SectionModes";
import { SectionProcess } from "./SectionProcess";
import { SectionCtaFinal } from "./SectionCtaFinal";
import { ConsultationForm } from "./ConsultationForm";
import { Toaster } from "@/components/ui/sonner";

export function Landing() {
  useSmoothAnchorScroll();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <SectionHero />
        <SectionProblem />
        <SectionSolution />
        <SectionBenefits />
        <SectionAudience />
        <SectionModes />
        <SectionProcess />
        <SectionCtaFinal />
        <ConsultationForm />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
