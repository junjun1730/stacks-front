import { create } from "zustand";

type SelectedStackState = {
  selected: number[];
  push: (stack_id: number) => void;
  pop: (stack_id: number) => void;
};

export const useSelectedStackStore = create<SelectedStackState>((set) => ({
  selected: [],
  push: (stackId) =>
    set((state) => ({ selected: [...state.selected, stackId] })),
  pop: (stackId) =>
    set((state) => ({
      selected: state.selected.filter((id) => id !== stackId),
    })),
}));
