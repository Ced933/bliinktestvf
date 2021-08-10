import Vue from 'vue'
import App from './App.vue'

// conseil pour la mise en production desactiver pour les activer mettre à true 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
