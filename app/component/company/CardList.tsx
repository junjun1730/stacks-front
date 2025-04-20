import React from "react";
import { CardDataList } from "../../type/CardData";
import { getAllDummyData } from "../../actions/company/companyApis";
import { Card } from "./Card";

export async function CardList() {
  const cardData: CardDataList = await getAllDummyData();
  return (
    <div>
      <Card cardData={cardData} />
    </div>
  );
}

export default CardList;
