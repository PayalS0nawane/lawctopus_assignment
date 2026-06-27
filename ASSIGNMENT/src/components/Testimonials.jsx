import SectionHeading from "./ui/SectionHeading";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
      <SectionHeading
        align="center"
        eyebrow="From past learners"
        title="What changes after six months"
        description="Rated 9 out of 10 by learners for practical learning and delivery."
      />

      <div className="mt-14 grid sm:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="bg-paper border border-ink/10 rounded-2xl p-7 flex flex-col"
          >
            <span className="font-display text-4xl text-brass/40 leading-none">
              "
            </span>
            <blockquote className="mt-2 text-ink leading-relaxed flex-1">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 text-sm text-slate font-medium">
              — {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}