import Link from "next/link";
import { Container } from "@/components/container";

export default function HomePage() {
  return (
    <Container>
      <section className="py-16">
        <p className="text-sm text-neutral-600">
          Simple SaaS • Real workflow • Clean output
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Collect better client briefs — without back-and-forth chaos.
        </h1>

        <p className="mt-4 max-w-2xl text-neutral-700">
          Briefly gives you a structured intake form that turns messy messages
          into a clean project brief. You get clarity. Your client feels guided.
          Your projects start faster.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/docs"
            className="rounded-md border px-4 py-2 text-sm hover:bg-neutral-50 hover:text-neutral-600"
          >
            Read the Docs
          </Link>

          <Link
            href="/login"
            className="rounded-md bg-black px-4 py-2 text-sm text-white hover:opacity-90"
          >
            Sign in
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h2 className="font-medium">Structured questions</h2>
            <p className="mt-2 text-sm text-neutral-700">
              You control the template. Clients answer one clean form. No
              scattered chats.
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <h2 className="font-medium">Clean submissions</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Every brief arrives in the same format, so you can estimate and
              scope faster.
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <h2 className="font-medium">Professional default</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Even a small studio looks enterprise-grade when intake is
              consistent.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
