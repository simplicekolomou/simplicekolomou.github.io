declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

import { AnalyticsEvent } from "./events";
import { AnalyticsParams } from "./types";

export function trackGoogle(
    event: AnalyticsEvent,
    params?: AnalyticsParams
) {
    if (typeof window === "undefined") return;

    window.gtag?.("event", event, params);
}