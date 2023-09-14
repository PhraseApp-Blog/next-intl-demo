import ArticleTeaser from "../_components/ArticleTeaser";
import FeaturedArticle from "../_components/FeaturedArticle";
import { ApiData } from "../types";

export default async function Home() {
  const data: ApiData = await fetch(process.env.API_URL!, {
    next: {
      revalidate: +process.env.DEFAULT_CACHE_DURATION_IN_SECONDS!,
    },
  }).then((res) => res.json());

  const { featured, feed } = data;

  return (
    <main className="mx-auto max-w-[700px] px-4 py-2">
      <div className="flex">
        <div className="w-1/2 shrink-0">
          <div className="mb-2 text-sm font-light text-lime-900">
            <span className="-ml-1 rounded-sm bg-lime-50 px-1">
              Featured story
            </span>
          </div>
          <FeaturedArticle article={featured} />
        </div>

        <div className="ml-4">
          <div className="mb-2 flex items-baseline justify-between text-sm font-light text-lime-900">
            <span className="-ml-1 rounded-sm bg-lime-50 px-1">
              The grapevine
            </span>
            <span className="inline-block rounded-sm bg-lime-50/40 px-1 text-xs">
              {feed.length} stories
            </span>
          </div>
          {feed.map((article) => (
            <ArticleTeaser article={article} key={article.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
