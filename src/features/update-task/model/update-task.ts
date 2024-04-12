import createSelectors from "../../../shared/store/selectors";
import checklistStore from "../../../shared/store/checklist";

const useChecklistStore = createSelectors(checklistStore);

const onClickHandler = ({
  id,
  name,
  update,
}: {
  id: number;
  name: string;
  update: ({ id, name }: { id: number; name: string }) => void;
}) => {
  update({ id, name });
};

export const events = { useChecklistStore, onClickHandler };
