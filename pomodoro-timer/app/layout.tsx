import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pomodoro timer",
  description: "Manage your workflow using pomodoro",
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
