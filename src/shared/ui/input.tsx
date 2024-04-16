export default function Input({
  placeholder,
  value,
  onChangeHandler,
}: {
  placeholder: string;
  value?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
