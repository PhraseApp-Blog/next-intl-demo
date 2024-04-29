import enUsMessages from "./locales/en-us.json";

type Messages = typeof enUsMessages;

declare global {
  interface IntlMessages extends Messages {}
}

export interface WeeklyWeatherRoot {
  weeklyWeather: WeeklyWeather[];
}

export interface WeeklyWeather {
  dateTime: string;
  condition: Condition;
  conditionIcon: string;
  temperature: Temperature;
}

export type Condition =
  | "sunny"
  | "cloudy"
  | "rainy"
  | "thunderstorms"
  | "showers";

export interface Temperature {
  celsius: number;
  fahrenheit: number;
}

export interface WeatherAlertsRoot {
  weatherAlerts: string[];
}
