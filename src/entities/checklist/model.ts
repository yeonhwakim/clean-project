import { create } from 'zustand'
import { produce } from 'immer';
import type { Task } from '../../shared/typing/server';

interface ChecklistStore {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
  editTask: (id: number, newName: string) => void;
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
  addTask: (newTask) => set(produce((state: ChecklistStore) => {
    state.tasks.push(newTask);
  })),
  removeTask: (id) => set(produce((state: ChecklistStore) => {
    state.tasks = state.tasks.filter(task => task.id !== id);
  })),
  toggleTask: (id) => set(produce((state: ChecklistStore) => {
    const task = state.tasks.find(task => task.id === id);
    if (task) {
      task.isChecked = !task.isChecked;
    }
  })),
  editTask: (id, newName) => set(produce((state: ChecklistStore) => {
    const task = state.tasks.find(task => task.id === id);
    if (task) {
      task.name = newName;
    }
  })),
  getTask: (id) => {
    return initialTasks.find((task) => task.id === id);
  }
}));

export const selectors = {
  useTask: (taskId: number) => useChecklistStore.getState().getTask(taskId),
}
