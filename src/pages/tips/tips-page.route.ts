import { createElement } from 'react';
import { RouteObject, redirect } from 'react-router-dom';
import { TipsPage } from './tips-page.ui';

export const tipsPageRoute: RouteObject = {
  path: 'tips',
  children: [
    {
      index: true,
      loader: async () => redirect('/tips/1'),
    },
    {
      path: ':tip_id',
      element: createElement(TipsPage),
      loader: async (args) => {
        console.log(args.params.tip_id);
      }
    }
  ]
}