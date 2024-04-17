import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en-us", "ar-eg"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  "en-us": "English",
  "ar-eg": "العربية (Arabic)",
};

export const { Link, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
