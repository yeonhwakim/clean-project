import { z } from "zod";
import { CreateChecklistSchema } from "./checklist.contracts";

export type CreateChecklist = z.infer<typeof CreateChecklistSchema>;
