import { createElement } from 'react';
import { RouteObject, redirect } from 'react-router-dom';
import { TipsPage } from './tips-page.ui';
import { pathKeys } from '@/shared/lib/react-router';

export const tipsPageRoute: RouteObject = {
  path: 'tips',
  children: [
    {
      index: true,
      loader: async () => redirect(pathKeys.page404()),
    },
    {
      path: ':slug',
      element: createElement(TipsPage),
      loader: async (args) => {
        console.log(args.params.slug);
      }
    }
  ]
}