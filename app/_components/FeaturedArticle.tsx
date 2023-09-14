import Image from "next/image";
import { Article } from "../types";

export default function FeaturedArticle({ article }: { article: Article }) {
  const { imgUrl, author, publishedAt } = article;
  const { title } = article.translations["en-US"];

  return (
    <article className="relative h-[225px] w-full overflow-hidden rounded-md">
      <Image fill src={imgUrl!} alt="Image of oyester shells" />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-lime-950 to-lime-950/10 p-4">
        <h2 className="text-xl/5 font-bold text-lime-200 drop-shadow-md">
          {title}
        </h2>
        <div className="flex items-baseline justify-between">
          <p className="text-stone-100">by {author}</p>
          <p className="text-xs text-stone-300">{publishedAt}</p>
        </div>
      </div>
    </article>
  );
}
