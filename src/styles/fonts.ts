import { JetBrains_Mono, Manrope, Newsreader } from "next/font/google";

export const display = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["500", "600", "700"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
