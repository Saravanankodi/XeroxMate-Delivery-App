import type { Metadata } from "next";
import { Space_Grotesk, Hanuman, Cutive_Mono } from "next/font/google";
import "./globals.css";

const hanuman = Hanuman({
  subsets: ["khmer"],
  weight: ["400", "700"],
  variable: "--font-hanuman",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const cutiveMono = Cutive_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cutive-mono",
});

export const metadata: Metadata = {
  title: "XeroxMate",
  description: "XeroxMate Delivery Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanuman.variable} ${spaceGrotesk.variable} ${cutiveMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
