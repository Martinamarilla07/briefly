import { Container } from "@/components/container";

export default function DocsPage() {
  return (
    <Container>
      <section className="py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Docs</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Briefly is a simple SaaS for collecting project briefs. This docs
          section will stay intentionally short: it explains what the product
          does, what data it stores, and how permissions work.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-lg font-medium">What it does</h2>
            <p className="mt-2 text-neutral-700">
              You create a brief template. You share a link. Clients submit
              answers. You review submissions in your dashboard. The core
              promise is consistency: every brief arrives in the same shape.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Data we store</h2>
            <p className="mt-2 text-neutral-700">
              At minimum: your account, your templates, and the submissions. We
              keep everything scoped to your workspace. Later we will add safe
              defaults, input validation, and the ability to delete data
              cleanly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Permissions</h2>
            <p className="mt-2 text-neutral-700">
              We will keep permissions simple: an owner can manage templates and
              submissions. Public users can only submit a brief via a public
              link. That separation is the core security boundary of the
              product.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
