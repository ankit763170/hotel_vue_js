<script>
import Navbar from './Navbar.vue'

export default {
    name: 'Home',
    components: {
        Navbar
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ path: '/signup' });
        }
    }
}
</script>

<template>
    <div>
        <Navbar/>
        <h1>Hello User, Welcome to the Home page</h1>
    </div>
</template>
