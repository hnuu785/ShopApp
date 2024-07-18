<template>
	<div>
		<p>Login Screen</p>
		<input v-model="username" type="text" id="username" class="inputs" placeholder="아이디" required />
		<input v-model="password" type="password" id="password" class="inputs" placeholder="비밀번호" required />
		<button @click="login" class="loginBtn">Login</button>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import axios from 'axios';
	
	const username = ref('');
	const password = ref('');
	const router = useRouter();
	
	const login = async () => {
		if (username.value && password.value) {
			try {
				const response = await axios.post('/auth/login', {
					username: username.value,
					password: password.value,
				});
				// handle successful login
				if (response.data.success) {
					// Redirect to a different page if needed
					localStorage.setItem('myToken', response.data.token);
					localStorage.setItem('myName', username);
					localStorage.setItem('myPassword', password);
					router.push('/');
					// 넉스트 navigateTo 이런 함수가 router 말고도 있음.
				}
				else {
					// handle login failure
					alert('Login failed: ' + response.data.message);
				}
			}
			catch (error) {
				//handle request error
				alert('An error occured: ' + error.message);
			}
		}
		else {
			alert('Please enter both username and password.');
		}
	};
</script>