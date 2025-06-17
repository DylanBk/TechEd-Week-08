import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next MetaData",
  description: "A site to show how metadata is configured in Next",
  openGraph: {
    title: 'Next MetaData',
    description: "A site to show how metadata is configured in Next",
    type: 'website',
    url: 'http://localhost:3000',
    siteName: 'Next MetaData',
    locale: 'en_GB',
  },
  icons: {
    icon: 'globe.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
};
