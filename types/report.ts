import { Task } from "./task";

export interface Report {
    tasks: Task[];
    total_of_month: string;
    hours_of_month: string;
}