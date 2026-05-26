export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <img
              src="https://res.cloudinary.com/dvea5ksmk/image/upload/v1779777171/AMC_ENERGY_private_vf3lsg.svg"
              alt="AMC Energy — Private Energy System"
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Prywatna infrastruktura energetyczna dla Twojego obiektu
            </p>
          </div>

          {/* Siedziba */}
          <div className="md:col-span-4 text-sm text-muted-foreground">
            <p className="text-[10px] uppercase tracking-[0.28em] text-foreground">
              AMC Energy Sp. z o.o.
            </p>
            <address className="mt-3 not-italic space-y-1">
              <p>ul. Targowa 7, 06-650 Konopki</p>
              <p>
                <a href="tel:+48666811666" className="hover:text-foreground">
                  (+48) 666 811 666
                </a>
              </p>
              <p>
                <a href="mailto:kontakt@amcenergy.pl" className="hover:text-foreground">
                  kontakt@amcenergy.pl
                </a>
              </p>
            </address>
          </div>


          {/* Biuro Regionalne */}
          <div className="md:col-span-4 text-sm text-muted-foreground">
            <p className="text-[10px] uppercase tracking-[0.28em] text-foreground">
              Biuro Regionalne
            </p>
            <address className="mt-3 not-italic space-y-1">
              <p>ul. Gdyńska 103/6D</p>
              <p>80-209 Chwaszczyno k. Gdyni</p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} AMC Energy Sp. z o.o. Wszelkie prawa zastrzeżone.</p>
          <a
            href="https://www.amcenergy.pl"
            target="_blank"
            rel="noreferrer"
            className="uppercase tracking-[0.2em] hover:text-foreground"
          >
            amcenergy.pl
          </a>
        </div>
      </div>
    </footer>
  );
}
