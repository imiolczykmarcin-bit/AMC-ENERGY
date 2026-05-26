import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import formImg from "@/assets/section-form.jpg";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

const phoneRegex = /^[+\d][\d\s()-]{5,30}$/;

const schema = z
  .object({
    imie: z.string().trim().max(120).optional().or(z.literal("")),
    telefon: z
      .string()
      .trim()
      .max(40)
      .refine((v) => v === "" || phoneRegex.test(v), {
        message: "Nieprawidłowy numer telefonu",
      })
      .optional()
      .or(z.literal("")),
    email: z
      .string()
      .trim()
      .max(255)
      .refine((v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), {
        message: "Nieprawidłowy adres e-mail",
      })
      .optional()
      .or(z.literal("")),
    lokalizacja: z.string().trim().max(120).optional().or(z.literal("")),
    pv: z.boolean(),
    pompa: z.boolean(),
    agregat: z.boolean(),
    ev: z.boolean(),
    kontakt: z.enum(["telefon", "email"]).optional().or(z.literal("")),
    wiadomosc: z.string().trim().max(1500).optional().or(z.literal("")),
  })
  .refine(
    (v) => (v.telefon && phoneRegex.test(v.telefon)) || (v.email && v.email.length > 0),
    {
      message: "Podaj telefon lub e-mail",
      path: ["telefon"],
    },
  );


type FormValues = z.infer<typeof schema>;

const API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined;

export function ConsultationForm() {
  const navigate = useNavigate();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      imie: "", telefon: "", email: "", lokalizacja: "",
      pv: false, pompa: false, agregat: false, ev: false,
      kontakt: "", wiadomosc: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (!API_URL) {
      console.error("VITE_CONTACT_API_URL is not configured");
      toast.error("Formularz nie jest jeszcze skonfigurowany. Spróbuj ponownie później.");
      return;
    }
    try {
      const payload = {
        imie: values.imie ?? "",
        telefon: values.telefon ?? "",
        email: values.email ?? "",
        lokalizacja: values.lokalizacja ?? "",
        pv: values.pv,
        pompa: values.pompa,
        agregat: values.agregat,
        ev: values.ev,
        kontakt: values.kontakt ?? "",
        wiadomosc: values.wiadomosc ?? "",
        _subject: `Nowe zgłoszenie konsultacji${values.imie ? ` — ${values.imie}` : ""}`,
      };
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      navigate({ to: "/dziekujemy" });
    } catch (err) {
      console.error(err);
      toast.error("Nie udało się wysłać zgłoszenia. Spróbuj ponownie za chwilę.");
    }
  };

  return (
    <section id="konsultacja" className="relative isolate border-t border-border py-28 md:py-36">
      <img
        src={formImg}
        alt="Detal architektoniczny rezydencji o zmierzchu"
        width={1600}
        height={900}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/55 to-background/85" />

      <div className="mx-auto max-w-3xl px-6 md:px-10">

        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Formularz</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            Umów poufną konsultację
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Wypełnij krótki formularz. Skontaktujemy się w celu umówienia poufnej konsultacji.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-12 space-y-8 border border-border bg-surface p-8 md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Imię i nazwisko (opcjonalnie)" error={form.formState.errors.imie?.message}>
                <Input {...form.register("imie")} autoComplete="name" />
              </Field>
              <Field label="Telefon" error={form.formState.errors.telefon?.message}>
                <Input type="tel" {...form.register("telefon")} autoComplete="tel" />
              </Field>
              <Field label="E-mail" error={form.formState.errors.email?.message}>
                <Input type="email" {...form.register("email")} autoComplete="email" />
              </Field>
              <Field
                label="Lokalizacja nieruchomości"
                error={form.formState.errors.lokalizacja?.message}
              >
                <Input {...form.register("lokalizacja")} />
              </Field>
            </div>



            <div className="grid gap-4 sm:grid-cols-2">
              {([
                ["pv", "Obiekt posiada PV"],
                ["pompa", "Obiekt posiada pompę ciepła"],
                ["agregat", "Obiekt posiada agregat"],
                ["ev", "Obiekt posiada ładowarkę EV"],
              ] as const).map(([name, label]) => (
                <Label key={name} className="flex items-center justify-between border border-border bg-surface p-4 text-sm font-normal">
                  <span>{label}</span>
                  <Switch
                    checked={form.watch(name)}
                    onCheckedChange={(c) => form.setValue(name, c, { shouldValidate: true })}
                  />
                </Label>
              ))}
            </div>


            <Field label="Preferowany kontakt (opcjonalnie)" error={form.formState.errors.kontakt?.message}>
              <RadioGroup
                value={form.watch("kontakt")}
                onValueChange={(v) => form.setValue("kontakt", v as FormValues["kontakt"], { shouldValidate: true })}
                className="grid gap-3 sm:grid-cols-2"
              >
                <Label className="flex cursor-pointer items-center gap-3 border border-border bg-background p-3 text-sm font-normal">
                  <RadioGroupItem value="telefon" /> Telefon
                </Label>
                <Label className="flex cursor-pointer items-center gap-3 border border-border bg-background p-3 text-sm font-normal">
                  <RadioGroupItem value="email" /> E-mail
                </Label>
              </RadioGroup>
            </Field>

            <Field label="Wiadomość (opcjonalnie)" error={form.formState.errors.wiadomosc?.message}>
              <Textarea rows={5} {...form.register("wiadomosc")} />
            </Field>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-sm bg-primary text-xs uppercase tracking-[0.22em] text-primary-foreground hover:opacity-90"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Wysyłanie…
                </span>
              ) : (
                "Wyślij zgłoszenie"
              )}
            </Button>

            <p className="text-center text-[11px] leading-relaxed text-muted-foreground/80">
              Wysyłając formularz akceptujesz{" "}
              <a
                href="https://amcenergy.pl/index.php/polityka-prywatnosci-rodo"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                politykę prywatności (RODO)
              </a>
              .
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</Label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
