<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="logo pinia" />
      <h1>{{ taskStore.title }}</h1>
    </header>

    <!-- task list -->

    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        <p>
          <TaskItem :task="task" />
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";
import TaskItem from "./components/TaskItem.vue";

export default {
  components: { TaskItem },
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>

<style lang="scss" scoped></style>
