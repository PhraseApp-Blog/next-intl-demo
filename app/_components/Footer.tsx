import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="text-center">
      <p className="mt-1 inline-block border-t-[0.5px] border-lime-300 px-4 pt-2 text-center text-xs text-stone-600">
        {t.rich("footer", {
          euronewsLink: (chunks) => (
            <a
              href="https://www.euronews.com/green/2023/08/07/here-are-all-the-positive-environmental-stories-from-2023-so-far"
              className="inline-block rounded-sm bg-lime-50"
            >
              {chunks}
            </a>
          ),
          nextLink: (chunks) => (
            <a
              href="https://nextjs.org/"
              className="inline-block rounded-sm bg-lime-50"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
    </footer>
  );
}
