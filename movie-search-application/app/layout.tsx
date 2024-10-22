import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie search application",
  description: "Search and explore movies",
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
