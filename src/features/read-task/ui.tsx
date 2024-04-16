import List from "../../shared/ui/list";
import Task from "../../widgets/task/ui";

import { actions } from "./model/read-task";

export default function ReadTask() {
  const tasks = actions.tasks;
  return (
    tasks.length > 0 && (
      <List>
        {tasks.map(({ id, name }) => (
          <Task key={id} id={id} name={name}></Task>
        ))}
      </List>
    )
  );
}
