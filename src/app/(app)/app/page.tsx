import Link from "next/link";
import { Container } from "@/components/container";

export default function AppHomePage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          This is the authenticated area of Briefly. In Phase 2 we will add
          templates and submissions here, and we will protect these routes so
          only logged-in users can access them.
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            href="/app/templates"
            className="rounded-md border px-4 py-2 text-sm hover:bg-neutral-50"
          >
            Templates
          </Link>
        </div>
      </section>
    </Container>
  );
}
