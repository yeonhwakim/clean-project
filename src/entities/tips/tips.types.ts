import { z } from 'zod';
import { TipsSchema, PageQueryDtoSchema, FilterQuerySchema } from './tips.contracts';

export type Tips = z.infer<typeof TipsSchema>;

export type PageQueryDto = z.infer<typeof PageQueryDtoSchema>;

export type FilterQuery = z.infer<typeof FilterQuerySchema>;