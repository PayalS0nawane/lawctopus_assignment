import Logo from "./ui/Logo";

const links = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "Freelancing", href: "#freelancing" },
  { label: "Faculty", href: "#faculty" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
         
        <span className="flex items-center gap-2.5">
            <Logo size={32} />
            <span className="font-display text-lg font-medium text-ink">
                Clausework
            </span>
        </span>
          
          <p className="mt-3 text-sm text-slate max-w-sm">
            A 6-month course in contract drafting and freelancing, built for
            law students and young lawyers.
          </p>
        </div>

        <ul className="flex flex-wrap gap-6 text-sm text-slate">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-ink/10 max-w-6xl mx-auto px-6 py-6 text-xs text-slate/70">
        Built as a class project. Course details are illustrative and not
        affiliated with any real institution.
      </div>
    </footer>
  );
}