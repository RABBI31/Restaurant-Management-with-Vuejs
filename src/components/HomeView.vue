<template>
  <div>
    <Header />
    <img class="logo" src="../assets/resto1.jpg" />

    <h1>Hello <span style="color:#ffc200">{{ name }}</span>, Welcome to the Restaurant Service</h1>
    <table border="1">
      <tr class="row-1">
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Actions</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td class="btn-con">
          <router-link :to="'/update-restaurant/'+item.id" class="btn">Update</router-link>
          <button @click="deleteRestaurant(item.id)" >Delete</button>
        </td>
        
      </tr>
    </table>
  </div>
</template>

<script>
import Header from "./Header.vue"
import axios from "axios";

export default {
    name: 'HomeView',
    data() {
      return {
        name:'',
        restaurant:[],
      }
    },
    methods: {
     async deleteRestaurant(id){
        let result = await axios.delete("http://localhost:3000/restaurant/"+id);
        if(result.status == 200){
           this.loadData()
        }
        console.warn(id)
      },
      async loadData(){
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        if(!user){
            this.$router.push({name:"SignUp"})
        }

        let result = await axios.get("http://localhost:3000/restaurant");
        this.restaurant = result.data
      }
    },
    components:{
      Header
    },
    async mounted() {
        this.loadData()
    },

}
</script>

<style>
table{
  place-items: center;
  margin-top: 20px;
  margin-left: 25%;
}
.row-1 td{
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  background: #6A0234;
  color: #fff;

}
td{
  width: 160px;
  height: 40px;
}

.btn-con{
  display: flex;
  gap: 5px;
}

.btn-con button{
  text-decoration: none;
  border-radius: 4px;
  padding: 10px 15px;
  transition: 1s cubic-bezier(0.39, 0.5, 0.15, 1.36);
  color: #ffc200;
  box-shadow: 0 0 0 1px inset;
  font-weight: bolder;
  font-size: 14px;
}
.btn-con button:hover{
  color: #fff;
  box-shadow: #ffc200 0 0 0 40px inset;
}
.btn{
  display: block;
  max-width: 80px;
  text-decoration: none;
  border-radius: 4px;
  padding: 10px 15px;
  transition: 1s cubic-bezier(0.39, 0.5, 0.15, 1.36);
  color: #00bfff;
  box-shadow:  0 0 0 1px inset;
}
.btn:hover{
  color: #fff;
  box-shadow: #ffc200 0 0 0 40px inset;
}
</style>