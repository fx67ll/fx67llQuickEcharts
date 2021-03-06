import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'

Vue.config.productionTip = false

import less from 'less'
Vue.use(less)

// import toolTest from '@c/index';
// Vue.use(toolTest);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
