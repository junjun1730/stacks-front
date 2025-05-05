import { useState } from "react";

type InputProps = {
  name: string;
  placeholder: string;
};

export function Input({ name, placeholder }: InputProps) {
  return (
    <div className="w-full md:w-1/2">
      <input
        type="text"
        className="outline-none bg-gray-200 w-full rounded-2xl p-2"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
