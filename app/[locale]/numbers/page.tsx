import { useFormatter, useTranslations } from "next-intl";

export default function NumbersPage() {
  const t = useTranslations("Numbers");
  const format = useFormatter();

  return (
    <main className="px-6 py-2">
      <h1 className="mb-2 mt-2 text-3xl font-bold text-lime-900">
        {t("title")}
      </h1>
      <p className="mt-2 text-lg">{format.number(1200.99)}</p>
      <p className="mt-2 text-lg">
        {format.number(1200.99, { style: "currency", currency: "USD" })}
      </p>
      <p className="mt-2 text-lg">
        {format.number(0.26, { style: "percent" })}
      </p>
      <p className="mt-2 text-lg">{t("numberInMessage", { value: 1299 })}</p>
    </main>
  );
}
