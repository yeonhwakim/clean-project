import { useEffect, useState } from "react";

import Button from "../../../shared/ui/button";
import Form from "../../../shared/ui/form";
import Input from "../../../shared/ui/input";

import { events } from "./model";
import { fetchItem } from "../../../entities/checklist/model";

export default function CreateItem() {
  const [task, setTask] = useState('');

  // 나중에 삭제
  useEffect(() => {
    fetchItem(1) // 유저정보처리 나중에
  },[])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!task) return

    events.createItem({ task })
    setTask('');
  }

  return (
    <Form onSubmitHandler={onSubmitHandler}>
      <Input
        placeholder="Please, add task."
        value={task}
        onChangeHandler={onChangeHandler}
      />
      <Button type="submit" name="Add" />
    </Form>
  );
}
