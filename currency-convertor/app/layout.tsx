import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Currency Convertor App",
  description: "Convert your money according to exchange rates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
