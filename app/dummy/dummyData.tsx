import { CardData, CardDataList } from "../type/CardData";

export function dummyDataCreator(): CardDataList {
  const dummyData: CardDataList = [];
  for (let i = 0; i < 40; i++) {
    const dummy: CardData = {
      id: `${i}`,
      name: `name${i}`, //正式
      nameEn: `nameEn${i}`,
      nameHira: `nameHira${i}`,
      nameKana: `nameKana${i}`,
      techStacks: [
        "react",
        "next.js",
        "Spring Boot",
        "mysql",
        "Docker",
        "Redis",
      ],
      industry: `industry${i}`,
      location: `location${i}`,
    };
    dummyData.push(dummy);
  }
  return dummyData;
}
