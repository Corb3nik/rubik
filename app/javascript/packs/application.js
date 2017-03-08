import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store/store'



document.addEventListener('DOMContentLoaded', () => {

  (function () {
    let tokenElement = document.querySelector('meta[name=csrf-token]')
    let token = tokenElement.getAttribute('content')
    if (token.length == 0) {
      console.error("Can't retrieve CSRF token!")
    } else {
      axios.defaults.headers.common['X-CSRF-Token'] = token;
    }
  })()


  new Vue({
    template: '<App/>',
    components: { App },
    router,
    store
  }).$mount('#app')
})
