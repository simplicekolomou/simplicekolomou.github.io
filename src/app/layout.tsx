import "@/globals.css";
import React, {ReactNode} from "react";
import NavBar from "@/components/navBar/NavBar";
import ThemeProvider from "@/components/theme/ThemeProvider";
import Footer from "@/components/footer/Footer";
import type {Metadata} from "next";
import ClarityProvider from "@/components/analytics/Clarity";
import GoogleAnalyticProvider from "@/components/analytics/GoogleAnalytic";

export const metadata: Metadata = {
    title: "Simplice Kolomou",
    description: "Portfolio développeur",
    icons: {
        icon: "/images/profile/favicon.ico",
        shortcut: "/images/profile/favicon-32x32.png",
        apple: "/images/profile/apple-touch-icon.png",
    },
};
export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ClarityProvider />
            <NavBar/>
            <main className="flex-1">
                {children}
                <GoogleAnalyticProvider />
            </main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
