export default function Button({
  type,
  name,
  onClickHandler,
}: {
  type: "submit" | "reset" | "button" | undefined;
  name: string;
  onClickHandler?: () => void;
}) {
  return (
    <button type={type} onClick={onClickHandler}>
      {name}
    </button>
  );
}
