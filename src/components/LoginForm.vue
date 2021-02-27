<template>
  <b-card class="login-form mb-2" tag="article">
    <template v-if="loading">
      <b-skeleton type="input"></b-skeleton>
      <br />
      <br />
      <b-skeleton type="input"></b-skeleton>
      <br /><br />
      <b-skeleton type="button" class="login-form__btn"></b-skeleton>
    </template>
    <template v-else>
      <b-form-input v-model="userName" placeholder="Kullanici Adi" />
      <b-form-input type="password" v-model="password" placeholder="Sifre" />
      <b-link href="#foo"> Sifremi Hatirlamiyorum</b-link>

      <b-button
        variant="outline-primary"
        class="login-form__btn"
        @click="login"
      >
        <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
        Giris</b-button
      >
    </template>
  </b-card>
</template>

<script>
import router from "@/pages";

export default {
  data() {
    return {
      loading: false,
      userName: undefined,
      password: undefined,
    };
  },
  methods: {
    login() {
      console.log(this.$store);
      this.loading = true;
      this.$store
        .dispatch("auth/logIn", {
          userName: this.userName,
          password: this.password,
        })
        .then(() => {
          this.loading = false;
          router.push("/");
        })
        .catch(() => {
          this.loading = false;
          this.$bvToast.toast(
            "Please check your login details! user:test and password:123456",
            {
              title: "Error",
              variant: "danger",
              solid: true,
            }
          );
        });
    },
  },
};
</script>

<style scoped lang="scss">
.card-body {
  padding: 48px;
}
.login-form {
  width: 500px;
  max-width: 80%;
  .form-control {
    margin-bottom: 24px;

    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-radius: 0;
    background: transparent;
    outline: 0 !important;
    box-shadow: none !important;
  }

  &__btn {
    display: block;
    margin: auto;
    margin-top: 16px;
  }
}
</style>