import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreshMart | Fresh Groceries",
  description: "Fresh groceries delivered to your door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}