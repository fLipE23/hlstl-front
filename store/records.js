import recordsSourcesList from "../common/records/recordsSourcesList";

export const state = () => ({
  list: [],
  source: 'database', // current source
})

export const mutations = {

  setList(state, list) {
    state.list = list
  },

  pushRecord(state, record) {
    state.list.push(record);
  },

  setSource(state, source) {
    // source is in SourcesList
    if (recordsSourcesList.map(item => { return item.key; }).includes(source) ) {
      state.source = source
    }
  },

}

export const actions = {

  // load records from api
  async loadRecords({commit}, source) {
     await this.$axios({
       url: 'http://hlstl.back/api/records',
       method: 'GET',
       params: {
         source,
       }
    }, {}).then((response) => {
      commit('setList', response.data)
    })
  },

  // save record into api
  async createRecord({commit}, payload) {
    await this.$axios({
      url: 'http://hlstl.back/api/records',
      method: 'POST',
      data: payload,
    }, {}).then((response) => {
      commit('pushRecord', response.data)
    })
  }

};

export const getters = {

};
