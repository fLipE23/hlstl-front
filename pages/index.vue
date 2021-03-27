<template>
  <div class="container">

    <div class="row">
      <div class="col-12 col-lg-6">

        <recordsList></recordsList>

      </div>

      <div class="col-12 col-lg-6" v-if="$store.state.auth.token === null">
        <loginForm></loginForm>
      </div>
      <div class="col-12 col-lg-6" v-if="$store.state.auth.token !== null">
        <recordForm></recordForm>
      </div>

    </div>

  </div>
</template>

<script>

import recordForm from './../components/records/RecordForm';
import recordsList from './../components/records/RecordsList';
import loginForm from './../components/LoginForm';

export default {
  components: {
    recordForm, recordsList, loginForm,
  }
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
