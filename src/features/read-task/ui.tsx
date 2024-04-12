import List from "../../shared/ui/list";
import Task from "../../widgets/task/ui";

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
          <Task key={id} id={id} name={name}></Task>
        ))}
      </List>
    )
  );
}
