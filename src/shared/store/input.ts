import { create } from "zustand";

interface InputState {
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const inputStore = create<InputState>()((set) => ({
  value: "",
  change: (e) => set(() => ({ value: e.target.value })),
  reset: () => set(() => ({ value: "" })),
}));

export default inputStore;