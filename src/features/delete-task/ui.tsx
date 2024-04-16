import RemoveButton from "../../shared/ui/removeButton";
import { events } from "./model";

export default function DeleteTask({ id }: { id: number }) {
  const {
    useChecklistStore: {
      use: { remove },
    },
    onClickHandler,
  } = events;
  return (
    <RemoveButton
      type="button"
      name="delete"
      id={id}
      remove={remove()}
      onClickHandler={onClickHandler}
    />
  );
}
