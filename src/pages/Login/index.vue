<template>
  <div class="login-page">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>

<style  lang="scss" scoped >
.login-page {
  display: flex;
  height: 100vh;
  width: 100vw;
  background: url("../../assets/login_bg.jpg");
  background-position: center;
  background-size: cover;
  padding: 16px;
  overflow: auto;
  .login-form {
    margin: auto !important;
  }
}
</style>
