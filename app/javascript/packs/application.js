import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    template: '<App/>',
    components: { App },
    router,
    store
  }).$mount('#app')
})
