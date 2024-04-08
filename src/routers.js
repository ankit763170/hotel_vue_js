import { createRouter, createWebHistory } from 'vue-router';
import Home from "./Components/Home.vue";
import Signup from './Components/Signup.vue';
import Login from './Components/Login.vue';
const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Signup',
        component: Signup,
        path: '/Signup'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
