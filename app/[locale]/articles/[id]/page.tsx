import { Article, Locale } from "@/app/types";
import { useLocale, useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";

function Source({ url }: { url: string }) {
  const t = useTranslations("ArticlePage");

  return (
    <p>
      {t.rich("source", {
        a: (chunks) => <a href={url}>{chunks}</a>,
      })}
    </p>
  );
}

function SummaryCredit() {
  const t = useTranslations("ArticlePage");

  return (
    <p>
      {t.rich("summaryCredit", {
        a: (chunks) => <a href="https://chat.openai.com">{chunks}</a>,
      })}
    </p>
  );
}

export default async function ArticlePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const article: Article = await fetch(`${process.env.API_URL}/${id}`, {
    next: { revalidate: +process.env.DEFAULT_CACHE_DURATION_IN_SECONDS! },
  }).then((res) => res.json());

  // We can call useLocale() here because this is a dynamic page.
  const locale = useLocale() as Locale;
  // We need to call getTranslator() here because this is an async page.
  const t = await getTranslator(locale, "ArticlePage");

  const { author, publishedAt, sourceUrl } = article;
  const { title, body } = article.translations[locale];

  return (
    <main className="px-6 py-2">
      <h1 className="mb-2 mt-2 text-3xl font-bold text-lime-900">{title}</h1>
      <div className="flex items-baseline justify-between">
        <div className="me-3 inline-block rounded-sm bg-lime-50/40 px-2 py-1 text-sm">
          <p className="text-stone-600">{t("author", { author })}</p>
          <p className="text-stone-500">
            {t("publishDate", { date: Date.parse(publishedAt) })}
          </p>
        </div>
        <div className="rounded-sm bg-lime-50/40 px-2 py-1 text-right text-sm">
          <Source url={sourceUrl} /> <SummaryCredit />
        </div>
      </div>
      <p className="mt-2 text-lg">{body}</p>
    </main>
  );
}
