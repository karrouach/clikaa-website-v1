import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Clikaa collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Legal
            </span>
            <h1 className="mt-2 text-display-md font-bold leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted">Effective Date: November 20, 2025</p>
          </div>

          <div className="prose-legal">
            <p className="text-lg leading-relaxed text-muted">
              At Clikaa, we take your privacy seriously. This policy outlines how we
              collect, use, and protect your data when you interact with our digital
              experiences, book a strategy call, or partner with us for design services.
            </p>

            <div className="mt-12 space-y-10">
              <section>
                <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                <div className="mt-2 h-px w-10 bg-foreground" />
                <ul className="mt-6 space-y-4 text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      <strong className="text-foreground">Contact Information:</strong> We
                      collect your name, email address, and company details when you book a
                      strategy call or inquire about our services.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      <strong className="text-foreground">Project Assets:</strong> During
                      our design partnership, we may collect brand guidelines, pitch deck
                      data, and product information necessary to execute our services.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      <strong className="text-foreground">Usage Data:</strong> We collect
                      technical information regarding how you interact with our website to
                      improve user experience and conversion performance.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                <div className="mt-2 h-px w-10 bg-foreground" />
                <ul className="mt-6 space-y-4 text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      <strong className="text-foreground">Service Delivery:</strong> To
                      provide high-performance web design, brand identity systems, and pitch
                      decks.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      <strong className="text-foreground">Communication:</strong> To send
                      project updates, strategy insights, and respond to your inquiries.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      <strong className="text-foreground">Improvement:</strong> To analyze
                      website metrics and enhance our Design-as-a-Service delivery model.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">3. Data Security</h2>
                <div className="mt-2 h-px w-10 bg-foreground" />
                <ul className="mt-6 space-y-4 text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      We implement industry-standard security measures to protect your
                      sensitive business information and intellectual property.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      We do not sell or trade your personal or business data to third
                      parties.
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
