import SectionHeading from "./ui/SectionHeading";
import ClauseMarker from "./ui/ClauseMarker";
import Badge from "./ui/Badge";
import { curriculum } from "../data/content";

export default function CurriculumTimeline() {
  return (
    <section id="curriculum" className="bg-ink/[0.03] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="The 6-month structure"
          title="Five clauses. One contract drafting practice."
          description="Each month builds on the last — starting with the fundamentals every drafter needs, ending with the agreements that pay the most."
        />

        <div className="mt-14 space-y-6">
          {curriculum.map((item) => (
            <div
              key={item.clause}
              className="bg-paper rounded-2xl border border-ink/10 p-6 sm:p-8 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10"
            >
              <div className="flex sm:flex-col sm:items-start gap-3 sm:gap-2">
                <ClauseMarker number={`${item.clause}`} />
                <span className="font-mono text-xs text-slate">{item.phase}</span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate leading-relaxed max-w-2xl">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.topics.map((topic) => (
                    <Badge key={topic} variant="brass">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}