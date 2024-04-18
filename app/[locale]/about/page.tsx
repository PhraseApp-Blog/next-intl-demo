import { unstable_setRequestLocale } from "next-intl/server";

export default function About({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <h1 className="text-xs font-thin">About</h1>
      <p className="text-lg">
        This is a minimalistic mock weather app built with
        Next.js.
      </p>
    </main>
  );
}
