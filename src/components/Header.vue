<template>
  <header class="header-fixed">

	<div class="header-limiter">

		<img src="../assets/resto1.jpg" />

		<nav>
			<router-link to="/home" >Home</router-link>
			<router-link to="/add-restaurant">Add Restaurant</router-link>
			<a @click="logout" href="#">Logout</a>
			
		</nav>

	</div>

</header>

</template>

<script>
export default {
    name:"Header",
	data() {
		return {
			name:'',
		}
	},
	methods: {
		logout(){
			localStorage.clear();
			this.$router.push({name:'login'})
		}
		
	},
	

}
</script>

<style>
.header-fixed {
	background-color:#6A0234;
	box-shadow:0 1px 1px #ccc;
	padding: 20px 40px;
	height: 80px;
	color: #ffffff;
	box-sizing: border-box;
	top:-100px;

	-webkit-transition:top 0.3s;
	transition:top 0.3s;
}

.header-fixed .header-limiter {
	text-align: center;
	margin: 0 auto;
}

/*	The header placeholder. It is displayed when the header is fixed to the top of the
	browser window, in order to prevent the content of the page from jumping up. */

.header-fixed-placeholder{
	height: 80px;
	display: none;
}

/* Logo */

.header-fixed .header-limiter img {
	float: left;
    width: 100px;
    height: 50px;
    margin-bottom: 5px;
}

.header-fixed .header-limiter h1 span {
	color: #5383d3;
}

/* The navigation links */

.header-fixed .header-limiter a {
	color: #ffffff;
	text-decoration: none;
}

.header-fixed .header-limiter nav {
	font:16px Arial, Helvetica, sans-serif;
	line-height: 40px;
	float: right;
}

.header-fixed .header-limiter nav a{
	display: inline-block;
	padding: 0 5px;
    margin-left: 10px;
	text-decoration:none;
    text-transform: uppercase;
    font-weight: bolder;
	color: #ffffff;
	opacity: 0.9;
}

.header-fixed .header-limiter nav a:hover{
	opacity: 1;
    background: #d63f8871;
}



 .router-link-exact-active {
	color: #FFC200;
	opacity: 1;
	
}

/* Fixed version of the header */

/* body.fixed .header-fixed {
	padding: 10px 40px;
	height: 50px;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
}

body.fixed .header-fixed-placeholder {
	display: block;
}

body.fixed .header-fixed .header-limiter h1 {
	font-size: 24px;
	line-height: 30px;
}

body.fixed .header-fixed .header-limiter nav {
	line-height: 28px;
	font-size: 13px;
} */


/* Making the header responsive */

@media all and (max-width: 600px) {

	.header-fixed {
		padding: 20px 0;
		height: 75px;
	}

	.header-fixed .header-limiter h1 {
		float: none;
		margin: -8px 0 10px;
		text-align: center;
		font-size: 24px;
		line-height: 1;
	}

	.header-fixed .header-limiter nav {
		line-height: 1;
		float:none;
	}

	.header-fixed .header-limiter nav a {
		font-size: 13px;
	}

	body.fixed .header-fixed {
		display: none;
	}

}

/*
	 We are clearing the body's margin and padding, so that the header fits properly.
	 We are also adding a height to demonstrate the scrolling behavior. You can remove
	 these styles.
 */

body {
	margin: 0;
	padding: 0;
	height: 1500px;
}
</style>