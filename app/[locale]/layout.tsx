import { locales } from "@/i18nconfig";
import type { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import useTextDirection from "../_hooks/useTextDirection";
import "../globals.css";
import { Locale } from "../types";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Dirkha - Good Green News",
  description: "Created using Next.js",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dir = useTextDirection();

  if (locales.includes(locale) === false) {
    return notFound();
  }

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} dir={dir}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
