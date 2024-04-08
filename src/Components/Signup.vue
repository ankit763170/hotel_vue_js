<template>
    <div class="logod">
        <img class="logo" src="https://media.istockphoto.com/id/981368726/vector/restaurant-food-drinks-logo-fork-knife-background-vector-image.jpg?s=612x612&w=is&k=20&c=fHFZkf0JXRVLx-CDPTuzyIPgNssEyHES4Ut2KX2aUD8=" />
    </div>
  
    <h1 class="header">
        Sign Up
    </h1>
    <div class="container">
        <input type="text" placeholder="Enter your name" v-model="name" class="input-field"/><br/>
        <input type="text" placeholder="Enter your Email" v-model="Email" class="input-field"/><br/>
        <input type="password" placeholder="Enter your password" v-model="Password" class="input-field"/><br/>
        <button @click="submitForm" class="submit-button">Submit</button><br/>
        <div>
            <p>
                <router-link to="/login">Login</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Signup',
    data() {
        return {
            name: '',
            Email: '',
            Password: ''
        }
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post('http://localhost:3000/users', {
                    name: this.name,
                    Email: this.Email,
                    Password: this.Password
                });
                if (response.status === 201) {
                    const userData = response.data; // Newly created user data
                    console.log(userData); 
                    localStorage.setItem("user-info", JSON.stringify(userData));
                    this.$router.push({name : 'Home'})
                    alert("Successfully Registered...!");
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    },
    mounted(){
        let user= localStorage.getItem( "user-info");
        if(user){
           this.$router.push({path:'/'});
        }
    }
}
</script>

<style>
.logo {
    width: 20%;
}

.logod {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.header {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.container {
    margin: auto;
    width: 300px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.submit-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #0056b3;
}
</style>
