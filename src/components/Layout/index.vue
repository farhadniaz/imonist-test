<template>
  <div class="layout">
    <Sidebar />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
export default {
  name: "Layout",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
</style>
