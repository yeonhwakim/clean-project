export default function Checkbox({
  name,
  onClickHandler,
}: {
  name: string;
  onClickHandler?: () => void;
}) {
  return <input type="checkbox" onClick={onClickHandler}>{name}</input>;
}
