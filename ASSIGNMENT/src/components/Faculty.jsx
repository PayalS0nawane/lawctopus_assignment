import SectionHeading from "./ui/SectionHeading";
import { faculty } from "../data/content";

const photos = [
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
];

export default function Faculty() {
  return (
    <section id="faculty" className="bg-ink/[0.03] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Who's teaching"
          title="Practicing lawyers, not full-time instructors"
          description="Every faculty member drafts contracts professionally — the course is taught around their real caseload, not built as a one-off recording."
        />

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {faculty.map((person, i) => (
            <div
              key={person.name}
              className="bg-paper rounded-2xl border border-ink/10 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photos[i]}
                  alt={`Portrait of ${person.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-lg font-medium text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brass">
                  {person.role}
                </p>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}