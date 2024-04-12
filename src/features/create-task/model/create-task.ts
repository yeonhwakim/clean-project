import createSelectors from "../../../shared/store/selectors";
import inputStore from "../../../shared/store/input";
import { Task } from "../../../shared/typing/client";

const useCreateTaskStore = createSelectors(inputStore);

const onSubmitHandler = ({
  e,
  state,
  reset,
}: {
  e: React.FormEvent<HTMLFormElement>;
  state: string;
  reset: () => void;
}) => {
  e.preventDefault();

  if (!state) return;

  createTask({ name: state });
  reset();
};

const createTask = (task: Task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  localStorage.setItem(
    "tasks",
    JSON.stringify([...tasks, { ...task, userId: 1, id: tasks.length + 1 }])
  );
};

export const events = { onSubmitHandler, useCreateTaskStore };
