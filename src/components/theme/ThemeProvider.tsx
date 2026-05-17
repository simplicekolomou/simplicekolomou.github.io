"use client";
import {Attribute, ThemeProvider as NextThemeProvider} from "next-themes";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    attribute?: Attribute;
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
};

export default function ThemeProvider({
                                          children,
                                          attribute = "class",
                                          defaultTheme = "system",
                                          enableSystem = true,
                                          disableTransitionOnChange = true,
                                      }: Props) {
    return (
        <NextThemeProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            disableTransitionOnChange={disableTransitionOnChange}
        >
            {children}
        </NextThemeProvider>
    );
}
