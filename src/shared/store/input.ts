import { create } from "zustand";

interface InputState {
  value: string;
  change: (value: string) => void;
  reset: () => void;
}

const inputStore = create<InputState>()((set) => ({
  value: "",
  change: (value) => set({ value }),
  reset: () => set(() => ({ value: "" })),
}));

export default inputStore;
