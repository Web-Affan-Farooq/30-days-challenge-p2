import type { Metadata } from "next";
// import recipeContextProvider from "@/context/recipecontext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe Search App",
  description: "Create and Download recipes",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        {/* <recipeContextProvider> */}
          {children}
        {/* </recipeContextProvider> */}
      </body>
    </html>
  );
}
