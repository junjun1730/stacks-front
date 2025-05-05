"use client";

import { useFormInputStore } from "../../store/useFormInputStore";
import { BasicInfoForm } from "../../type/company/BasicInfoForm";

type InputProps = {
  name: keyof BasicInfoForm;
  placeholder: string;
};

export function Input({ name, placeholder }: InputProps) {
  const { onChange } = useFormInputStore();
  return (
    <div className="w-full md:w-1/2">
      <input
        type="text"
        className="outline-none bg-gray-200 w-full rounded-2xl p-2"
        name={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(name, e.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
}
