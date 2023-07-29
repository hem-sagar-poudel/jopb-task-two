import {getNews} from "api/new";
import {getLocalStorage, setLocalStorage} from "utils/storageUtil";
import {create} from "zustand";

export const useNewsStore = create((set) => ({
  data: [],
  setData: (value) => set((state) => ({data: value})),
  fetchData: async (value) => {
    console.log(value);
    try {
      if (!getLocalStorage(value)) {
        const res = await getNews(value);
        console.log(res);
        if (res.status == "ok") {
          setLocalStorage(value, res.articles);
          return set((state) => ({data: res.articles}));
        }
        return set((state) => ({data: res.articles}));
      } else {
        return set((state) => ({data: getLocalStorage(value)}));
      }
    } catch (error) {
      return set((state) => ({data: res.articles}));
    }
  },
}));
