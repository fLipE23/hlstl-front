<template>

  <div>
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
        <div class="col-12">
          <record v-for="(record, index) in $store.state.records.list" :record="record" :key="index"></record>
        </div>
      </div>
  </div>

</template>


<script>
import sourcesList from '../../common/records/recordsSourcesList'
import record from './Record'

export default {
  name: "RecordsList",
  components: {
      record,
  },
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
