import {
  type iSubtask,
  type iTask,
  type tCreateSubtask,
  type tCreateTask,
  type tPartialTask,
} from "./interfaces/tasks.";
import { fetchTasks } from "./store";

const baseURL = "http://localhost:3000/";

export const getTasks = async (): Promise<iTask[]> => {
  try {
    const res = await fetch(`${baseURL}tasks`);
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
    const res: Response = await fetch(`${baseURL}tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      await res.json();
      await fetchTasks();
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
    const res: Response = await fetch(`${baseURL}tasks/${id + ""}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const resData = await res.json();
      if (resData.done) {
        resData.subtasks.map((subtask: iSubtask) => {
          const updatedObj = {
            done: true,
          };
          updateSubtask(updatedObj, subtask.id);
        });
      }
      await fetchTasks();
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    const formatData = String(id);
    const res = await fetch(`${baseURL}tasks/${formatData}`, {
      method: "DELETE",
    });
    if (res.ok) {
      await fetchTasks();
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
    const res: Response = await fetch(`${baseURL}subtasks/${id + ""}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      await res.json();
      await fetchTasks();
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
    const res: Response = await fetch(`${baseURL}subtasks/${String(id)}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      await res.json();
      await fetchTasks();
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteSubtask = async (id: number): Promise<void> => {
  try {
    const res = await fetch(`${baseURL}subtasks/${id + ""}`, {
      method: "DELETE",
    });
    if (res.ok) {
      await fetchTasks();
    }
  } catch (error) {
    console.error(error);
  }
};
