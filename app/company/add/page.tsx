"use client";

import React, { useState } from "react";
import { InfoArea } from "../../component/company/InfoArea";
import { StackSelectArea } from "../../component/company/StackSelectArea";
import { PrimaryButton } from "../../component/common/PrimaryButton";
import { Divider } from "../../component/common/Divider";

export default function Add() {
  const [infoCategory, setInfoCategory] = useState<Number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  return (
    <form className="border border-gray-400 rounded-2xl shadow p-6">
      <InfoArea />
      <Divider />
      {/* {infoCategory?.map((e, i) => {
        return (<StackSelectArea key={i} /><Divider/>);
      })} */}
      <PrimaryButton />
    </form>
  );
}
