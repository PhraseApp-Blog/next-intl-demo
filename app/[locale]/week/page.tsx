import type { WeeklyWeatherRoot } from "@/types";
import {
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

export default async function Week({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  const response = await fetch(
    "http://localhost:3000/week.json",
  );
  const { weeklyWeather } =
    (await response.json()) as WeeklyWeatherRoot;

  const t = await getTranslations("Week");

  return (
    <main>
      <div className="flex items-baseline justify-between">
        <h1 className="text-xs font-thin">
          This week&apos;s weather
        </h1>
        <p className="w-max rounded-md bg-red-900 px-2 py-1 text-xs text-red-100">
          {t("alertCount", { count: 3 })}
        </p>
      </div>
      <div className="divide-y divide-dashed divide-sky-900">
        {weeklyWeather.map((day) => (
          <section key={day.dateTime} className="py-5">
            <h2 className="mb-1 text-lg font-thin">
              {new Date(day.dateTime).toString()}
            </h2>
            <div>
              <div className="flex items-baseline gap-3">
                <p className="relative top-1 text-4xl">
                  {day.conditionIcon}
                </p>
                <p className="text-3xl font-light">
                  {t(day.condition)}
                </p>
                <p className="text-3xl font-thin">
                  {day.temperature.celsius}°C
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
