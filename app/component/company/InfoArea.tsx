"use client";

import { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { Label } from "../common/Label";
import { InputTypeFile } from "../common/InputTypeFile";

export function InfoArea() {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <div className="py-4">
      <ToggleButton
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        text="基本情報"
      />
      {isSelected && (
        <div className="flex flex-col justify-around w-1/2">
          <Label htmlFor={"logo"} text={"ロゴ"} required={true} />
          <InputTypeFile name="logo" />
        </div>
      )}
    </div>
  );
}
