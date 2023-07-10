import {
  type iTask,
  type tCreateTask,
  type tPartialTask,
} from "./interfaces/tasks.";

export const createTask = async (data: tCreateTask): Promise<void> => {
  try {
    const res: Response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      await res.json();
    }
  } catch (error) {
    console.error(error);
  }
};

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
    if (!res.ok) {
      await res.json();
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    const formatData = String(id);
    await fetch(`http://localhost:3000/tasks/${formatData}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};
