import { useEffect, useState } from "react";

import Button from "../../shared/ui/button";
import Form from "../../shared/ui/form";
import Input from "../../shared/ui/input";

import { events } from "./model";
import { fetchItem } from "../../entities/checklist/model";

export default function CreateItem() {
  const [task, setTask] = useState("");

  // 나중에 삭제
  useEffect(() => {
    fetchItem(1);
  }, []);

  return (
    <Form
      state={task}
      dispatch={setTask}
      onSubmitHandler={events.onSubmitHandler}
    >
      <Input
        placeholder="Please, add task."
        value={task}
        dispatch={setTask}
        onChangeHandler={events.onChangeHandler}
      />
      <Button type="submit" name="Add" />
    </Form>
  );
}
