"use client";

import { useEffect, useState } from "react";
import { StackSelectList } from "./StackSelectList";
import { ToggleButton } from "./ToggleButton";
import { useStackByCategories } from "../../util/hooks/company/useStackByCategories";

type StackSelectAreaProps = {
  text: string;
  id: number;
};

export function StackSelectArea({ text, id }: StackSelectAreaProps) {
  const { data, isError } = useStackByCategories();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <>
      <div className="py-4">
        <ToggleButton
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          text={text}
        />
        {isSelected && (
          <StackSelectList
            stackList={data ? data[id] : null}
            isError={isError}
          />
        )}
      </div>
    </>
  );
}
