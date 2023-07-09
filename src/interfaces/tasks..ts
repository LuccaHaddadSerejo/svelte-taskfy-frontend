export interface iSubtask {
  readonly id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  done: boolean;
  taskId: number;
}

export interface iTask {
  readonly id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  done: boolean;
  subtasks: iSubtask[];
}

export type tCreateSubtask = Pick<iSubtask, "title">;
export type tCreateTask = Pick<iTask, "title">;
