<template>
  <aside class="sidebar">
    <div class="sidebar__top">
      <Logo />
    </div>
    <div class="sidebar__middel">
      <b-nav vertical>
        <b-nav-item active>
          <router-link :to="{ name: 'Dashboard' }">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/data-table">Data Table</router-link>
        </b-nav-item>
      </b-nav>
    </div>
    <div class="sidebar__bottom">
      <b-nav vertical>
        <b-nav-item active>
          <span class="ound">Test User</span>
        </b-nav-item>
        <b-nav-item>
          <span class="ound">Role</span>
        </b-nav-item>
        <b-nav-item>
          <span class="" @click="logout">Cikish</span>
        </b-nav-item>
      </b-nav>
    </div>
  </aside>
</template>

<script>
import Logo from "@/components/Logo";
import router from "@/pages";

export default {
  name: "Sidebar",
  components: {
    Logo,
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logOut").then(() => {
        router.push("/login");
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/colors";
.sidebar {
  display: flex;
  flex-direction: column;
  &__top {
    display: flex;
    height: 100px;
    text-align: center;
    .logo {
      margin: auto;
    }
  }

  &__bottom {
    margin-bottom: 0;
    margin-top: auto;
  }
}

.ound {
  background: $silver;
  color: $orange;
  width: 100%;
  display: block;
  border-radius: 15px;
  height: 35px;
  line-height: 35px;
  padding: 0 24px;
}

.sidebar__middel a {
  color: $alphaGray;
}
</style>
