<template>
    <div>
      <Header />
      <img class="logo" src="../assets/resto1.jpg" />
      <h1> Add <span style="color:#ffc200">Restaurant</span></h1>
      <form class="add">
        <input type="text" v-model="restaurant.name" placeholder="Enter restaurant name" />
        <input type="text" v-model="restaurant.contact" placeholder="Enter restaurant contact" />
        <input type="text" v-model="restaurant.address" placeholder="Enter restaurant address" />
        <button type="button" @click="addRestaurant">Add new restaurant</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Header from "./Header.vue";
  
  export default {
      name: 'Add',
      data() {
        return {
          restaurant:{
            name:'',
            contact:'',
            address:''
          }
        }
      },
      methods: {
        async addRestaurant(){
          console.warn(this.restaurant)
          const result = await axios.post('http://localhost:3000/restaurant',{
            name:this.restaurant.name,
            contact:this.restaurant.contact,
            address:this.restaurant.address
          })
          if(result.status == 201){
            this.$router.push({name:"HomeView"})
          }
        }
      },
      components:{
        Header
      },
      mounted() {
          let user = localStorage.getItem('user-info')
          if(!user){
              this.$router.push({name:"SignUp"})
          }
      },
  
  }
  </script>
  
  <style>
  
  </style>