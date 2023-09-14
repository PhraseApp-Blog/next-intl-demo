import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
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

  if (params.locale !== locale) {
    return notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
