import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm, ContactInfo } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with us to discuss your next project. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <Container>
        {/* Mobile: heading → form → email/socials */}
        <div className="flex flex-col gap-12 lg:hidden">
          <ContactInfo part="top" />
          <div className="rounded-2xl border border-border bg-card p-8">
            <ContactForm />
          </div>
          <ContactInfo part="bottom" />
        </div>

        {/* Desktop: side by side */}
        <div className="hidden lg:grid gap-24 lg:grid-cols-2">
          <ContactInfo />
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
