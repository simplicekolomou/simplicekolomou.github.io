import "@/globals.css";
import React, { ReactNode } from "react";
import NavBar from "@/components/navBar/NavBar";
import ThemeProvider from "@/components/theme/ThemeProvider";
import Footer from "@/components/footer/Footer";

export const metadata = {
    title: "Simplice Kolomou",
    description: "Portfolio développeur",
    icons: {
        icon: "/images/profile/favicon.ico",
        shortcut: "/images/profile/favicon-32x32.png",
        apple: "/images/profile/apple-touch-icon.png",
    },
};
export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
      <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavBar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
          </ThemeProvider>
      </body>
      </html>
  );
}
