import { withErrorBoundary } from 'react-error-boundary';
import { withSuspense } from '@/shared/lib/react';
import { Loader } from '@/shared/ui/loader';
import { ErrorHandler } from '@/shared/ui/error';

function Page() {
  return (
    <div>
      <h1>Tips</h1>
    </div>
  );
}

const SuspensedPage = withSuspense(Page, {
  fallback: <Loader />,
});

export const TipsPage = withErrorBoundary(SuspensedPage, {
  fallbackRender: ({ error }) => <ErrorHandler error={error} />,
});