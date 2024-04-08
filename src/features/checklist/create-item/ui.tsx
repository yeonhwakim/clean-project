import Button from "../../../shared/ui/button";
import Form from "../../../shared/ui/form";
import Input from "../../../shared/ui/input";

import { events } from "./model";

export default function CreateItem() {
  // input value 상태관리
  return (
    <Form onSubmitHandler={events.createItem}>
      <Input
        placeholder="Please, add task."
        value=""
        onChangeHandler={() => {}}
      />
      <Button name="Add" onClickHandler={() => {}} />
    </Form>
  );
}
