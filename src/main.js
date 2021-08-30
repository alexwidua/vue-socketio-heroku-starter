import Vue from 'vue'
import App from './App.vue'

// Socket.io
//import io from 'socket.io-client'
// import VueSocketIOExt from 'vue-socket.io-extended'
// Vue.use(VueSocketIOExt, socket)

// Removing VueSocketIOExt for now
import VueSocketIO from 'vue-socket.io'

Vue.use(
	new VueSocketIO({
		connection: process.env.VUE_APP_HOST
	})
)

new Vue({
	render: (h) => h(App)
}).$mount('#app')
