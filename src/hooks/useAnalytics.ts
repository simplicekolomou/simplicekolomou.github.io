import { useCallback } from "react";
import { track } from "@/lib/analytics/analytics";
import { AnalyticsEvent } from "@/lib/analytics/events";
import { AnalyticsParams } from "@/lib/analytics/types";

export function useAnalytics() {
    const sendEvent = useCallback(
        (event: AnalyticsEvent, params?: AnalyticsParams) => {
            track(event, params);
        },
        []
    );

    return {
        track: sendEvent,
    };
}