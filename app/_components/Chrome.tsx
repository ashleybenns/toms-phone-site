import Link from "next/link";

/**
 * Shared page furniture: header, footer, and the card/section primitives every page uses.
 *
 * These existed as copy-pasted inline style objects on each page, which is how /privacy came to
 * describe a different app from the one being shipped — two copies drift, and the one nobody is
 * looking at drifts first. One definition here, used everywhere.
 */

const NAV = [
  { href: "/", label: "Home" },
  { href: "/support", label: "Help & support" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-card/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-5 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-brand no-underline"
        >
          Tom&apos;s Phone
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted no-underline hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-card">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-5 py-8 text-sm text-muted">
        <p className="m-0">
          Questions, problems, or an idea for something that would help?{" "}
          <a href="mailto:support@toms-phone.com" className="text-brand">
            support@toms-phone.com
          </a>
        </p>
        <p className="m-0">
          <Link href="/privacy" className="text-brand no-underline">
            Privacy policy
          </Link>
          {" · "}
          <Link href="/support" className="text-brand no-underline">
            Help &amp; support
          </Link>
        </p>
        <p className="m-0 text-xs">
          Tom&apos;s Phone is an Android app. It is not affiliated with Google or
          any phone network.
        </p>
      </div>
    </footer>
  );
}

/** The page's opening block — title and one-line summary on the brand gradient. */
export function Hero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mb-6 rounded-3xl border border-line bg-gradient-to-b from-card to-wash p-7 shadow-[0_12px_36px_rgba(31,22,48,0.06)]">
      {eyebrow ? (
        <p className="m-0 mb-2 font-bold tracking-wide text-brand">{eyebrow}</p>
      ) : null}
      <h1 className="m-0 mb-3 text-[clamp(2rem,4vw,2.8rem)] leading-tight font-bold">
        {title}
      </h1>
      {children ? <div className="text-muted">{children}</div> : null}
    </section>
  );
}

/** A white content card. Long-form pages are one card; landing pages use several. */
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`mb-6 rounded-3xl border border-line bg-card p-7 leading-relaxed shadow-[0_12px_36px_rgba(31,22,48,0.04)] ${className}`}
    >
      {children}
    </section>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 pt-8 pb-16">{children}</main>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-7 mb-3 text-xl leading-snug font-bold first:mt-0">
      {children}
    </h2>
  );
}
