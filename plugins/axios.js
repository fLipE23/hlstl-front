export default function ({ $axios, store }) {
  $axios.onRequest(() => {

    console.log('TOKEN' + store.state.auth.token);

    if (store.state.auth.token !== null)
      $axios.setHeader('Authorization', 'Bearer ' + store.state.auth.token);
  })

}
