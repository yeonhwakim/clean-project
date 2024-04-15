import { create } from 'zustand'
import type { Task } from '../../shared/typing/server';

interface ChecklistStore {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
  getTask: (id: number) => Task | undefined;
}

const initialTasks: Task[] = [
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

export const useChecklistStore = create<ChecklistStore>((set) => ({
  tasks: [...initialTasks],
  addTask: (newTask) => set((state) => ({
    tasks: [...state.tasks, newTask]
  })),
  removeTask: (id) => set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== id)
  })),
  toggleTask: (id) => set((state) => ({
    tasks: state.tasks.map((task) => task.id === id ? { ...task, isChecked: !task.isChecked } : task)
  })),
  getTask: (id) => {
    return initialTasks.find((task) => task.id === id);
  }
}));

export const selectors = {
  useTask: (taskId: number) => useChecklistStore.getState().getTask(taskId),
}
