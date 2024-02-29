import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Bobalerie",
  description: "Une marque streetware qui rapproche",
  icons: [{rel: "icon", type: "image/png", url: "/lb.ico"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" style={{scrollBehavior:'smooth'}}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
