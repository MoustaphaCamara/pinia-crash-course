<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="logo pinia" />
      <h1>{{ taskStore.title }}</h1>
    </header>
    <!-- filter -->
    <nav class="filter">
      <button @click="setFilter('all')">All tasks</button>
      <button @click="setFilter('favs')">Favourite tasks</button>
      {{ filter }}
    </nav>
    <!-- task list -->

    <!-- all tasks -->
    <div v-if="filter === 'all'" class="task-list">
      <p>All tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskItem :task="task" />
      </div>
    </div>
    <!-- fav tasks -->
    <div v-if="filter === 'favs'" class="task-list">
      <p>Fav tasks</p>
      <div v-for="task in taskStore.favs">
        <TaskItem :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";
import TaskItem from "./components/TaskItem.vue";
import { ref } from "vue";

export default {
  components: { TaskItem },
  setup() {
    const taskStore = useTaskStore();

    const filter = ref("all");
    return { taskStore, filter };
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
    },
  },
};
</script>

<style lang="scss" scoped></style>
