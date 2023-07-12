import {
  type iSubtask,
  type iTask,
  type tCreateSubtask,
  type tCreateTask,
  type tPartialTask,
} from "./interfaces/tasks.";
import { fetchTasks } from "./store";

/*
  Documento com todas as funções que se comunicam com a API.
*/

const baseURL = "http://localhost:3000/";

export const getTasks = async (): Promise<iTask[]> => {
  try {
    const res = await fetch(`${baseURL}tasks`);
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.message[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (body: tCreateTask): Promise<void> => {
  try {
    const res: Response = await fetch(`${baseURL}tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (res.ok) {
      await fetchTasks();
    } else {
      throw new Error(data.message[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

/*
  Nessa função de atualizar tasks, caso o atributo "done" tenha sido atualizado, todas as subtasks do item serão atualizadas também.
*/

export const updateTask = async (
  body: tPartialTask,
  id: number
): Promise<void> => {
  try {
    const res: Response = await fetch(`${baseURL}tasks/${id + ""}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (res.ok) {
      if (data.done) {
        data.subtasks.map((subtask: iSubtask) => {
          const updatedSubtask = {
            done: true,
          };
          updateSubtask(updatedSubtask, subtask.id);
        });
      }
      await fetchTasks();
    } else {
      throw new Error(data.message[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    const res = await fetch(`${baseURL}tasks/${id + ""}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (res.ok) {
      await fetchTasks();
    } else {
      throw new Error(data.message[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

export const createSubtask = async (
  body: tCreateSubtask,
  id: number
): Promise<void> => {
  try {
    const res: Response = await fetch(`${baseURL}subtasks/${id + ""}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (res.ok) {
      await fetchTasks();
    } else {
      throw new Error(data.message[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateSubtask = async (
  body: tPartialTask,
  id: number
): Promise<void> => {
  try {
    const res: Response = await fetch(`${baseURL}subtasks/${String(id)}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (res.ok) {
      await fetchTasks();
    } else {
      throw new Error(data.message[0]);
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
    const data = await res.json();
    if (res.ok) {
      await fetchTasks();
    } else {
      throw new Error(data.message[0]);
    }
  } catch (error) {
    console.error(error);
  }
};
