'use client'

import Script from "next/script";

export default function GoogleAnalyticProvider() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (!gaId) {
        console.warn("Google Analytics ID is not defined in environment variables.");
        return null;
    }

    return (
        <>
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
        </>
    );
}