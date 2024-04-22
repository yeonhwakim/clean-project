import Button from "../../shared/ui/button";
import Form from "../../shared/ui/form";
import Input from "../../shared/ui/input";

import { actions } from "./model/create-task";

export default function CreateTask() {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.addTask(actions.inputValue);
    actions.resetInput;
    actions.readTask;
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    actions.changeInput(e.target.value);
  };

  return (
    <Form onSubmitHandler={onSubmitHandler}>
      <Input
        placeholder="Please, add task."
        value={actions.inputValue}
        onChangeHandler={onChangeHandler}
      />
      <Button type="submit" name="Add" />
    </Form>
  );
}
