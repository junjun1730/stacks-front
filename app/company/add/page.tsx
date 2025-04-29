"use client";

import React, { useState } from "react";
import { InfoArea } from "../../component/company/InfoArea";
import { StackSelectArea } from "../../component/company/StackSelectArea";
import { PrimaryButton } from "../../component/common/PrimaryButton";

export default function Add() {
  const [infoCategory, setInfoCategory] = useState<Number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  return (
    <div className="border border-gray-400 rounded-2xl shadow p-6">
      <InfoArea />
      {infoCategory?.map((e, i) => {
        return <StackSelectArea key={i} />;
      })}
      <PrimaryButton />
    </div>
  );
}
