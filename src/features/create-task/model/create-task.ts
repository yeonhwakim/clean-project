import createSelectors from "../../../shared/store/selectors";
import inputStore from "../../../shared/store/input";
import checklistStore from "../../../shared/store/checklist";

const useCreateTaskStore = createSelectors(inputStore);
const useChecklistStore = createSelectors(checklistStore);

const onSubmitHandler = ({
  e,
  state,
  add,
  read,
  reset,
}: {
  e: React.FormEvent<HTMLFormElement>;
  state: string;
  add: (name: string) => void;
  read: () => void;
  reset: () => void;
}) => {
  e.preventDefault();

  if (!state) return;

  add(state);
  read();
  reset();
};

export const events = {
  onSubmitHandler,
  useCreateTaskStore,
  useChecklistStore,
};
