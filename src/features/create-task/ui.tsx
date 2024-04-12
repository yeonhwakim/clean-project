import Button from "../../shared/ui/button";
import Form from "../../shared/ui/form";
import Input from "../../shared/ui/input";

import { events } from "./model/create-task";

export default function CreateTask() {
  const {
    useCreateTaskStore: {
      use: { value, reset, change },
    },
    useChecklistStore: {
      use: { add, read },
    },
    onSubmitHandler,
  } = events;

  return (
    <Form
      state={value()}
      add={add()}
      read={read()}
      reset={reset()}
      onSubmitHandler={onSubmitHandler}
    >
      <Input
        placeholder="Please, add task."
        value={value()}
        onChangeHandler={change()}
      />
      <Button type="submit" name="Add" />
    </Form>
  );
}
