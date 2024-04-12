import { create } from "zustand";
import { Task } from "../typing/server";

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

interface checklistState {
  tasks: Task[];
  read: () => void;
  add: (name: string) => void;
}

const checklistStore = create<checklistState>()((set) => ({
  tasks: [...tasks],
  read: () => set((state) => ({ tasks: [...state.tasks] })),
  add: (name) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: state.tasks.length + 1, name, checklistId: 1, isChecked: false },
      ],
    })),
}));

export default checklistStore;
