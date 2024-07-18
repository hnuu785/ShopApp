<template>
	<div>
		<p>My page Screen</p>
		<button @click="deleteAcoount" class="btn">Delete my account</button>
		<p>Password change</p>
		<input v-model="username" type="text" id="username" class="inputs" placeholder="아이디" required />
		<input v-model="email" type="text" id="email" class="inputs" placeholder="이메일" required />
		<input v-model="prePassword" type="password" id="password" class="inputs" placeholder="이전 비밀번호" required />
		<input v-model="changePassword" type="password" id="password" class="inputs" placeholder="바꿀 비밀번호" required />
		<button @click="changepw" class="btn">change password</button>
		<p>User Inform</p>
		<button @click="userGet" class="btn">user inform</button>
		<p>{{userInform}}</p>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import axios from 'axios';
	
	const username = ref('');
	const email = ref('');
	const password = ref('');
	const prePassword = ref('');
	const changePassword = ref('');
	const userInform = ref('before click');
	
	const deleteAcoount = async () => {
		try {
			password.value = getItem('myPassword');
			const response = await axios.delete('/auth/delete', {
				email: email.value,
				password: password.value,
			});
			if (response.data.success) {
				router.push('/');
			}
		} catch (e) {
			alert('An error occured: ' + error.message);
		}
	};
	
	const changepw = async () => {
		try {
			const response = await axios.post('/auth/changepw', {
				currentpw: prePassword.value,
				changepw: changePassword.value,
			});
		} catch (error) {
			alert('An error occured: ' + error.message);
		}
	};
	
	const userGet = async () => {
		try {
			const response = await axios.get('/my');
			userInform.value = response.data;
		} catch (error) {
			userInform.value = response.error;
		}
	}
</script>