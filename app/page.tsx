import FeaturedArticle from "./_components/FeaturedArticle";
import { ApiData } from "./types";

export default async function Home() {
  const data: ApiData = await fetch("http://127.0.0.1:4000").then((res) =>
    res.json(),
  );

  const { featured } = data;

  return (
    <main className="px-4 py-2">
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
              3 stories
            </span>
          </div>
          <article className="mb-2 border-b-[0.5px] border-lime-300 pb-3">
            <h2 className="text-sm">
              🧺 Montana court rules children have right to a healthy
              environment in major blow to fossil fuels
            </h2>
            <div className="flex items-baseline justify-between text-xs font-light text-stone-500">
              <p>by Euronews Green with AP</p>
              <p>2023/08/15</p>
            </div>
          </article>
          <article className="mb-2 border-b-[0.5px] border-lime-300 pb-3">
            <h2 className="text-sm">
              🌳 India slashes emissions rate by one-third in 14 years
            </h2>
            <div className="flex items-baseline justify-between text-xs font-light text-stone-500">
              <p>by Euronews Green with Reuters</p>
              <p>2023/08/10</p>
            </div>
          </article>
          <article className="">
            <h2 className="text-sm">
              🧑‍🔧 Locals fix their broken items for free at this repair cafe
            </h2>
            <div className="flex items-baseline justify-between text-xs font-light text-stone-500">
              <p>by Angela Symons</p>
              <p>2023/08/04</p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
