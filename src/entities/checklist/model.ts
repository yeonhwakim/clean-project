import { Task } from "../../shared/typing/server";

const tasks: Task[] = [
  {
    id: 1,
    checklistId: 1,
    name: "화장실청소",
    isChecked: false,
  },
  {
    id: 2,
    checklistId: 1,
    name: "분리수거",
    isChecked: false,
  },
];

export const useTask = (itemId: number) => {
  return tasks.find((item) => item.id === itemId);
};

export const updateTaskCheckState = (itemId: number) => {
  const task = tasks.find((i) => i.id === itemId);

  if (!task) {
    throw new Error("item not found");
  }

  task.isChecked = !task.isChecked;
};
