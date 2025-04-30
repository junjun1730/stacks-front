import { useState } from "react";

type InputProps = {
  name: string;
  placeholder: string;
};

export function Input({ name, placeholder }: InputProps) {
  const [isChanged, setIsChanged] = useState<boolean>();

  return (
    <div>
      <input type="file" name={name} placeholder={placeholder} />
    </div>
  );
}
