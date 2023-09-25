import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./app/_translations/${locale}.json`)).default,
  timeZone: "Africa/Cairo",
}));
