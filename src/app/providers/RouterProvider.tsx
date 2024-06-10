import {
  RouterProvider,
  createBrowserRouter,
  redirect,
  useRouteError,
} from "react-router-dom";
import { homePageRoute } from "../../pages/home";
import { GenericLayout, NakedLayout } from "../../pages/layouts";
import { page404Route } from "../../pages/page-404";
import { pathKeys } from "../../shared/lib/react-router";

// https://github.com/remix-run/react-router/discussions/10166
function BubbleError() {
  const error = useRouteError();
  if (error) throw error;
  return null;
}

const router = createBrowserRouter([
  {
    errorElement: <BubbleError />,
    children: [
      {
        element: <GenericLayout />,
        children: [homePageRoute],
      },
      {
        element: <NakedLayout />,
        children: [page404Route],
      },
      {
        loader: async () => redirect(pathKeys.page404()),
        path: "*",
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
