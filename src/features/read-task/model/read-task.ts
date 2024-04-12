import createSelectors from "../../../shared/store/selectors";
import checklistStore from "../../../shared/store/checklist";

const useChecklistStore = createSelectors(checklistStore);

export const events = { useChecklistStore };
