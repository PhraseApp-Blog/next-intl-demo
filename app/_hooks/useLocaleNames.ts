import { locales } from "@/i18nconfig";
import { useTranslations } from "next-intl";
import { Locale } from "../types";

export default function useLocaleNames(): Record<Locale, string> {
  const t = useTranslations("useLocaleNames");

  return locales.reduce(
    (acc, locale) => {
      acc[locale] = t(locale) as string;
      return acc;
    },
    {} as Record<Locale, string>,
  );
}
