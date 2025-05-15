import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import WalletContextProvider from "./components/WalletContextProvider";
import { AuthProvider } from "./contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
