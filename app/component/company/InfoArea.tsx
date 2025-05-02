"use client";

import { useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { Label } from "../common/Label";
import { InputTypeFile } from "../common/InputTypeFile";
import { Input } from "../common/Input";

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
        <div className="flex flex-col gap-4">
          <Label htmlFor={"logo"} text={"ロゴ"} required={true} />
          <InputTypeFile name="logo" />
          <Label htmlFor={"name"} text={"企業名"} required={true} />
          <Input name="name" placeholder="企業名を入力してください。" />
          <Label htmlFor={"nameEn"} text={"企業名（英語）"} required={true} />
          <Input
            name="nameEn"
            placeholder="企業名（英語）を入力してください。"
          />
          <Label htmlFor={"location"} text={"所在地"} required={true} />
          <Input name="location" placeholder="所在地を入力してください。" />
          <Label htmlFor={"industry"} text={"業界"} required={true} />
          <Input name="industry" placeholder="業界を入力してください。" />
          <Label htmlFor={"url"} text={"ホームページ"} required={true} />
          <Input name="url" placeholder="ホームページURLを入力してください。" />
        </div>
      )}
    </div>
  );
}
