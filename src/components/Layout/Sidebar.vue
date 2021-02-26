<template>
  <aside class="sidebar">
    <img alt="Vue logo" src="@/assets/logo.png" />

    Sidebar

    <router-link :to="{ name: 'Dashboard' }">Home</router-link>
    <router-link to="/data-table">Data Table</router-link>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
</style>
