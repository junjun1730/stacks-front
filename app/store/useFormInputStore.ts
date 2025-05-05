import { create } from "zustand";
import { BasicInfoForm } from "../type/company/BasicInfoForm";

type BasicInfoFormState = {
  inputForm: BasicInfoForm;
  onChange: <K extends keyof BasicInfoForm>(
    key: K,
    value: BasicInfoForm[K]
  ) => void;
};

export const useFormInputStore = create<BasicInfoFormState>((set) => ({
  inputForm: {
    logo: null,
    name: "",
    nameEn: "",
    location: "",
    industry: null,
    url: "",
  },
  onChange: (key, value) =>
    set((state) => ({
      inputForm: {
        ...state.inputForm,
        [key]: value,
      },
    })),
}));
