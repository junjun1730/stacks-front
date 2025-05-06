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
  selectedStacks: number[]
): Promise<string> => {
  const formData = new FormData();

  formData.append("logo", basicInfoForm.logo);

  const basicInfo = {
    companyName: basicInfoForm.name,
    companyNameEn: basicInfoForm.nameEn,
    companyNameYomi: basicInfoForm.nameYomi,
    location: basicInfoForm.location,
    industry: basicInfoForm.industry,
    homepage: basicInfoForm.url,
  };

  formData.append(
    "basicInfo",
    new Blob([JSON.stringify(basicInfo)], { type: "application/json" })
  );
  formData.append(
    "stacks",
    new Blob([JSON.stringify(selectedStacks)], { type: "application/json" })
  );

  const response = await fetch(`${API_BASE_URL}/company/add`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "サーバーエラーが発生しました。");
  }

  const result: string = await response.json();
  return result;
};
