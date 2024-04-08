<template>
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">Restaurant</router-link>
        <div class="nav-links">
          <router-link to="/menu">Menu</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
          <button @click="logout">Logout</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    methods: {
      logout() {
        // Clear user info from localStorage
        localStorage.removeItem("user-info");
        // Redirect to the login page
        this.$router.push({ name: "Login" });
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: hsl(200, 84%, 48%);
    color: #fff;
    padding: 10px 0;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 24px;
    text-decoration: none;
    color: #fff;
  }
  
  .nav-links {
    display: flex;
  }
  
  .nav-links a, .nav-links button {
    margin-left: 20px;
    color: #fff;
    text-decoration: none;
    border: none;
    background: none;
    cursor: pointer;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  