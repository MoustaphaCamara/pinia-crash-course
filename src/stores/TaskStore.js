import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "do the dishes", isFav: false },
      { id: 2, title: "play Mario Kart", isFav: true },
    ],
    title: "Pinia crash course - TNN",
  }),

  getters: {
    favs() {
      // this here refers to state

      return this.tasks.filter((t) => t.isFav);
      // it doesn't alter the array, it returns a new array based on the first one
      // filter(t => t.isFav) = returns true if true, false if f
    },
  },
});
