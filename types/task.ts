export interface Task {
    id: number;
    title: string;
    stats_at: string;
    ends_at: string;
    total: string;
    formatted_total: string;
    formatted_duration: string;
    duration_in_minutes: number
    project_id: number
};