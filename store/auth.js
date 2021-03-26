import axios from '@nuxtjs/axios';

export const state = () => ({
  token: null,
})

export const mutations = {

  setToken(state, token) {
    state.token = token
  }

}

export const actions = {

  async login({commit}) {
    await this.$axios({
        url: 'http://hlstl.back/api/auth/login',
        method: 'POST',
        data: {
          email: 'test@test.ru',
          password: 'password',
        },
      }, {})
      .then(response => {
        commit("setToken", response.data.access_token);
      })
  }

};

export const getters = {

};
