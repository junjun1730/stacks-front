import React from "react";
import { CardDataList } from "../../type/CardData";
import { getAllDummyData } from "../../actions/company/companyApis";
import { Card } from "./Card";

export async function CardList() {
  const cardData: CardDataList = await getAllDummyData();

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
