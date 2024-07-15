<template>
	<div>
		<p>Register Screen</p>
		<input v-model="username" type="text" id="username" class="inputs" placeholder="이름" required />
		<input v-model="nickname" type="text" id="nickname" class="inputs" placeholder="닉네임" required />
		<input v-model="email" type="text" id="email" class="inputs" placeholder="이메일" required />
		<input v-model="password" type="password" id="password" class="inputs" placeholder="비밀번호" required />
		<input v-model="password" type="password" id="password" class="inputs" placeholder="비밀번호 확인" required />
		<button @click="register" class="registerBtn">Register</button>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	import axios from 'axios';
	
	const username = ref('');
	const nickname = ref('');
	const email = ref('');
	const password = ref('');
	
	const register = async () => {
		if (username.value && email.value && password.value && nickname.value) {
			try {
				const response = await axios.post('/auth/register', {
					username: username.value,
					nickname: nickname.value,
					email: email.value,
					password: password.value
				});
				if (response.data.success) {
					router.push('/');
				}
			}
			catch (error) {
				//handle request error
				alert('An error occured: ' + error.message);
			}
		}
		else {
			alert('Please enter whole of inputs.');
		}
	};
</script>