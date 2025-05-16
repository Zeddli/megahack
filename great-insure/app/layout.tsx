import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';

import "./globals.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import WalletContextProvider from "./components/WalletContextProvider";
import { AuthProvider } from "./contexts/AuthContext";

const inter = Inter({ subsets: ['latin'] });

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
        className={`${inter.className} antialiased`}
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
