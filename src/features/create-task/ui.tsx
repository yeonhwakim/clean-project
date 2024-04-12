import { useEffect } from "react";

import Button from "../../shared/ui/button";
import Form from "../../shared/ui/form";
import Input from "../../shared/ui/input";

import { fetchItem } from "../../entities/checklist/model";

import { events } from "./model/create-task";

export default function CreateTask() {
  const {
    useCreateTaskStore: {
      use: { value, reset, change },
    },
    onSubmitHandler,
  } = events;

  // 나중에 삭제
  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <Form state={value()} reset={reset()} onSubmitHandler={onSubmitHandler}>
      <Input
        placeholder="Please, add task."
        value={value()}
        onChangeHandler={change()}
      />
      <Button type="submit" name="Add" />
    </Form>
  );
}
