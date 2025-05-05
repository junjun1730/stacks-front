"use client";

type ToggleButtonProps = {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
};

export function ToggleButton({
  isSelected,
  setIsSelected,
  text,
}: ToggleButtonProps) {
  const onClickHandler = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      onClick={onClickHandler}
      className="flex justify-between cursor-pointer py-6 px-3 hover:bg-gray-100 text-3xl w-full text-left font-bold focus:outline-none"
    >
      <button type="button">{text}</button>
      <i
        className={`ri-arrow-down-s-line transition-transform duration-300 ${
          isSelected ? "rotate-180" : "rotate-0"
        }`}
      ></i>
    </div>
  );
}
