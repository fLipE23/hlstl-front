export default function ({ $axios, store }) {
  $axios.onRequest(() => {
    if (store.state.auth.token !== null)
      $axios.setHeader('Authorization', 'Bearer ' + store.state.auth.token);
  })

}
