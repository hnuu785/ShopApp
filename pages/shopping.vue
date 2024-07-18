<template>
	<div>
		<p>Shop Screen</p>
		<button @click="itemGet" class="btn">item get</button>
		<p>{{itemInform}}</p>
		<button @click="itemAdd" class="btn">item add</button>
		<button @click="itemDelete" class="btn">item delete</button>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import axios from 'axios';
	//const axios = require('axios');
	
	const itemInform = ref('beforeClick');
	const myToken = ref('');
	
	myToken.value = localStorage.getItem('myToken');
	
	/*const itemGet = () => {
		await axios.get('/item/items')
			.then(response => {
				itemInform.value = response.data;
			})
			.catch(error => {
				itemInform.value = error;
			})
	}*/
	
	const itemGet = async () => {
		try {
			const respose = await axios.get('/item/items');
			itemInform.value = respose.data;
		} catch (error) {
			itemInform.value = error;
		}
	};
	
	const itemAdd = async () => {
		try {
			const response = await axios.post('/item/add', {
				accessToken: myToken.value,
			});
		} catch (error) {
			itemInform.value = error;
		}
	};
	
	const itemDelete = async () => {
		try {
			const response = await axios.delete('/item/delete', {
				accessToken: myToken.value,
			});
		} catch (error) {
			itemInform.value = error;
		}
	};
</script>