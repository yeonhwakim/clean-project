export default function Form({
  children,
  state,
  reset,
  onSubmitHandler,
}: {
  children: React.ReactNode;
  state: string;
  reset: () => void;
  onSubmitHandler: ({
    e,
    state,
    reset,
  }: {
    e: React.FormEvent<HTMLFormElement>;
    state: string;
    reset: () => void;
  }) => void;
}) {
  return (
    <form onSubmit={(e) => onSubmitHandler({ e, state, reset })}>
      {children}
    </form>
  );
}
