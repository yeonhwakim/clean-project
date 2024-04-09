export default function Form({
  children,
  onSubmitHandler,
}: {
  children: React.ReactNode;
  onSubmitHandler: (arg0: any) => void;
}) {
  return <form onSubmit={onSubmitHandler}>{children}</form>;
}
