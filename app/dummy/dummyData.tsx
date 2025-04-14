type DummyData = {
  id: string;
  name: string; //正式
  nameEn: string;
  nameHira: string;
  nameKana: string;
  techStacks: string[];
  industry: string;
  location: string;
};

function dummyDataCreator(): DummyData[] {
  const dummyData: DummyData[] = [];
  for (let i = 0; i < 40; i++) {
    const dummy: DummyData = {
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

const DUMMYDATA: DummyData[] = dummyDataCreator();
