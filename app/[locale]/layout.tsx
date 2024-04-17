import Header from "@/app/_components/Header";
import "@/app/globals.css";
import { Locale } from "@/i18n.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Weather",
  description:
    "A weather app built with Next.js and next-intl",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <html lang={locale}>
      <body className="mx-auto w-[500px] bg-slate-950 px-6 pt-3 text-sky-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
