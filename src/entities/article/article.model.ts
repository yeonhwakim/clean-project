import { StateCreator } from "zustand";
import { CreateChecklist } from "../checklist/checklist.types";

export type State = {
  CreateChecklist: CreateChecklist;
};

export type Actions = {
  createFilter: (filterQuery: CreateChecklist) => void;
  reset: () => void;
};

export type FilterState = State & Actions;
export const createArticleFilterSlice =
  (
    initialState: State
  ): StateCreator<
    FilterState,
    [["zustand/devtools", never]],
    [],
    FilterState
  > =>
  (set) => ({
    ...initialState,
    changeFilter: (filterQuery: FilterQuery) =>
      set({ filterQuery }, false, "changeFilter"),
    reset: () => set(initialState, false, "reset"),
  });
