import { writable, type Writable } from "svelte/store";
import { getTasks } from "./api";
import type { iTask } from "./interfaces/tasks.";

export const storeTasks: Writable<iTask[]> = writable([]);

export const done: Writable<Boolean> = writable(false);

export const pending: Writable<Boolean> = writable(false);

/*
  Função para pegar os dados da API ordernar ele em ordem de não feitos e feitos.
*/

export const fetchTasks = async (): Promise<void> => {
  const items = await getTasks();
  const sortItems = items.sort((a: iTask, b: iTask) => {
    const doneA = Boolean(a.done);
    const doneB = Boolean(b.done);

    return doneA === doneB ? 0 : doneA ? 1 : -1;
  });
  storeTasks.set(sortItems);
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
