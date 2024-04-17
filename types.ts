export interface WeeklyWeatherRoot {
  weeklyWeather: WeeklyWeather[];
}

export interface WeeklyWeather {
  dateTime: string;
  condition: string;
  conditionIcon: string;
  temperature: Temperature;
}

export interface Temperature {
  celsius: number;
  fahrenheit: number;
}
