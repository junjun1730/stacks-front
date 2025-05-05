import { StackSelectButton } from "./StackSelectButton";
import { Stacks } from "../../type/company/Stacks";

type StackSelectListProps = {
  stackList: Stacks[];
  isError: boolean;
  isSelected: boolean;
};

export function StackSelectList({
  isError,
  stackList,
  isSelected,
}: StackSelectListProps) {
  return (
    <div
      className={`grid grid-cols-3 md:grid-cols-4 gap-4 transition-all duration-300 ease-in-out overflow-hidden ${
        isSelected ? "opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {!isError ? (
        stackList.map((e, i) => {
          return (
            <StackSelectButton
              key={i}
              id={e.id}
              name={e.name}
              imageSrc={"/assets/img/stacks_logo/" + e.image_url}
            />
          );
        })
      ) : (
        <div>{"Dataの読み込みに失敗しました。"}</div>
      )}
    </div>
  );
}
