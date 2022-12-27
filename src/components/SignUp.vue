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
    <p>Already have a Account? login</p>

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

}
</script>

<style>
/* Global */
h1{
    text-transform: uppercase;
}

.logo{
    width: 150px;
    display: inline;

}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(255,194,0)
}

.register button{
    width: 320px;
    height: 40px;
    border: 1px solid rgb(255,194,0);
    font-size: 20px;
    text-transform: uppercase;
    background: #FFC200
}
.register button:hover{
    background:rgba(235, 205, 11, 0.92);
    color: white;

}

</style>