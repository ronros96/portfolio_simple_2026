import { create } from "zustand";
import Data from "@src/data/projects.json";

export const useActive = create((set) => ({
  isHover: false,
  setActive: (state:any) => set({isHover:state}),
}));


export const useProjects = create((set) => ({
  projectDataAll: Data,
  projectFilter: {},
  setProjectFilter: (state:any) => set({projectFilter:state}),
}));