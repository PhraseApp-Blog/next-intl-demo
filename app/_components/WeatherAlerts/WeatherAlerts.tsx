import { useTranslations } from "next-intl";
import ClientWeatherAlerts from "./ClientWeatherAlerts";

export default function WeatherAlerts({
  alerts,
}: Readonly<{ alerts: string[] }>) {
  const t = useTranslations("WeatherAlerts");

  return (
    <ClientWeatherAlerts
      title={t("title")}
      alerts={alerts}
    />
  );
}
