import { useState } from "react";
import { useFormInputStore } from "../../store/useFormInputStore";
import { BasicInfoForm } from "../../type/company/BasicInfoForm";
import { industries } from "../../constants/company/industry";

type InputProps = {
  name: keyof BasicInfoForm;
};

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
        <option value={null}>{"業界を選択してください。"}</option>
        {industries.map((e) => {
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
