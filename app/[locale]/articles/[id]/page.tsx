import { Article, Locale } from "@/app/types";
import { useLocale } from "next-intl";

export default async function ArticlePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const article: Article = await fetch(`${process.env.API_URL}/${id}`, {
    next: { revalidate: +process.env.DEFAULT_CACHE_DURATION_IN_SECONDS! },
  }).then((res) => res.json());

  const { author, publishedAt, sourceUrl } = article;
  const locale = useLocale() as Locale;
  const { title, body } = article.translations[locale];

  return (
    <main className="px-6 py-2">
      <h1 className="mb-2 mt-2 text-3xl font-bold text-lime-900">{title}</h1>
      <div className="flex items-baseline justify-between">
        <div className="me-3 inline-block rounded-sm bg-lime-50/40 px-2 py-1 text-sm">
          <p className="text-stone-600">by {author}</p>
          <p className="text-stone-500">published {publishedAt}</p>
        </div>
        <div className="rounded-sm bg-lime-50/40 px-2 py-1 text-right text-sm">
          <p>
            source: <a href={sourceUrl}>euronews.green</a>
          </p>{" "}
          <p>
            [summarized by <a href="chat.openai.com/">ChatGPT</a>]
          </p>
        </div>
      </div>
      <p className="mt-2 text-lg">{body}</p>
    </main>
  );
}
