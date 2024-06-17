import { z } from 'zod';

export const ProfileSchema = z.object({
  username: z.string(),
  bio: z.string(),
  image: z.string(),
  following: z.boolean(),
});

export const TipsSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  body: z.string(),
  tagList: z.string().array(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  favorited: z.boolean(),
  favoritesCount: z.number(),
  author: ProfileSchema,
});