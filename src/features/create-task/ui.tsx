import Button from "../../shared/ui/button";
import Form from "../../shared/ui/form";
import Input from "../../shared/ui/input";

import { actions, inputStore } from "./model/create-task";

export default function CreateTask() {

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // actions.addTask(inputValue);
    // actions.resetInput;
    // actions.readTask;
  };

  return (
    <Form onSubmitHandler={onSubmitHandler}>
      <Input
        placeholder="Please, add task."
        value={inputStore(state=> state.value)}
        onChangeHandler={inputStore(state=> state.change)}
      />
      <Button type="submit" name="Add" />
    </Form>
  );
}
