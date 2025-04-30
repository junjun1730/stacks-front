import { dummyDataCreator } from "../../dummy/dummyData";
import { CardData, CardDataList } from "../../type/company/CardData";

export async function getAllDummyData(): Promise<CardDataList> {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dummyDataCreator());
      }, 1000);
    });
  } catch (e) {
    throw new Error("Error: " + e);
  } finally {
    console.log("getAllDummyData finish");
  }
}
