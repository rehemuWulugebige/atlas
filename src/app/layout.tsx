import type { Metadata } from "next";
import { display, manrope } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darya — Handmade Uyghur Desserts",
  description:
    "Handmade Uyghur desserts from a home kitchen in Fairfax, Virginia. Weekly menu, pickup only — order by message.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${manrope.variable} h-full antialiased`}>
      <body className="font-body flex min-h-full flex-col">{children}</body>
    </html>
  );
}
