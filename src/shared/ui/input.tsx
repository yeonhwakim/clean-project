export default function Input({
  placeholder,
  value,
  dispatch,
  onChangeHandler,
}: {
  placeholder: string;
  value: string;
  dispatch: React.Dispatch<React.SetStateAction<string>>;
  onChangeHandler: ({
    e,
    dispatch,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    dispatch: React.Dispatch<React.SetStateAction<string>>;
  }) => void;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeHandler({ e, dispatch })}
    />
  );
}
