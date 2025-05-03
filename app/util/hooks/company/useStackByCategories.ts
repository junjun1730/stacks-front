import { useQuery } from "@tanstack/react-query";
import { fetchStacks } from "../../../actions/company/companyApis";
import { Stacks } from "../../../type/company/Stacks";

export function useStackByCategories() {
  return useQuery({
    queryKey: ["stacks"],
    queryFn: fetchStacks, // Stack[] 배열을 받아옴
    select: groupById, // 여기서 Stack[] → Record<number, Stack[]>로 변환})
  });
}

function groupById(stacks: Stacks[]): Record<number, Stacks[]> {
  return stacks.reduce((acc, stack) => {
    const key = stack.category_id;
    if (!acc[key]) acc[key] = [];
    acc[key].push(stack);
    return acc;
  }, {} as Record<number, Stacks[]>);
}
