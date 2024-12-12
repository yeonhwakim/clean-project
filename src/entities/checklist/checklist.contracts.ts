import { z } from "zod";

export const CreateChecklistSchema = z.object({
  id: z.number().optional(),
  checklistId: z.number().optional(),
  name: z.string().min(1),
  isChecked: z.boolean().optional(),
});
