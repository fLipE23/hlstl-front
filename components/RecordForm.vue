<template>

  <div class="row">
    <div class="col-12">

      <h4>Добавить запись</h4>

      <div class="form-group row">
        <label for="inputName" class="col-3">Ф.И.О.</label>
        <div class="col-9">
          <input type="text" class="form-control" id="inputName" v-model="name">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputPhone" class="col-3">Телефон</label>
        <div class="col-9">
          <input type="text" class="form-control" id="inputPhone" v-model="phone">
        </div>
      </div>

      <div class="form-group row">
        <label for="inputEmail" class="col-3">E-mail</label>
        <div class="col-9">
          <input type="email" class="form-control" id="inputEmail" v-model="email">
        </div>
      </div>

      <button type="submit" class="btn btn-primary" @click="saveRecord">Сохранить</button>

    </div>
  </div>


</template>

<script>
export default {
  name: "RecordForm",
  methods: {
    saveRecord() {
      this.$store.dispatch('records/createRecord', {
        name: this.name,
        phone: this.phone,
        email: this.email,
        source: this.$store.state.records.source,
      })
    }
  },
  props: {
      source: {
        type: String,
        default: 'database',
      },
  },
  data() {
    return {
      name: null,
      phone: null,
      email: null,
    }
  }
}
</script>

<style scoped>
</style>
