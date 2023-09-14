export default function Home() {
  return (
    <main className="px-4 py-2">
      <h1 className="mb-1 text-sm font-light">Featured stories</h1>
      <article className="relative max-h-[225px] w-1/2 overflow-hidden rounded-md">
        <img
          src="/stories/ben-stern-4n96lyJd2Xs-unsplash.jpg"
          alt=""
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
    </main>
  );
}
