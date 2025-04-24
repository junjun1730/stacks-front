"use client";

import React, { useState } from "react";
import { FilterButton } from "../common/FilterButton";

export function Filter() {
  const [sampleArr] = useState<string[]>(
    Array.from({ length: 20 }, (_, i) => `filter${i}`)
  );
  return (
    <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide cursor-grab ">
      {sampleArr?.map((e, i) => {
        return <FilterButton key={i} filterValue={e} />;
      })}
    </div>
  );
}
