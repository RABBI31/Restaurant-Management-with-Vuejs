<template>
 <img class="logo" src="../assets/resto1.jpg" />
<h1>
    <span style="color:#ffc200">Sign</span>Up
</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter your name" />
    <input type="email" v-model="email" placeholder="Enter your Email" />
    <input type="password" v-model="password" placeholder="Enter your Password" />
    <button @click.prevent="signUp">SignUp</button>
    <p>Already have a account?  <router-link to="login">Login</router-link></p>

</div>
</template>

<script>
import axios from 'axios';

export default {
    name:'SignUp',
    data(){
         return{
            name:"",
            email:"",
            password:""
         }

    },
    methods: {
        async signUp(){
            let result =await axios.post("http://localhost:3000/users",{

                name : this.name,
                email : this.email,
                password : this.password
                

            })
            
            if(result.status == 201){
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name:"HomeView"})
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:"HomeView"})
        }
    },

}
</script>

<style>

</style>