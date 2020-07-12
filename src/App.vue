<template>
	<div id="app">
		<div class="container">
			<h3
				:style="isConnected ? 'color: green' : 'color: red'"
				v-html="`Connected: ${isConnected}`"
			/>
			<ClientList />
			<Counter />
		</div>
	</div>
</template>

<script>
import ClientList from './components/ClientList.vue'
import Counter from './components/Counter.vue'

export default {
	name: 'App',
	data() {
		return {
			isConnected: false
		}
	},
	components: {
		ClientList,
		Counter
	},
	sockets: {
		/*
		 * 👂 Listen to socket events emitted from the socket server
		 */
		connect() {
			console.log('Connected to the socket server.')
			this.isConnected = true
		}
	}
}
</script>

<style>
body,
html {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin: 0;
	padding: 0;
}
* {
	box-sizing: border-box;
}

#app {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}
</style>
