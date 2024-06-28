import { StateCreator } from "zustand";
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

export const createArticleFilterSlice =
  (
    initialState: State,
  ): StateCreator<
    FilterState,
    [['zustand/devtools', never]],
    [],
    FilterState
  > =>
    (set) => ({
      ...initialState,
      add: (createChecklist: CreateChecklist) =>
        set({ createChecklist }, false, 'add'),
      reset: () => set(initialState, false, 'reset'),
    });