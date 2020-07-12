<template>
	<div class="clients">
		<h3 v-html="'Connected clients'" />
		<span
			v-if="clients.length == 0"
			v-html="'No connected clients.'"
			style="opacity: 0.5"
		/>
		<ul v-if="clients.length > 0">
			<li v-for="client in clients" :key="client.id" v-html="client.id" />
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			clients: []
		}
	},
	sockets: {
		/*
		 * 👂 Listen to socket events emitted from the socket server
		 */
		update_clients(clients) {
			this.clients = clients
		}
	}
}
</script>

<style scoped>
.clients {
	width: 100%;
	margin-top: 32px;
	padding-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
