import { Industry } from "./Industry";
import { Stacks } from "./Stacks";

export type CardData = {
  id: number;
  name: string; //正式
  nameEn: string;
  nameKana: string;
  techStacks: Stacks[];
  industry: Industry;
  location: string;
  image: string;
};
