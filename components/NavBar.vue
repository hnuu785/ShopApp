<template>
	<nav class="navbar">
		<ul>
			<li><NuxtLink to="/">Home</NuxtLink></li>
			<li><NuxtLink to="/register">Register</NuxtLink></li>
			<li><NuxtLink to="/login">Login</NuxtLink></li>
		</ul>
	</nav>
</template>

<style scoped>
	.navbar {
		background-color: #333;
		padding: 1rem;
	}
	.navbar ul {
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}
	.navbar a {
		color: white;
		text-decoration: none;
	}
	.navBtn {
		background-color: #333;
		color: white;
	}
	.myname {
		color: white;
		text-decoration: none;
	}
</style>