"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type InputTypeFileProps = {
  name: string;
};

export function InputTypeFile({ name }: InputTypeFileProps) {
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
    }
  };

  const onClickHandler = (): void => {
    inputRef.current.click();
  };

  return (
    <>
      <div onClick={onClickHandler} className="cursor-pointer">
        <div className=" border border-gray-400 w-24 h-24 rounded-2xl flex">
          {preview ? (
            <Image
              src={preview}
              alt="preview"
              width={1}
              height={1}
              className="object-cover rounded-md"
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
