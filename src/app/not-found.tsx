import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center">
      <Container className="text-center">
        <h1 className="text-display-xl font-bold">404</h1>
        <p className="mt-4 text-xl text-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
