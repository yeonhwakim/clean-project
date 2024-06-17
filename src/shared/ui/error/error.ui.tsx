import { GenericError } from '@/shared/lib/fetch';

type ErrorHandlerProps = {
  error: GenericError<any>;
  size?: 'small' | 'medium' | 'large' | 'full';
}

export function ErrorHandler(props: ErrorHandlerProps) {
  const { error } = props;

  console.error(error);

  return (
    <div>
      <h1>Error</h1>
    </div>
  )
}