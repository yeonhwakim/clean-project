import Button from "../../shared/ui/button";
import Form from "../../shared/ui/form";
import Input from "../../shared/ui/input";

import { actions } from "./model/create-task";

export default function CreateTask() {
  const { inputValue, changeInput } = actions;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.addTask(inputValue);
    actions.resetInput;
    actions.readTask;
  };

  return (
    <Form onSubmitHandler={onSubmitHandler}>
      <Input
        placeholder="Please, add task."
        value={inputValue}
        onChangeHandler={changeInput}
      />
      <Button type="submit" name="Add" />
    </Form>
  );
}
