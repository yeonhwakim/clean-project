// // import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
// import { withErrorBoundary } from 'react-error-boundary';
// import { withSuspense } from '@/shared/lib/react';
// import { Loader } from '@/shared/ui/loader';
// import { ErrorHandler } from '@/shared/ui/error';

// function Page() {
//   return (
//     <div>
//       <h1>Tips List</h1>
//     </div>
//   );
// }

// const SuspensedPage = withSuspense(Page, {
//   fallback: <Loader />,
// });

// export const TipsListPage = withErrorBoundary(SuspensedPage, {
//   fallbackRender: ({ error }) => <ErrorHandler error={error} />,
// });
// -----old code-----

// import { useStore } from "zustand";
// import { tipsListFilterStore } from "./tips-list-page.model";

export function TipsListPage() {
  // const { tag } = useStore(tipsListFilterStore, (state) => state.filterQuery) || {};

  return (
    <div>Tips List Page</div>
  )
}