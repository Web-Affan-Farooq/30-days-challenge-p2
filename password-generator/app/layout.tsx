import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pasword Generator Application",
  description: "Generate strong , unique and non-hackable passwords",
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
