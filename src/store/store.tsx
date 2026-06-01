import { create } from "zustand";

/** STATE FOR RIGHT SIDE ACTIVATION */

export const useActive = create((set) => ({
  isHover: false,
  setActive: (state:any) => set({isHover:state}),
}));

/** STATE FOR PROJECT TAGS */

type Tag = {
  name: string;
  en: boolean;
  count: number;
};

interface TagStore {
  tags: Tag[];
  initialized: boolean;
  initTags: (data: typeof Data) => void;
}

export const useTagStore = create<TagStore>((set) => ({
  tags: [],
  initialized: false,

  initTags: (data) =>
    set((state) => {
      if (state.initialized) return state;

      const map = new Map<string, Tag>();

      data.forEach((proj:any) => {
        proj.tags.forEach((name: string) => {
          const existing = map.get(name);

          if (existing) {
            existing.count += 1;
          } else {
            map.set(name, {
              name,
              en: false,
              count: 1,
            });
          }
        });
      });

      return {
        tags: Array.from(map.values()).sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
        initialized: true,
      };
    }),
}));