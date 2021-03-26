<template>

  <div>

    <h4>Sign in</h4>
    <div class="form-group row">
      <label for="inputEmail" class="col-3">E-mail</label>
      <div class="col-9">
        <input type="email" class="form-control" id="inputEmail" v-model="email">
      </div>
    </div>

    <div class="form-group row">
      <label for="inputPassword" class="col-3">Пароль</label>
      <div class="col-9">
        <input type="password" class="form-control" id="inputPassword" v-model="password">
      </div>
    </div>

    <button type="submit" class="btn btn-primary" @click="login">Сохранить</button>

  </div>

</template>

<script>

export default {
  name: "LoginForm",
  methods: {

    login() {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      });
    }

  },
  data() {
    return {
      email: 'test@test.ru',
      password: 'password',
    }
  },
  mounted() {}

}
</script>

<style scoped>

</style>
