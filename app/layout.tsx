import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Приглашение на день рождения Юлии",
  description: "Вы приглашены на вечеринку. День рождения Юлии — 11 октября 2026, Эспоо.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
