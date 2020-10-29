import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { store } from './store/store'
import VueBarcode from 'vue-barcode';
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

Vue.use(VueToastr, {
  defaultPosition: 'toast-bottom-right',
  defaultTimeout: 1500
})
Vue.use(VueBarcode)

Vue.config.productionTip = false;


new Vue({
  router,
  store: store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
