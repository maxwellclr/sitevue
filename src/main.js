import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import GAuth from 'vue-google-oauth2';

Vue.config.productionTip = false;

Vue.use(NowUiKit);

const gauthOption = {
  clientId: 'YOUR_GOOGLE_CLIENT_ID',
  scope: 'profile email',
  prompt: 'select_account'
};
Vue.use(GAuth, gauthOption);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
