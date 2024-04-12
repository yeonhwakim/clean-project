export default function Form({
  children,
  state,
  add,
  read,
  reset,
  onSubmitHandler,
}: {
  children: React.ReactNode;
  state: string;
  add: (name: string) => void;
  read: () => void;
  reset: () => void;
  onSubmitHandler: ({
    e,
    state,
    add,
    read,
    reset,
  }: {
    e: React.FormEvent<HTMLFormElement>;
    state: string;
    add: (name: string) => void;
    read: () => void;
    reset: () => void;
  }) => void;
}) {
  return (
    <form onSubmit={(e) => onSubmitHandler({ e, state, add, read, reset })}>
      {children}
    </form>
  );
}
