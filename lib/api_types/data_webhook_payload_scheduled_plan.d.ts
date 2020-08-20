import { Query } from './query';
export declare enum DataWebhookPayloadScheduledPlanType {
    Look = "Look",
    Dashboard = "Dashboard"
}
export interface DataWebhookPayloadScheduledPlan {
    /** ID of the scheduled plan */
    scheduled_plan_id: number | null;
    /** Title of the scheduled plan. */
    title: string | null;
    /** Type of content of the scheduled plan. Valid values are: "Look", "Dashboard". */
    type: DataWebhookPayloadScheduledPlanType;
    /** URL of the content item in Looker. */
    url: string | null;
    /** ID of the query that the data payload represents. */
    query_id: number | null;
    /** Query that was run (not available for dashboards) */
    query: Query | null;
    /** A boolean representing whether this schedule payload has customized the filter values compared to the underlying content item. */
    filters_differ_from_look: boolean;
    /** A string to be included in scheduled integrations if this scheduled plan is a download query */
    download_url: string | null;
}
export interface RequestDataWebhookPayloadScheduledPlan {
}