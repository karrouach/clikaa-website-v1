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
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <ContactInfo />
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-12">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
