import { QueryClientProvider } from "./QueryClientProvider";
import { BrowserRouter } from "./RouterProvider";

export function Providers() {
  return (
    <QueryClientProvider>
      <BrowserRouter />
    </QueryClientProvider>
  );
}
