<template>
    <img class="logo" src="../assets/resto1.jpg" />
   <h1>
       <span style="color:#ffc200">Log</span>in
   </h1>
   <div class="login">
       <input type="email" v-model="email" placeholder="Enter your Email" />
       <input type="password" v-model="password" placeholder="Enter your Password" />
       <button @click.prevent="login">Login</button>
       <p>Create a new account?  <router-link to="sign-up">SignUp</router-link></p>
   
   </div>
   </template>

<script>
import axios from 'axios';
export default {
    name:"login",
    data(){
         return{
            email:"",
            password:""
         }

    },
    methods: {
        async login(){
        let result = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
        if(result.status == 200 && result.data.length>0){
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name:"HomeView"})
            }

        else{
             alert("You have inputed a wrong email and password")
             
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