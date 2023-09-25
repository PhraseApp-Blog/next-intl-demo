import { Locale } from "@/app/types";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("About");

  return (
    <main className="px-6 py-2">
      <h1 className="mb-2 mt-2 text-3xl font-bold text-lime-900">
        {t("title")}
      </h1>
      <p className="mt-2 text-lg">
        This is a demo of <a href="https://nextjs.org/">Next.js</a> App Router
        localization with{" "}
        <a href="https://next-intl-docs.vercel.app/">next-intl</a>.
      </p>
    </main>
  );
}
