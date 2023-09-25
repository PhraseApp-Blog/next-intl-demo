import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import useTextDirection from "../_hooks/useTextDirection";
import "../globals.css";
import { Locale } from "../types";

export const metadata: Metadata = {
  title: "Dirkha - Good Green News",
  description: "Created using Next.js",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale = useLocale() as Locale;
  const dir = useTextDirection();

  if (params.locale !== locale) {
    return notFound();
  }

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
