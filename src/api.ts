import { type tCreateTask } from "./interfaces/tasks.";

export const getTasks = async (): Promise<any> => {
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
    if (!res.ok) {
      await res.json();
    }
  } catch (error) {
    console.error(error);
  }
};
