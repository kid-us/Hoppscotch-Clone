import { create } from "zustand";

interface RequestState {
  isRequested: boolean;
  requested: () => void;
}

const useRequestStore = create<RequestState>((set) => ({
  isRequested: false,
  requested: () => set((state) => ({ isRequested: !state.isRequested })),
}));

export default useRequestStore;
