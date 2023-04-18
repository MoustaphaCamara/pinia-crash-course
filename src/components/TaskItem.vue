<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  setup() {
    return {};
  },
};
</script>
