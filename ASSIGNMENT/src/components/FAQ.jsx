import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import { faqs } from "../data/content";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10 py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-medium text-ink">
          {faq.q}
        </span>
        <span
          className={`shrink-0 text-brass transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <p className="mt-4 text-slate leading-relaxed pr-8">{faq.a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
      <SectionHeading
        align="center"
        eyebrow="Before you enroll"
        title="Questions worth answering upfront"
      />

      <div className="mt-10">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.q}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}