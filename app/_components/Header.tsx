import { Link } from "@/i18n.config";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="mb-3 border-b border-sky-900/75 pb-2 text-sm">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="font-medium text-sky-300"
            >
              {t("appTitle")}
            </Link>
          </li>
          <li>
            <Link
              href="/week"
              className="font-light text-sky-200"
            >
              {t("navLinks.week")}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-light text-sky-200"
            >
              {t("navLinks.about")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
