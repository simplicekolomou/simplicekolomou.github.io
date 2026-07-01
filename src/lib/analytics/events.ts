export const AnalyticsEvent = {
    CLICK_GITHUB: "click_github",
    CLICK_LINKEDIN: "click_linkedin",
    OPEN_PROJECT: "open_project",
    OPEN_DEMO: "open_demo",
    OPEN_REPOS: "open_repos",
} as const;

export type AnalyticsEvent = (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];