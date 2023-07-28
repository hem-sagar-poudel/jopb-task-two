import {getSources} from "api/new";
import {create} from "zustand";

export const useSourcesStore = create((set) => ({
  data: [],
  setData: (value) => set((state) => ({data: value})),
  fetchData: async () => {
    try {
      const res = await getSources();
      console.log(res);
      if (res.status == "ok") {
        return set((state) => ({data: res.sources}));
      }
      return set((state) => ({data: res.sources}));
    } catch (error) {
      return set((state) => ({data: res.sources}));
    }
  },
}));
