import Vue from 'vue'
import App from './App.vue'
import vuelidate from 'vuelidate'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'

stockInit(Highcharts)

Vue.use(vuelidate);
Vue.use(HighchartsVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

