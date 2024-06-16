import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { CreateChecklist } from "./checklist.types";

export type State = {
  createChecklist: CreateChecklist;
};

export type Actions = {
  add: (createChecklist: CreateChecklist) => void;
  reset: () => void;
};

export type FilterState = State & Actions;

const initialTasks: State[] = [
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

export const useChecklistStore = create<FilterState>()(
  devtools((set) => ({createChecklist: ...initialTasks, add: () =>}), { name: "checklist" })
);
