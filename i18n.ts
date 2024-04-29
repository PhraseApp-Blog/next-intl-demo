import { Formats } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "./i18n.config";

function formatsFor(locale: Locale): Partial<Formats> {
  const localeFormats: Record<Locale, Partial<Formats>> = {
    "ar-eg": {
      number: {
        temperature: {
          style: "unit",
          unit: "celsius",
        },
      },
      dateTime: {
        longDay: {
          weekday: "long",
        },
      },
    },
    "en-us": {
      number: {
        temperature: {
          style: "unit",
          unit: "fahrenheit",
        },
      },
      dateTime: {
        longDay: {
          weekday: "long",
        },
      },
    },
  };

  return localeFormats[locale];
}

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) {
    return notFound();
  }

  return {
    messages: (await import(`./locales/${locale}.json`))
      .default,
    formats: {
      ...formatsFor(locale as Locale),
    },
  };
});
