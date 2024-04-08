export default function Form({
  children,
  onSubmitHandler,
}: {
  children: React.ReactNode;
  onSubmitHandler: () => void;
}) {
  return <form onSubmit={onSubmitHandler}>{children}</form>;
}
