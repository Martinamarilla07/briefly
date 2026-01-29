import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer>
      <Container>
        <div className="flex h-16 items-center justify-between text-sm">
          <p className="text-neutral-600">
            © {new Date().getFullYear()} Briefly
          </p>
          <p className="text-neutral-600">
            Collect better briefs. Ship faster.
          </p>
        </div>
      </Container>
    </footer>
  );
}
