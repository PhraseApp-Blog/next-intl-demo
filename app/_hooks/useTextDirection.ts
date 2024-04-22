import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";

export type TextDirection = "ltr" | "rtl";

export default function useTextDirection(): TextDirection {
  const locale = useLocale();
  return isRtlLang(locale) ? "rtl" : "ltr";
}
