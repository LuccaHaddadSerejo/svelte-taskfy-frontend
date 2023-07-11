import {
  type iTask,
  type tCreateSubtask,
  type tCreateTask,
  type tPartialTask,
} from "./interfaces/tasks.";
import { storeTasks } from "./store";

export const getTasks = async (): Promise<iTask[]> => {
  try {
    const res = await fetch("http://localhost:3000/tasks");
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (data: tCreateTask): Promise<void> => {
  try {
    const res: Response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      await res.json();
      const tasksData: iTask[] = await getTasks();
      const sortItems: iTask[] = tasksData.sort((a: iTask, b: iTask) => {
        const doneA = Boolean(a.done);
        const doneB = Boolean(b.done);

        return doneA === doneB ? 0 : doneA ? 1 : -1;
      });
      storeTasks.set([...sortItems]);
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = async (
  data: tPartialTask,
  id: number
): Promise<void> => {
  try {
    const res: Response = await fetch(
      `http://localhost:3000/tasks/${String(id)}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (res.ok) {
      const resData = await res.json();
      const tasksData: iTask[] = await getTasks();
      if (resData.done) {
        resData.subtasks.map((elt: any) => {
          const updatedObj = {
            done: true,
          };
          updateSubtask(updatedObj, elt.id);
        });
      }
      const sortItems: iTask[] = tasksData.sort((a: iTask, b: iTask) => {
        const doneA = Boolean(a.done);
        const doneB = Boolean(b.done);

        return doneA === doneB ? 0 : doneA ? 1 : -1;
      });
      storeTasks.set([...sortItems]);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    const formatData = String(id);
    const res = await fetch(`http://localhost:3000/tasks/${formatData}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const tasksData: iTask[] = await getTasks();
      const sortItems: iTask[] = tasksData.sort((a: iTask, b: iTask) => {
        const doneA = Boolean(a.done);
        const doneB = Boolean(b.done);

        return doneA === doneB ? 0 : doneA ? 1 : -1;
      });
      storeTasks.set([...sortItems]);
    }
  } catch (error) {
    console.error(error);
  }
};

export const createSubtask = async (
  data: tCreateSubtask,
  id: number
): Promise<void> => {
  try {
    const formattedData = id + "";
    const res: Response = await fetch(
      `http://localhost:3000/subtasks/${formattedData}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (res.ok) {
      await res.json();
      const tasksData: iTask[] = await getTasks();
      const sortItems: iTask[] = tasksData.sort((a: iTask, b: iTask) => {
        const doneA = Boolean(a.done);
        const doneB = Boolean(b.done);

        return doneA === doneB ? 0 : doneA ? 1 : -1;
      });
      storeTasks.set([...sortItems]);
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateSubtask = async (
  data: tPartialTask,
  id: number
): Promise<void> => {
  try {
    const res: Response = await fetch(
      `http://localhost:3000/subtasks/${String(id)}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (res.ok) {
      await res.json();
      const tasksData: iTask[] = await getTasks();
      const sortItems: iTask[] = tasksData.sort((a: iTask, b: iTask) => {
        const doneA = Boolean(a.done);
        const doneB = Boolean(b.done);

        return doneA === doneB ? 0 : doneA ? 1 : -1;
      });
      storeTasks.set([...sortItems]);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteSubtask = async (id: number): Promise<void> => {
  try {
    const formatData = String(id);
    const res = await fetch(`http://localhost:3000/subtasks/${formatData}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const tasksData: iTask[] = await getTasks();
      const sortItems: iTask[] = tasksData.sort((a: iTask, b: iTask) => {
        const doneA = Boolean(a.done);
        const doneB = Boolean(b.done);

        return doneA === doneB ? 0 : doneA ? 1 : -1;
      });
      storeTasks.set([...sortItems]);
    }
  } catch (error) {
    console.error(error);
  }
};
