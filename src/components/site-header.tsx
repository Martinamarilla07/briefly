import Link from "next/link";
import { Container } from "./container";

export function SiteHeader() {
  <header>
    <Container>
      <div className="flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          Briefly
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/docs" className="hover:underline">
            Docs
          </Link>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </nav>
      </div>
    </Container>
  </header>;
}
