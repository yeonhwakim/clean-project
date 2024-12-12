import { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import type { CreateChecklist } from "./checklist.types";

export type State = {
  checklist: CreateChecklist[];
};

export type Actions = {
  add: (name: string) => void;
  check: (id: number) => void;
  reset: () => void;
};

export type FilterState = State & Actions;

export const createChecklistFilterSlice =
  (
    initialState: State,
  ): StateCreator<
    FilterState,
    [['zustand/devtools', never]],
    [],
    FilterState
  > => (set) => ({
    ...initialState,
    read: () => set((state) => ({ checklist: [...state.checklist] })),
    add: (name: string) => set((state) => ({ checklist: [...state.checklist, { id: state.checklist.length + 1, name, checklistId: 1, isChecked: false }] }), false, 'add'),
    check: (id: number) => set((state) => ({ checklist: state.checklist.map((list) => ({ ...list, isChecked: list.id === id ? !list.isChecked : list.isChecked })) }), false, 'check'),
    reset: () => set({ checklist: [] }, false, 'reset'),
  });