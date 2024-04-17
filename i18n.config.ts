import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en-us", "ar-eg"] as const;
export type Locale = (typeof locales)[number];

export const { Link, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
