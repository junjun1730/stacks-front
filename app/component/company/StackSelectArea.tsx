"use client";

import { useState } from "react";
import { StackSelectList } from "./StackSelectList";
import { ToggleButton } from "./ToggleButton";

type StackSelectAreaProps = {
  content: string;
};

export function StackSelectArea({ content }: StackSelectAreaProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <>
      <div className="py-4">
        <ToggleButton
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          text={content}
        />
        {isSelected && <StackSelectList />}
      </div>
    </>
  );
}
