import { useFormatter, useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";
import { Article, Locale } from "../types";

export default function ArticleTeaser({ article }: { article: Article }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("ArticleTeaser");
  const format = useFormatter();

  return (
    <article className="mb-2 border-b-[0.5px] border-lime-300 pb-3 last-of-type:border-0">
      <h2 className="text-sm">
        <Link href={`/articles/${article.id}`}>
          {article.translations[locale].title}
        </Link>
      </h2>
      <div className="flex items-baseline justify-between text-xs font-light text-stone-500">
        <p>{t("author", { author: article.author })}</p>
        <p>
          {format.dateTime(Date.parse(article.publishedAt), {
            dateStyle: "short",
          })}
        </p>
      </div>
    </article>
  );
}
