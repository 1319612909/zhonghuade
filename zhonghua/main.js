import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import cuCustom from './colorui/colorui/components/cu-custom.vue'

Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
