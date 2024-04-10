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

export const fetchItem = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
