"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BasicInfoForm } from "../../type/company/BasicInfoForm";
import { useFormInputStore } from "../../store/useFormInputStore";

type InputTypeFileProps = {
  name: keyof BasicInfoForm;
};

export function InputTypeFile({ name }: InputTypeFileProps) {
  const { onChange } = useFormInputStore();
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange(name, file);
    }
  };

  const onClickHandler = (): void => {
    inputRef.current.click();
  };

  return (
    <>
      <div onClick={onClickHandler} className="cursor-pointer w-24">
        <div className=" border border-gray-400 h-24 rounded-2xl flex">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="object-cover rounded-2xl "
            />
          ) : (
            <i className="ri-add-line m-auto self-center"></i>
          )}
        </div>
        <input
          type="file"
          onChange={onChangeHandler}
          name={name}
          ref={inputRef}
          className="hidden"
          accept="image/png, image/jpeg"
        />
      </div>
    </>
  );
}
