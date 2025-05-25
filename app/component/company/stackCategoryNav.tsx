"use client";

import { useEffect, useState } from "react";
import { STACK_CATEGORY } from "../../constants/company/stack-category";

type StackSelected = {
  id: number;
  state: boolean;
};

export function StackCategoryNav() {
  const [selected, setSelected] = useState<StackSelected[]>([]);

  useEffect(() => {
    const initialSelected = STACK_CATEGORY.map((e, i) => ({
      id: e.id,
      state: i === 0,
    }));
    setSelected(initialSelected);
  }, []);

  return (
    <div className="flex gap-2 overflow-auto scrollbar-hide">
      {STACK_CATEGORY.map((e, i) => {
        return (
          <button className={`text-gray-400 bold`} key={e.id}>
            {e.name}
          </button>
        );
      })}
    </div>
  );
}
