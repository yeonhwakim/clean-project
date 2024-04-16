import checklistStore from "../../../shared/store/checklist";

export const actions = { tasks: checklistStore((state) => state.tasks) };
