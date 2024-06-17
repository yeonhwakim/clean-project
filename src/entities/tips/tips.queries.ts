import {
  queryOptions as tsqQueryOptions,
} from '@tanstack/react-query';
import { queryClient } from '@/shared/lib/react-query'
import { Tips } from './tips.types';

const keys = {
  root: () => ['tips'],
  tips: (slug: string) => [...keys.root(), 'bySlug', slug],
}

export const tipsService = {
  queryKey: (slug: string) => keys.tips(slug),

  getCache: (slug: string) =>
    queryClient.getQueryData<Tips>(tipsService.queryKey(slug)),

  queryOptions: (slug: string) => {
    const tipsKey = tipsService.queryKey(slug);
    return tsqQueryOptions({
      queryKey: tipsKey,
      queryFn: async () => {
        return [];
      },
      initialData: () => [],
    })
  },
  prefetchQuery: async (slug: string) => {
    queryClient.prefetchQuery(tipsService.queryOptions(slug));
  }
}