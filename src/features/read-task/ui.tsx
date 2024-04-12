import List from "../../shared/ui/list";
import Row from "../../shared/ui/row";

import { events } from "./model/read-task";

export default function ReadTask() {
  const {
    useChecklistStore: {
      use: { tasks },
    },
  } = events;
  return (
    tasks().length > 0 && (
      <List>
        {tasks().map(({ id, name }) => (
          <Row key={id}>{name}</Row>
        ))}
      </List>
    )
  );
}
