"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { smoothEasing } from "@/lib/animations";

const faqs = [
  {
    question: "What kind of companies does Clikaa work with?",
    answer:
      "We primarily work with startups and scale-ups — from pre-seed founders preparing their first pitch deck to Series B companies overhauling their digital presence. If you're ambitious and care about how your brand looks and performs, we're a good fit.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope. A pitch deck usually takes 1–2 weeks. A full brand identity system takes 3–4 weeks. A website or digital product can range from 4–8 weeks. We'll give you a clear timeline during our kickoff call.",
  },
  {
    question: "Do you offer ongoing design support?",
    answer:
      "Yes! Our Fractional Design Team service gives you on-demand access to senior designers without the overhead of a full-time hire. It's perfect for scaling teams that need consistent, high-quality creative output.",
  },
  {
    question: "What's your design process like?",
    answer:
      "We follow a three-phase process: Discovery (we listen and research), Design (we create and iterate), and Delivery (you get polished, production-ready assets). We keep you in the loop at every step with regular check-ins and async updates.",
  },
  {
    question: "How much does it cost to work with Clikaa?",
    answer:
      "Our pricing varies by project scope and complexity. We offer fixed-price packages for common deliverables and custom quotes for larger engagements. Reach out through our contact page and we'll put together a tailored proposal.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer:
      "Absolutely. We're experienced at working within existing brand systems while elevating the quality of execution. Whether you have a full brand book or just a logo and color palette, we'll make it shine.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#C0B8A8]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 md:py-8 text-left group"
      >
        <span
          className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
            isOpen ? "text-[#091CCA]" : "text-[#111111]"
          }`}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: smoothEasing }}
          className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            isOpen
              ? "border-[#091CCA] text-[#091CCA]"
              : "border-[#C0B8A8] text-[#111111]/50 group-hover:border-[#111111] group-hover:text-[#111111]"
          }`}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: smoothEasing }}
            className="overflow-hidden"
          >
            <p className="pb-6 md:pb-8 text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Left: Header */}
          <div>
            <TextReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-muted">
                FAQ
              </span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="mt-4 text-display-md font-bold tracking-tight text-[#111111]">
                Questions?
                <br />
                <span className="text-[#091CCA]">Answers.</span>
              </h2>
            </TextReveal>
            <RevealOnScroll delay={0.2} className="mt-4">
              <p className="text-lg text-muted">
                Everything you need to know about working with us.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right: Accordion */}
          <RevealOnScroll delay={0.2}>
            <div className="border-t border-[#C0B8A8]">
              {faqs.map((item, index) => (
                <FAQItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
