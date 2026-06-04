import { create } from "zustand";

/** STATE FOR POP-UP */

export const usePopUp = create((set) => ({
  isHover: false,
  setPopHover: (state:any) => set({isHover:state}),
}));

/** STATE FOR RIGHT SIDE ACTIVATION */

interface Layout {
  isHover: boolean;
  setActive: (state:any) => void;
}

export const useActive = create<Layout>((set) => ({
  isHover: false,
  setActive: (state:any) => set({isHover:state}),
}));

/** STATE FOR PROJECT TAGS */
interface Filter {
  selectedTags: string[];
  focused: boolean;
  toggleTag: (tag: string) => void;
  setFocus: (state: any) => void;
  showAll: () => void;
}

export const useFilter = create<Filter>((set) => ({
  selectedTags: [],
  initialized: false,
  focused: false,

  toggleTag: (tag:any) => set((state) => ({
    selectedTags: state.selectedTags.includes(tag)
      ? state.selectedTags.filter((t) => t !== tag)
      : [...state.selectedTags, tag],
  })),

  showAll: () => set({ selectedTags: [] }),

  setFocus: (state:any) => set({focused:state}),
}));

