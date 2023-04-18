import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "do the dishes", isFav: "false" },
      { id: 2, title: "play Mario Kart", isFav: "true" },
    ],
    title: "Pinia crash course - TNN",
  }),
});
