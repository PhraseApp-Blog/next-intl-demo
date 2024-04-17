export const locales = ["en-us", "ar-eg"] as const;
export type Locale = (typeof locales)[number];
