import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { VueReCaptcha } from 'vue-recaptcha-v3'

Vue.config.productionTip = false

Vue.use(VueReCaptcha, {
  siteKey: '6LfXiEQdAAAAAOYCTDO57xB-LdpyL7jY0kpbUpQr'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




