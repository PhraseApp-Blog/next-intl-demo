import { useFormatter, useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import WeatherAlerts from "../_components/WeatherAlerts/WeatherAlerts";

export default function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  const format = useFormatter();

  return (
    <main>
      <p className="mx-auto mb-2 w-max rounded-sm bg-slate-800 px-2 py-1 text-xs text-sky-200">
        {t("userGreeting", { name: "Noor" })}
      </p>

      <h1 className="text-xs font-thin">{t("title")}</h1>
      <h2 className="text-lg">
        {format.dateTime(new Date("2024-04-15T00:00:00Z"), {
          dateStyle: "full",
        })}
      </h2>

      <section className="mb-10">
        <div className="flex items-baseline gap-3">
          <p className="relative top-4 text-8xl">☀️</p>
          <p className="text-6xl font-light">
            {t("sunny")}
          </p>
          <p className="text-6xl font-thin">
            {format.number(22, {
              style: "unit",
              unit: "celsius",
            })}
          </p>
        </div>
      </section>

      <WeatherAlerts />
    </main>
  );
}
