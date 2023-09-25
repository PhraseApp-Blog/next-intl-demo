import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";
import useLocaleNames from "../_hooks/useLocaleNames";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const localeNames = useLocaleNames();

  return (
    <header className=" bg-lime-100 px-2 pb-2 pt-1 shadow-sm shadow-lime-950/5">
      <div className="mx-auto flex max-w-[700px] items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/dirkha-logo.svg"
              alt={t("logoAlt")}
              width={50}
              height={50}
              className="relative h-10 w-10  ltr:-right-[2px] rtl:-left-[2px] rtl:rotate-180"
            />
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-lime-900">
                {t("title")}
              </div>
              <div className="-mt-1 text-xs font-light text-lime-900">
                {t("subtitle")}
              </div>
            </div>
          </Link>
          <Link href="/about" className="-mt-1 ms-6">
            {t("nav.about")}
          </Link>
        </div>
        <div>
          <LocaleSwitcher localeNames={localeNames} />
        </div>
      </div>
    </header>
  );
}
