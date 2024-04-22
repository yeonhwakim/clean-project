import Layout from "../../widgets/layout/ui";
import CreateTask from "../../features/create-task/ui";
import ReadTask from "../../features/read-task/ui";

export default function Home() {
  return (
    <Layout>
      <CreateTask />
      <ReadTask />
    </Layout>
  );
}
