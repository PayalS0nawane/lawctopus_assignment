import SectionHeading from "./ui/SectionHeading";
import { outcomes } from "../data/content";

export default function WhyThisCourse() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Why this course"
        title="Knowing contract law and being able to draft one are different skills"
        description="Most courses teach you to identify a clause. This one teaches you to write it, defend it, and get paid for it."
      />

      <div className="mt-14 grid sm:grid-cols-2 gap-px bg-ink/10 rounded-2xl overflow-hidden">
        {outcomes.map((item) => (
          <div key={item.title} className="bg-paper p-8 sm:p-10">
            <h3 className="font-display text-xl font-medium text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-slate leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}