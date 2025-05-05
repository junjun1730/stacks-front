import { useQuery } from "@tanstack/react-query";
import { getStacks } from "../../../actions/company/companyApis";
import { Stacks } from "../../../type/company/Stacks";

export function useStackByCategories() {
  return useQuery({
    queryKey: ["stacks"],
    queryFn: getStacks, // Stack[]
    select: groupById, // Stack[] → Record<number, Stack[]>変換})
    staleTime: Infinity,
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
