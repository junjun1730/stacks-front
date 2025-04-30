"use client";

type ToggleButtonProps = {
  isSelected: boolean;
  setIsSeleted: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ToggleButton({ isSelected, setIsSelected }) {
  const onClickHandler = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      onClick={onClickHandler}
      className="flex justify-between cursor-pointer py-6 px-3 hover:bg-gray-100 text-3xl w-full text-left font-bold focus:outline-none"
    >
      <button className="">基本情報</button>
      <i
        className={`ri-arrow-down-s-line transition-transform duration-300 ${
          isSelected ? "rotate-180" : "rotate-0"
        }`}
      ></i>
    </div>
  );
}
