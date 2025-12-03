import type { Metadata } from "next";
import { Outfit, Cinzel } from "next/font/google";
import "./globals.css";
import { MusicProvider } from "./components/MusicContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BioQuest",
  description: "A journey through the systems of truth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${cinzel.variable} antialiased font-sans`}
      >
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}
