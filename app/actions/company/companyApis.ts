import { BasicInfoForm } from "../../type/company/BasicInfoForm";
import { Company } from "../../type/company/Company";
import { Stacks } from "../../type/company/Stacks";
import { API_BASE_URL } from "../../util/apis";

export const getAllStacks = async (): Promise<Stacks[]> => {
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

export const getAllCompanies = async (): Promise<Company[]> => {
  const response = await fetch(`${API_BASE_URL}/company/list`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }
  const data = await response.json();
  return data;
};

export const addCompany = async (
  basicInfoForm: BasicInfoForm,
  selectedStacks: number[]
): Promise<string> => {
  const formData = new FormData();
  const { logo, name, nameEn, nameYomi, location, industry, url } =
    basicInfoForm;

  const basicInfo = {
    companyName: name,
    companyNameEn: nameEn,
    companyNameYomi: nameYomi,
    location: location,
    industry: industry,
    homepage: url,
    selectedStacks: selectedStacks,
  };

  formData.append("logo", logo);

  formData.append(
    "basicInfo",
    new Blob([JSON.stringify(basicInfo)], { type: "application/json" })
  );

  const response = await fetch(`${API_BASE_URL}/company/add`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "サーバーエラーが発生しました。");
  }

  const result: string = await response.text();
  return result;
};

export const getCompany = async (id: number): Promise<Company> => {
  const response = await fetch(`${API_BASE_URL}/company/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }
  return await response.json();
};
