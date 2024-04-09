export default function Input({
  placeholder,
  value,
  onChangeHandler,
}: {
  placeholder: string;
  value: string;
  onChangeHandler: (arg0: any) => void;
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
