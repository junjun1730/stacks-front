import React from "react";
import { CardDataList } from "../../type/company/CardData";
import { Card } from "./Card";

export async function CardList() {
  const cardData: CardDataList = null;

  // const [cardData, setCardData] = useState<CardDataList>(null);

  // useEffect(() => {
  //   async function getAllData() {
  //     try {
  //       const data: CardDataList = await getAllDummyData();
  //       setCardData(data);
  //     } catch (e) {
  //       setCardData(null);
  //     }
  //   }
  //   getAllData();
  // }, []);

  return (
    <div>
      <Card cardData={cardData} />
    </div>
  );
}

export default CardList;
