export default function UpdateButton({
  type,
  name,
  id,
  update,
  onClickHandler,
}: {
  type: "submit" | "reset" | "button" | undefined;
  name: string;
  id: number;
  update: ({ id, name }: { id: number; name: string }) => void;
  onClickHandler: ({
    id,
    name,
    update,
  }: {
    id: number;
    name: string;
    update: ({ id, name }: { id: number; name: string }) => void;
  }) => void;
}) {
  return (
    <button type={type} onClick={() => onClickHandler({ id, update, name })}>
      {name}
    </button>
  );
}
