"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BasicInfoForm } from "../../type/company/BasicInfoForm";
import { useFormInputStore } from "../../store/useFormInputStore";
import { FORMERRORMESSAGE } from "../../constants/company/message";
import { MAX_FILE_SIZE } from "../../constants/company/fileSize";

type InputTypeFileProps = {
  name: keyof BasicInfoForm;
};

export function InputTypeFile({ name }: InputTypeFileProps) {
  const { onChange } = useFormInputStore();
  const [preview, setPreview] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { OVERFILESIZE, NOTIMAGEFILE, NOFILE } = FORMERRORMESSAGE;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    setErrorMessage(null);
    console.log(file);
    // validation
    if (!file) {
      setErrorMessage(NOFILE);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setErrorMessage(OVERFILESIZE);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setErrorMessage(NOTIMAGEFILE);
      return;
    }

    // success logic
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    onChange(name, file);
  };

  const onClickHandler = (): void => {
    inputRef.current.click();
  };

  return (
    <>
      <div onClick={onClickHandler} className="cursor-pointer w-24">
        {errorMessage && <span>{errorMessage}</span>}
        <div
          className={`border h-24 ${
            errorMessage ? "border-red-500 border-2" : "border-gray-400"
          } rounded-2xl flex`}
        >
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
