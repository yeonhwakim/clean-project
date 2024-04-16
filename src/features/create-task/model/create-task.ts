import inputStore from "../../../shared/store/input";
import checklistStore from "../../../shared/store/checklist";

export const actions = {
  readTask: checklistStore((state) => state.read),
  addTask: checklistStore((state) => state.add),
  resetInput: inputStore((state) => state.reset),
  changeInput: inputStore((state) => state.change),
  inputValue: inputStore((state) => state.value),
};
