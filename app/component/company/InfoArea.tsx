"use client";

import { useState } from "react";
import { ToggleButton } from "./ToggleButton";

export function InfoArea() {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <>
      <ToggleButton />
      {isSelected && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              옵션 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              옵션 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              옵션 3
            </li>
          </ul>
        </div>
      )}{" "}
    </>
  );
}
