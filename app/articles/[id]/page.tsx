export default async function Article({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main className="px-4 py-2">
      <h1 className="text-2xl font-bold text-lime-900">Article {id}</h1>
    </main>
  );
}
