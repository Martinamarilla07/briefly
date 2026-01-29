import { Container } from "@/components/container";

export default function LoginPage() {
  return (
    <Container>
      <section className="py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Login</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          In the next step we’ll connect this page to Auth.js so you can sign in
          and access the dashboard. For now, this page exists so the product
          navigation is real and we can verify routing and layouts are correct.
        </p>

        <div className="mt-8 rounded-lg border p-4">
          <p className="text-sm text-neutral-700">
            Next: we’ll add a real sign-in form and session handling here.
          </p>
        </div>
      </section>
    </Container>
  );
}
