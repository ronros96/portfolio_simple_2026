import { create } from "zustand";

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

type Data = {
  name:string,
  type:string,
  img:string,
  tags:string[],
  link:string,
  desc:string,
  case:string
}

type Tag = {
  name: string;
  en: boolean;
  count: number;
};

interface Filter {
  tags: Tag[];
  initialized: boolean;
  focused: boolean;
  initTags: (data: Data) => void;
  setFocus: (state: any) => void;
}

export const useFilter = create<Filter>((set) => ({
  tags: [],
  initialized: false,
  focused: false,

  initTags:(data) => set((state) => {
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

  setFocus: (state:any) => set({focused:state}),
}));

