<template>
  <div>
    <Header />
    <h1>Hello guys, It's e your boy Aj</h1>
  </div>
</template>

<script>
import Header from "./Header.vue"

export default {
    name: 'HomeView',
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