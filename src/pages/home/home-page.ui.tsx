import { CreateChecklistForm } from "@/widgets/create-checklist-form";
import { CreateChecklistList } from "@/widgets/create-checklist-list";

export function HomePage() {
  return (
    <div>
      <h1>CHECK LIST</h1>
      <section>
        <CreateChecklistForm />
        <CreateChecklistList />
      </section>
    </div>
  );
}
