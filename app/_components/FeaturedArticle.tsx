import { useLocale } from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";
import { Article, Locale } from "../types";

export default function FeaturedArticle({ article }: { article: Article }) {
  const { imgUrl, author, publishedAt } = article;
  const locale = useLocale() as Locale;
  const { title } = article.translations[locale];

  return (
    <article className="relative h-[225px] w-full overflow-hidden rounded-md">
      <Image
        src={imgUrl!}
        alt="Image of oyester shells"
        width={4630}
        height={4000}
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-lime-950 to-lime-950/10 p-4">
        <h2 className="text-xl/5 font-bold drop-shadow-md">
          <Link
            href={`/articles/${article.id}`}
            className="text-lime-200 hover:text-lime-300"
          >
            {title}
          </Link>
        </h2>
        <div className="flex items-baseline justify-between">
          <p className="text-stone-100">by {author}</p>
          <p className="text-xs text-stone-300">{publishedAt}</p>
        </div>
      </div>
    </article>
  );
}
