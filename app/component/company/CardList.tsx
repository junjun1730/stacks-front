import React from "react";
import { Card } from "./Card";
import { CardData } from "../../type/company/CardData";

export async function CardList() {
  const cardData: CardData[] = null;

  return (
    <div>
      <Card cardData={cardData} />
    </div>
  );
}

export default CardList;
