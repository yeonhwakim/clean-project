export default function Form({
  children,
  state,
  dispatch,
  onSubmitHandler,
}: {
  children: React.ReactNode;
  state: string;
  dispatch: React.Dispatch<React.SetStateAction<string>>;
  onSubmitHandler: ({
    e,
    state,
    dispatch,
  }: {
    e: React.FormEvent<HTMLFormElement>;
    state: string;
    dispatch: React.Dispatch<React.SetStateAction<string>>;
  }) => void;
}) {
  return (
    <form onSubmit={(e) => onSubmitHandler({ e, state, dispatch })}>
      {children}
    </form>
  );
}
