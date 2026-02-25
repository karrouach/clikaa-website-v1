import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Clikaa's terms of service for our design and creative services.",
};

export default function TermsPage() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Legal
            </span>
            <h1 className="mt-2 text-display-md font-bold leading-tight">
              Terms of Service
            </h1>
            <p className="mt-4 text-muted">Last Updated: November 2, 2025</p>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted">
              By accessing the Clikaa website or engaging in our services, you agree to
              the following terms.
            </p>

            <div className="mt-12 space-y-10">
              <section>
                <h2 className="text-xl font-semibold">1. Scope of Services</h2>
                <div className="mt-2 h-px w-10 bg-foreground" />
                <ul className="mt-6 space-y-4 text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      Clikaa provides strategic design services including, but not limited
                      to, Brand Strategy, Pitch Deck Design, UI/UX, and Motion Animation.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      Ongoing design support (Design-as-a-Service) is subject to the
                      specific terms outlined in your individual service agreement.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">2. Intellectual Property</h2>
                <div className="mt-2 h-px w-10 bg-foreground" />
                <ul className="mt-6 space-y-4 text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      <strong className="text-foreground">Client Ownership:</strong> Upon
                      full payment, all final design assets created for the client (e.g.,
                      logos, pitch decks, websites) are owned by the client.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      <strong className="text-foreground">Clikaa Rights:</strong> Clikaa
                      retains the right to display completed projects in our portfolio and
                      marketing materials unless otherwise agreed upon via an NDA.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">
                  3. Project Timelines &amp; Deliverables
                </h2>
                <div className="mt-2 h-px w-10 bg-foreground" />
                <ul className="mt-6 space-y-4 text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      We move at the speed of innovation. While we strive for rapid
                      turnaround, specific timelines are estimates based on project
                      complexity and client feedback cycles.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      Clients are responsible for providing necessary feedback and assets in
                      a timely manner to maintain project momentum.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">4. Payments and Cancellations</h2>
                <div className="mt-2 h-px w-10 bg-foreground" />
                <ul className="mt-6 space-y-4 text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      Payments for project-based work or recurring subscriptions must be
                      made according to the schedule defined in your proposal.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      Cancellations for ongoing support require notice as defined in your
                      specific service plan.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
                <div className="mt-2 h-px w-10 bg-foreground" />
                <ul className="mt-6 space-y-4 text-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <span>
                      Clikaa provides strategic design to support business growth. However,
                      we do not guarantee specific financial outcomes, such as exact capital
                      raised or specific conversion lifts, as these depend on external
                      market factors.
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
