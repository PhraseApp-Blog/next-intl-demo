import Link from "next/link";
import { Article } from "../types";

export default function ArticleTeaser({ article }: { article: Article }) {
  return (
    <article className="mb-2 border-b-[0.5px] border-lime-300 pb-3 last-of-type:border-0">
      <h2 className="text-sm">
        <Link href={`/articles/${article.id}`}>
          {article.translations["en-US"].title}
        </Link>
      </h2>
      <div className="flex items-baseline justify-between text-xs font-light text-stone-500">
        <p>by {article.author}</p>
        <p>{article.publishedAt}</p>
      </div>
    </article>
  );
}
