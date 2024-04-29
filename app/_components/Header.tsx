import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-3 border-b border-sky-900/75 pb-2 text-sm">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="font-medium text-sky-300"
            >
              Next.js Weather
            </Link>
          </li>
          <li>
            <Link
              href="/week"
              className="font-light text-sky-200"
            >
              This week
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-light text-sky-200"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
