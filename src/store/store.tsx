import { create } from "zustand";

/** STATE FOR SLIDE MOBILE */
interface Scroll {
  scrolled: boolean;
  setScroll: (state:any) => void;
}

export const useScroll = create<Scroll>((set) => ({
  scrolled: false,
  setScroll: (state:any) => set({scrolled:state}),
}));

/** STATE FOR POP-UP */
interface PopUpStore {
  hoverStates: Record<string, boolean>;
  setPopHover: (id: string, state: boolean) => void;
}

export const usePopUp = create<PopUpStore>((set) => ({
  hoverStates: {},

  setPopHover: (id, state) =>
    set((store) => ({
      hoverStates: {
        ...store.hoverStates,
        [id]: state,
      },
    })),
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

