import {getNews} from "api/new";
import {create} from "zustand";

export const useNewsStore = create((set) => ({
  data: [],
  setData: (value) => set((state) => ({data: value})),
  fetchData: async (value) => {
    console.log(value);
    try {
      const res = await getNews(value);
      console.log(res);
      if (res.status == "ok") {
        return set((state) => ({data: res.articles}));
      }
      return set((state) => ({data: res.articles}));
    } catch (error) {
      return set((state) => ({data: res.articles}));
    }
  },
}));
