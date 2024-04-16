import DeleteTask from "../../features/delete-task/ui";
import UpdateTask from "../../features/update-task/ui";
import Row from "../../shared/ui/row";

export default function Task({ id, name }: { id: number; name: string }) {
  return (
    <Row>
      {name}
      {/* <UpdateTask id={id} /> */}
      {/* <DeleteTask id={id} /> */}
    </Row>
  );
}
