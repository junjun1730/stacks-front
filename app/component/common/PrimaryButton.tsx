type PrimaryButtonProps = {
  text: string;
  submitHandler: () => void;
};

export function PrimaryButton({ text, submitHandler }: PrimaryButtonProps) {
  return (
    <div className="flex justify-end mt-2">
      <button
        className="border-blue-500 bg-blue-400 cursor-pointer hover:bg-blue-50 hover:text-black duration-150 p-4 rounded-2xl font-bold text-white"
        onClick={submitHandler}
        type="button"
      >
        {text}
      </button>
    </div>
  );
}
