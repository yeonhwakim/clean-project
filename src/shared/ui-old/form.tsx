export default function Form({
  children,
  onSubmitHandler,
}: {
  children: React.ReactNode;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return <form onSubmit={onSubmitHandler}>{children}</form>;
}
