import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { TipsPage } from './tips-page.ui';
import { TipsListPage } from './tips-list-page.ui';

export const tipsPageRoute: RouteObject = {
  path: 'tips',
  children: [
    {
      index: true,
      element: createElement(TipsListPage),    
    },
    {
      path: ':slug',
      element: createElement(TipsPage),
      loader: async (args) => {
        console.log(args.params.slug);

        return args;
      }
    }
  ]
}