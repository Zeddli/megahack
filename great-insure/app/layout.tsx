import type { Metadata, Viewport } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import WalletContextProvider from "./components/WalletContextProvider";
import { AuthProvider } from "./contexts/AuthContext";

export const metadata: Metadata = {
  title: "Great Insure",
  description: "Affordable and instant parametric insurance for farming communities",
  keywords: ["insurance", "parametric", "farm protection", "micro-insurance", "instant payouts"],
  authors: [{ name: "Great Insure Team" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <WalletContextProvider>
          <AuthProvider>
            <Navigation />
            {children}
            <Footer />
          </AuthProvider>
        </WalletContextProvider>
      </body>
    </html>
  );
}
