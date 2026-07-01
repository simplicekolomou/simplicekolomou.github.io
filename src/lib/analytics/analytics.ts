import { trackGoogle } from "./google";
import { trackClarity } from "./clarity";

import { AnalyticsEvent } from "./events";
import { AnalyticsParams } from "./types";

export function track(
    event: AnalyticsEvent,
    params?: AnalyticsParams
) {
    trackGoogle(event, params);
    trackClarity(event);
}