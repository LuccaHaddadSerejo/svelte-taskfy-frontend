import { writable, type Writable } from "svelte/store";

export const refreshTasks: Writable<Boolean> = writable(false);

export const done: Writable<Boolean> = writable(false);

export const pending: Writable<Boolean> = writable(false);

export const handleTasksFetched = (): void => {
  refreshTasks.set(true);
};

export const filterByDoneTasks = (): void => {
  done.set(true);
  pending.set(false);
};

export const filterByPendingTasks = (): void => {
  pending.set(true);
  done.set(false);
};

export const clearFilters = (): void => {
  done.set(false);
  pending.set(false);
};
