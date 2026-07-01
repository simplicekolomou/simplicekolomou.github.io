import "@/globals.css";
import React, {ReactNode} from "react";
import NavBar from "@/components/navBar/NavBar";
import ThemeProvider from "@/components/theme/ThemeProvider";
import Footer from "@/components/footer/Footer";
import type {Metadata} from "next";
import ClarityProvider from "@/components/analytics/Clarity";
import Script from "next/script";

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
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    console.log("GAID : ", gaId);
    return (
        <html lang="fr" suppressHydrationWarning>
        <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ClarityProvider />
            <NavBar/>
            <main className="flex-1">
                {children}
                {gaId && (
                    <>
                        <Script
                            strategy="afterInteractive"
                            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                        />

                        <Script id="ga-init" strategy="afterInteractive">
                            {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${gaId}');
                          `}
                        </Script>
                    </>
                )}
            </main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
