import { stats } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
              Lawctopus Law School · Online Course
            </span>

            <h1 className="mt-6 font-display text-[2.25rem] sm:text-[3.25rem] leading-[1.1] font-medium text-ink">
              This agreement is made between you{" "}
              <span className="text-ink/30">someday</span>{" "}
              <span className="text-ink">
                today
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0,5 Q25,0 50,4 T100,3" stroke="#8B6F47" strokeWidth="2" fill="none" />
                </svg>
              </span>
              , and the skill of contract drafting.
            </h1>

            <p className="mt-6 text-lg text-slate leading-relaxed max-w-xl">
              A 6-month, live, expert-led course that takes you from reading a
              contract to drafting 24+ of them — and from drafting to your
              first paid freelance client.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-7 py-3.5 text-sm font-medium hover:bg-legal transition-colors"
              >
                View course & pricing
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 text-ink px-7 py-3.5 text-sm font-medium hover:bg-ink/5 transition-colors"
              >
                See the curriculum
              </a>
            </div>
          </div>

          <div className="relative pb-8 pl-6">
            <div className="aspect-4/5 rounded-2xl overflow-hidden bg-ink/5">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="Lawyer reviewing a contract document at a desk"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="inline-flex items-center justify-center rounded-full border border-ink/20 text-ink px-7 py-3.5 text-sm font-medium hover:bg-ink/5 transition-colors">
              <p className="font-display text-2xl font-medium text-ink">24+</p>
              <p className="text-xs text-slate mt-0.5">
                Contracts drafted with personal feedback
              </p>
            </div> */}
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl border-t border-ink/10 pt-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-3xl sm:text-4xl font-medium text-ink">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm text-slate">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}