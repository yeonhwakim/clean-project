export default function RemoveButton({
  type,
  name,
  id,
  remove,
  onClickHandler,
}: {
  type: "submit" | "reset" | "button" | undefined;
  name: string;
  id: number;
  remove: (id: number) => void;
  onClickHandler: ({
    id,
    remove,
  }: {
    id: number;
    remove: (id: number) => void;
  }) => void;
}) {
  return (
    <button type={type} onClick={() => onClickHandler({ id, remove })}>
      {name}
    </button>
  );
}
