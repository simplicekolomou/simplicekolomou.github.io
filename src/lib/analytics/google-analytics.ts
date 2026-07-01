declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}
export const trackEvent = (
    eventName: string,
    parameters?: Record<string, unknown>
) => {
    if (typeof window === "undefined") {
        return;
    }

    window.gtag?.("event", eventName, parameters);
};