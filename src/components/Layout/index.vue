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

<style  lang="scss" >
@import "../../assets/colors";
.layout {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  border-right: 1px solid #ccc;
}

main {
  width: 100%;
  background: url("../../assets/dashboard_bg.png");
  background-position: center;
  background-size: cover;
  padding: 16px;
}

#app {
  height: 100vh;
  width: 100vw;
}
</style>
