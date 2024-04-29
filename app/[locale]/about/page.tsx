import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function About({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("About");

  return (
    <main>
      <h1 className="text-xs font-thin">{t("title")}</h1>
      <p className="mb-3 text-lg">
        {t.rich("description", {
          linkToNext: (chunks) => (
            <a
              href="https://nextjs.org"
              className="text-sky-200 underline"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
      <p className="mb-2 rounded-md bg-slate-800 px-2 py-2 text-center text-sm text-sky-200">
        {t("liveDuration", { duration: 17280000.45 })}
      </p>
    </main>
  );
}
