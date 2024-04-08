export default function Input({
  placeholder,
  value,
  onChangeHandler,
}: {
  placeholder: string;
  value: string;
  onChangeHandler: () => void;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  );
}
