<template>
  <router-view />
</template>

<script>
// import SignUp from './components/SignUp.vue';

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* Global */
h1{
    text-transform: uppercase;
}

.logo{
    width: 150px;
    display: inline;

}
.register input, .login input, .add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(255,194,0)
}

.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    border: 1px solid rgb(255,194,0);
    font-size: 16px;
    text-transform: uppercase;
    background: #FFC200
}
.register button:hover, .login button:hover , .add button:hover{
    background:rgba(235, 205, 11, 0.92);
    color: white;

}

</style>
