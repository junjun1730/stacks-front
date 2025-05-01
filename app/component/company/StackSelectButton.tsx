import { useEffect, useState } from "react";

type StackSelectButtonProps = {
  name: string;
  imageSrc: string;
};

export function StackSelectButton({ name, imageSrc }: StackSelectButtonProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <button
      type="button"
      className={`flex flex-col justify-center rounded-2xl border ${
        isSelected
          ? "border-blue-100 bg-blue-50"
          : "border-none hover:bg-gray-50"
      }`}
      onClick={() => {
        setIsSelected(!isSelected);
      }}
    >
      <img
        src={imageSrc}
        alt={name}
        className="w-2/3 self-center rounded-2xl p-2"
      />
      <span className="w-full">{name}</span>
    </button>
  );
}
