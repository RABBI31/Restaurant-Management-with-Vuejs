<template>
    <div>
      <Header />
      <img class="logo" src="../assets/resto1.jpg" />

      <h1>Hello guys, It's a Update pages</h1>
      
      <form class="add">
        <input type="text" v-model="restaurant.name" placeholder="Enter restaurant name" />
        <input type="text" v-model="restaurant.contact" placeholder="Enter restaurant contact" />
        <input type="text" v-model="restaurant.address" placeholder="Enter restaurant address" />
        <button type="button" @click="updateRestaurant">Update restaurant</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Header from "./Header.vue"
  
  export default {
      name: 'Update',
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
        async updateRestaurant(){
          const result = await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id,{
            name:this.restaurant.name,
            contact:this.restaurant.contact,
            address:this.restaurant.address
          })
          if(result.status == 200){
            this.$router.push({name:"HomeView"})
          }

        }
      },
      components:{
        Header
      },
      async mounted() {
          let user = localStorage.getItem('user-info')
          if(!user){
              this.$router.push({name:"SignUp"})
          }
          const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
          console.warn(result)
          this.restaurant = result.data
      },
  
  }
  </script>
  
  <style>
  
  </style>