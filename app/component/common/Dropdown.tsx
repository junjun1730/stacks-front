import { useState } from "react";
import { useFormInputStore } from "../../store/useFormInputStore";
import { BasicInfoForm } from "../../type/company/BasicInfoForm";

type InputProps = {
  name: keyof BasicInfoForm;
};

type Option = {
  id: number;
  label: string;
};

const options = getOptions();

function getOptions(): Option[] {
  const industries = [
    "業界を選択してください。",
    "IT・ソフトウェア",
    "金融",
    "製造業",
    "医療",
    "教育",
    "人事労務",
    "メディア",
    "ブロックチェーン",
    "交通",
  ];
  return industries.map((label, i: number) => ({ id: i + 1, label }));
}

export function Dropdown({ name }: InputProps) {
  const { onChange } = useFormInputStore();
  return (
    <div className="w-full md:w-1/2">
      <select
        className="outline-none bg-gray-200 w-full rounded-2xl p-2"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          onChange(name, e.target.value);
        }}
        name={name}
      >
        {options.map((e) => {
          return (
            <option key={e.id} value={e.id}>
              {e.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
