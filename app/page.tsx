import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 py-2">
      <div className="flex">
        <div className="w-1/2 shrink-0">
          <div className="mb-2 text-sm font-light text-lime-900">
            <span className="-ml-1 rounded-sm bg-lime-50 px-1">
              Featured story
            </span>
          </div>
          <article className="relative h-[225px] w-full overflow-hidden rounded-md">
            <Image
              src="/stories/ben-stern-4n96lyJd2Xs-unsplash.jpg"
              alt="Image of oyester shells"
              fill={true}
              className="w-full"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-lime-950 to-lime-950/10 p-4">
              <h2 className="text-xl font-bold text-lime-200 drop-shadow-md">
                Cutting France's energy costs with discarded oyster shells
              </h2>
              <div className="flex items-baseline justify-between">
                <p className="text-stone-100">by Hannah Brown</p>
                <p className="text-xs text-stone-300">2023/08/23</p>
              </div>
            </div>
          </article>
        </div>

        <div className="ml-4">
          <div className="mb-1 text-sm font-light text-lime-900">
            <span className="-ml-1 rounded-sm bg-lime-50 px-1">
              The grapevine
            </span>
          </div>
          <article className="mb-2 border-b-[1px] border-stone-200 pb-3">
            <h2 className="text-sm">
              Montana court rules children have right to a healthy environment
              in major blow to fossil fuels
            </h2>
            <div className="flex items-baseline justify-between text-xs font-light text-stone-500">
              <p>by Euronews Green with AP</p>
              <p>2023/08/15</p>
            </div>
          </article>
          <article className="mb-2 border-b-[1px] border-stone-200 pb-3">
            <h2 className="text-sm">
              India slashes emissions rate by one-third in 14 years
            </h2>
            <div className="flex items-baseline justify-between text-xs font-light text-stone-500">
              <p>by Euronews Green with Reuters</p>
              <p>2023/08/10</p>
            </div>
          </article>
          <article className="">
            <h2 className="text-sm">
              Locals fix their broken items for free at this repair cafe
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
