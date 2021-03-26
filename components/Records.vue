<template>

  <div class="row" >
    <div class="col-12 col-lg-6">

      <div class="form-group row">
        <label class="col-sm-4 col-form-label" for="sourcePicker">Выбрать источник:</label>
        <div class="col-sm-8">
          <select v-model="source" class="form-control" id="sourcePicker" @change="changeSource">
            <option :value="source.key"
                    v-for="source in sourcesList">{{source.title}}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-12"
             v-for="record in $store.state.records.list">

          <p>
            Ф.И.О.: {{record.name}} <br>
            Телефон: {{record.phone}} <br>
            E-mail: {{record.email}} <br>
          </p>
          <hr>

        </div>
      </div>

    </div>

    <div class="col-12 col-lg-6" v-if="$store.state.auth.token === null">
      <loginForm></loginForm>
    </div>
    <div class="col-12 col-lg-6" v-if="$store.state.auth.token !== null">
      <recordForm></recordForm>
    </div>



  </div>

</template>

<script>
import sourcesList from './../common/records/recordsSourcesList'

export default {
  name: "Records",
  mounted() {
    this.$store.dispatch('records/loadRecords', this.source);
  },
  data() {
    return {
      source: 'database',
      sourcesList,
    }
  },

  methods: {

    changeSource() {
      this.$store.commit('records/setSource', this.source);
      this.$store.dispatch('records/loadRecords', this.source);
    }

  }

}
</script>

<style scoped>

</style>
