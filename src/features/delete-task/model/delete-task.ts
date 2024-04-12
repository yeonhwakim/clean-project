import createSelectors from "../../../shared/store/selectors";
import checklistStore from "../../../shared/store/checklist";

const useChecklistStore = createSelectors(checklistStore);

const onClickHandler = ({
  id,
  remove,
}: {
  id: number;
  remove: (id: number) => void;
}) => {
  remove(id);
};

export const events = { useChecklistStore, onClickHandler };
