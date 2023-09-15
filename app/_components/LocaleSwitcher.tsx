"use client";

import { locales } from "@/i18nconfig";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { Locale } from "../types";

export default function LocaleSwitcher({
  localeNames,
}: {
  localeNames: Record<Locale, string>;
}) {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathName, { locale: e.target.value });
  };

  return (
    <div>
      <select
        value={locale}
        onChange={switchLocale}
        className="cursor-pointer appearance-none rounded-md bg-lime-200 bg-[url('/noun-chevron-3255112.svg')] bg-[101%_50%] bg-no-repeat py-1 pl-2 pr-7 shadow-sm shadow-lime-950/10"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeNames[locale]}
          </option>
        ))}
      </select>
    </div>
  );
}
