import checklistStore from "../../../shared/store/checklist";

const useChecklistStore = checklistStore;

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
