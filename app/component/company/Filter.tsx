"use client";

import React, { useState } from "react";
import { FilterButton } from "../common/FilterButton";
import { industries } from "../../constants/company/industry";

export function Filter() {
  return (
    <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide cursor-grab ">
      {industries?.map((e, i) => {
        return <FilterButton key={e.id} filterValue={e.label} />;
      })}
    </div>
  );
}
