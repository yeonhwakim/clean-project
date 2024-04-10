export type Task = {
  name: string;
};

const createItem = (task: Task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  localStorage.setItem(
    "tasks",
    JSON.stringify([...tasks, { ...task, userId: 1, id: tasks.length + 1 }])
  );
};

const onChangeHandler = ({
  e,
  dispatch,
}: {
  e: React.ChangeEvent<HTMLInputElement>;
  dispatch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  dispatch(e.target.value);
};

const onSubmitHandler = ({
  e,
  state,
  dispatch,
}: {
  e: React.FormEvent<HTMLFormElement>;
  state: string;
  dispatch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  e.preventDefault();
  createItem({ name: state });
  dispatch("");
};

export const events = { createItem, onChangeHandler, onSubmitHandler };
