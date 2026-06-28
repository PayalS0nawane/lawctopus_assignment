import SectionHeading from "./ui/SectionHeading";
import { pricingTiers } from "../data/content";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ink/[0.03] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          align="center"
          eyebrow="Enroll"
          title="Two ways in, depending on how far you want to go"
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlighted
                  ? "bg-ink text-paper ring-1 ring-ink"
                  : "bg-paper border border-ink/10 text-ink"
              }`}
            >
              {tier.highlighted && (
                <span className="self-start mb-4 inline-flex items-center rounded-full bg-brass/20 text-brass px-3 py-1 text-xs font-medium">
                  Most chosen
                </span>
              )}

              <h3 className="font-display text-xl font-medium">{tier.name}</h3>
              <p className={`mt-1 text-sm ${tier.highlighted ? "text-paper/70" : "text-slate"}`}>
                {tier.duration}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl font-medium">{tier.price}</span>
                {tier.originalPrice && (
                  <span
                    className={`text-sm line-through ${
                      tier.highlighted ? "text-paper/50" : "text-slate/60"
                    }`}
                  >
                    {tier.originalPrice}
                  </span>
                )}
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      className="mt-0.5 flex-shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8.5L6 11.5L13 4.5"
                        stroke={tier.highlighted ? "#8B6F47" : "#3D5A4C"}
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={tier.highlighted ? "text-paper/85" : "text-slate"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-paper text-ink hover:bg-brass hover:text-paper"
                    : "bg-ink text-paper hover:bg-legal"
                }`}
              >
                Enroll in {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}