import { z } from 'zod';
import { TipsSchema } from './tips.contracts';

export type Tips = z.infer<typeof TipsSchema>;