import { useState } from "react";
import Logo from "./ui/Logo";

const links = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Freelancing", href: "#freelancing" },
  { label: "Faculty", href: "#faculty" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo size={32} />
          <span className="font-display text-lg font-medium text-ink">
            Clausework
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink/70">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#pricing"
          className="hidden md:inline-flex items-center rounded-full bg-ink text-paper px-5 py-2 text-sm font-medium hover:bg-legal transition-colors"
        >
          Enroll now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-ink"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-paper px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-ink/80 text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-5 py-2.5 text-sm font-medium"
          >
            Enroll now
          </a>
        </div>
      )}
    </header>
  );
}