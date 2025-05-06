"use client";

import { useState } from "react";

type CategoryButtonProps = {
  filterValue: string;
};

export function FilterButton({ filterValue }: CategoryButtonProps) {
  const [selected, setSelected] = useState<boolean>(false);
  const FilterButton = (): void => {
    setSelected(!selected);
  };

  return (
    <input
      onClick={FilterButton}
      className={`border px-4 py-2 rounded-xl transition-colors duration-150 hover:border-blue-400 ${
        selected ? "border-blue-400" : "border-gray-300"
      }`}
      value={filterValue}
      type="button"
    />
  );
}
