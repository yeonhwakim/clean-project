import CreateItem from "../../features/create-task/ui";
import { ToggleTask } from "../../features/toggle-task";
import Layout from "../../widgets/layout/ui";

export default function Home() {
  return (
    <Layout>
      <CreateItem />
      <ToggleTask itemId={1}/>
    </Layout>
  );
}
