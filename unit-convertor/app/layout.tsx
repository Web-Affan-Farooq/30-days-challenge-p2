import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unit convertor application",
  description: "Convert units easily",
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
