"use client";

import React, { useRef, useState } from "react";

export function Search() {
  //const [searchBarValue, setSearchBarValue] = useState<String>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const removeButtonHanler = (): void => {
    inputRef.current.value = "";
  };

  return (
    <div className="bg-gray-200 rounded-lg flex w-full md:max-w-md h-12 items-center">
      <div className="w-1/8 flex justify-center">
        <i className="ri-search-line"></i>
      </div>
      <div className="w-3/4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Insert Here"
          className="w-full focus:outline-none placeholder-gray-400"
        />
      </div>
      <div className="w-1/8 flex justify-center" onClick={removeButtonHanler}>
        <i className="ri-close-line"></i>
      </div>
    </div>
  );
}
