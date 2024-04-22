import inputStore from "../../../shared/store/input";
import checklistStore from "../../../shared/store/checklist";
// import { create } from "zustand";

// interface InputState {
//   value: string;
//   change: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   reset: () => void;
// }

// export const inputStore = create<InputState>()((set) => ({
//   value: "",
//   change: (e) => set(() => ({ value: e.target.value })),
//   reset: () => set(() => ({ value: "" })),
// }));

export const actions = {
  readTask: checklistStore.getState().read,
  addTask: checklistStore.getState().add,
  resetInput: inputStore.getState().reset,
  changeInput: inputStore.getState().change,
  inputValue: inputStore.getState().value,
};
