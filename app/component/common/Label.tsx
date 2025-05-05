import { BasicInfoForm } from "../../type/company/BasicInfoForm";

type LabelProps = {
  htmlFor: keyof BasicInfoForm;
  text: string;
  required?: boolean;
};

export function Label({ htmlFor, text, required }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="font-bold text-lg">
      {text}
      {required ? (
        <span className="text-gray-300 text-sm">（必須）</span>
      ) : (
        ``
      )}{" "}
      :
    </label>
  );
}
