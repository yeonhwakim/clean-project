export default function Button({
  name,
  onClickHandler,
}: {
  name: string;
  onClickHandler: () => void;
}) {
  return <button onClick={onClickHandler}>{name}</button>;
}
