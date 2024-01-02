<template>
    <div>
        <h1>Welcome to the Home Page</h1>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <!-- <router-link to="/articles">Articles</router-link> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
});
</script>

<style scoped>
h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

router-link {
    margin-right: 10px;
}
</style>
