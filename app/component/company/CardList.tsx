import React from "react";
import { CardDataList } from "../../type/company/CardData";
import { Card } from "./Card";

export async function CardList() {
  const cardData: CardDataList = null;

  return (
    <div>
      <Card cardData={cardData} />
    </div>
  );
}

export default CardList;
