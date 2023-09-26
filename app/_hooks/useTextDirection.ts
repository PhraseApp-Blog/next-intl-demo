import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";
import { LocaleDirection } from "../types";

export default function useTextDirection(): LocaleDirection {
  const locale = useLocale();
  return isRtlLang(locale) ? "rtl" : "ltr";
}
