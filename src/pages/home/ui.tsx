
import CreateItem from "../../features/create-task/ui";
import { ToggleTask } from "../../features/toggle-task";
import Layout from "../../widgets/layout/ui";
import CreateTask from "../../features/create-task/ui";
import ReadTask from "../../features/read-task/ui";

export default function Home() {
  return (
    <Layout>
      <CreateTask />
      <ReadTask />
      <ToggleTask itemId={1}/>
    </Layout>
  );
}
