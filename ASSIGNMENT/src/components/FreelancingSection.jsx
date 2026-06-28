import SectionHeading from "./ui/SectionHeading";
import { freelancingPoints, assignments } from "../data/content";

export default function FreelancingSection() {
  return (
    <section id="freelancing" className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <SectionHeading
            eyebrow="Beyond the drafting"
            title="A drafting skill only pays once someone hires you to use it"
            description="Alongside every contract module, you're building the freelancing skills to actually monetise what you're learning."
          />

          <div className="mt-10 space-y-6">
            {
            freelancingPoints.map((point) => (
              <div key={point.platform} className="flex gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-legal flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">
                    {point.platform}
                  </h3>
                  <p className="mt-1 text-slate leading-relaxed">{point.detail}</p>
                </div>
              </div>
            ))
            }
          </div>
        </div>

        <div className="bg-ink rounded-2xl p-8 sm:p-10 text-paper">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
            What you'll have by month 6
          </span>
          <h3 className="mt-4 font-display text-2xl font-medium">
            A portfolio, not just a transcript
          </h3>
          <ul className="mt-8 space-y-4">
            {assignments.map((item) => (
              <li key={item} className="flex items-start gap-3 text-paper/85">
                <svg
                  className="mt-1 flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5L6 11.5L13 4.5"
                    stroke="#8B6F47"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}