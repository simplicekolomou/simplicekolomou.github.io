import Clarity from "@microsoft/clarity";

import { AnalyticsEvent } from "./events";

export function trackClarity(event: AnalyticsEvent) {
    Clarity.event(event);
}