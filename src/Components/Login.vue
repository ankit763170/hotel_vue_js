<template>
    <div>
      <h1 class="header">Login</h1>
      <div class="container">
        <div class="logod">
          <img class="logo" src="https://media.istockphoto.com/id/981368726/vector/restaurant-food-drinks-logo-fork-knife-background-vector-image.jpg?s=612x612&w=is&k=20&c=fHFZkf0JXRVLx-CDPTuzyIPgNssEyHES4Ut2KX2aUD8=" />
        </div>
        <input type="text" placeholder="Enter your Email" v-model="email" class="input-field" /><br/>
        <input type="password" placeholder="Enter your password" v-model="password" class="input-field" /><br/>
        <button @click="login" class="submit-button">Login</button><br/>
        <div>
          <p>Not registered? <router-link to="/signup">Sign up</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
    async login() {
      try {
        const response = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
        if (response.status === 200) {
          const userData = response.data; // User data
          console.log(userData); 
          localStorage.setItem("user-info", JSON.stringify(userData));
          this.$router.push({ name: 'Home' });
        } else {
          alert("Invalid email or password");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  