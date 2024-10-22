import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Color picker application",
  description: "Generate color of your choice",
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
