"use client";

import React, { FC } from "react";
import { CardData, CardDataList } from "../../type/CardData";

type CardDataProps = {
  cardData: CardDataList;
};

export function Card({ cardData }: CardDataProps) {
  console.log(cardData);
  return (
    <div>
      {cardData?.map((e, i) => (
        <p key={i}>{e.id}</p>
      ))}
    </div>
  );
}
