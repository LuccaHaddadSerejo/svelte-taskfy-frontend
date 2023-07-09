import { writable } from "svelte/store";

export const refreshTasks = writable(false);

export const handleTasksFetched = () => {
  refreshTasks.set(true);
};
