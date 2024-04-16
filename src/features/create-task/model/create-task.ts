import inputStore from "../../../shared/store/input";
import checklistStore from "../../../shared/store/checklist";

export const actions = {
  readTask: checklistStore().read,
  addTask: checklistStore().add,
  resetInput: inputStore().reset,
  changeInput: inputStore().change,
  inputValue: inputStore().value,
};
