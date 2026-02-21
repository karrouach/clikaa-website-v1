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
      "We primarily work with startups and scale-ups, from pre-seed founders preparing their first pitch deck to Series B companies overhauling their digital presence. If you're ambitious and care about how your brand looks and performs, we're a good fit.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope. A pitch deck usually takes 1–2 weeks. A full brand identity system takes 3–4 weeks. A website or digital product can range from 4–8 weeks. We'll give you a clear timeline during our kickoff call.",
  },
  {
    question: "Do you offer ongoing design support?",
    answer:
      "Yes. While we do project-based work, many clients retain us as their dedicated external design team for monthly support on ads, decks, and website updates.",
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
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 md:py-6 text-left group"
      >
        <span
          className={`text-base md:text-lg font-medium transition-colors duration-300 ${
            isOpen ? "text-foreground" : "text-foreground/80"
          }`}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: smoothEasing }}
          className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            isOpen
              ? "border-foreground text-foreground"
              : "border-border text-muted group-hover:border-foreground/40 group-hover:text-foreground"
          }`}
        >
          <Plus className="h-3.5 w-3.5" />
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
            <p className="pb-5 md:pb-6 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
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
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <TextReveal>
              <span className="text-sm font-medium uppercase tracking-widest text-muted">
                FAQ
              </span>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="mt-2 text-display-lg font-bold tracking-tight leading-tight">
                Questions? Answers.
              </h2>
            </TextReveal>
            <RevealOnScroll delay={0.2} className="mt-3">
              <p className="text-base text-muted">
                Everything you need to know about working with us.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>
            <div className="border-t border-border">
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
