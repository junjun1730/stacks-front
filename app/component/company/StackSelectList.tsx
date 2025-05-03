import { isError } from "util";
import { StackSelectButton } from "./StackSelectButton";
import { Stacks } from "../../type/company/Stacks";

type StackSelectListProps = {
  stackList: Stacks[];
  isError: boolean;
};

export function StackSelectList({ isError, stackList }: StackSelectListProps) {
  console.log(isError);
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
      {!isError
        ? stackList.map((e, i) => {
            return (
              <StackSelectButton
                key={i}
                name={e.name}
                imageSrc={"/assets/img/stacks_logo/" + e.image_url}
              />
            );
          })
        : "error"}
    </div>
  );
}
