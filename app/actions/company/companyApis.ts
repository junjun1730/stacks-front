import { BasicInfoForm } from "../../type/company/BasicInfoForm";
import { Stacks } from "../../type/company/Stacks";
import { API_BASE_URL } from "../../util/apis";

export const getStacks = async (): Promise<Stacks[]> => {
  const response = await fetch(`${API_BASE_URL}/company/add`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }
  const data = await response.json();
  return data.map(({ imageUrl, categoryId, ...rest }, i) => ({
    ...rest,
    image_url: imageUrl,
    category_id: categoryId,
  }));
};

export const addCompany = async (
  basicInfoForm: BasicInfoForm,
  seletedStacks: number[]
): Promise<string> => {
  const response = await fetch(`${API_BASE_URL}/company/add`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      basicInfo: basicInfoForm,
      stacks: seletedStacks,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "サーバーエラーが発生しました。");
  }

  const result: string = await response.json();
  return result;
};
