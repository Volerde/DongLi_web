<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const articleRes = ref({})

const queryArticle = (api) => {
    axios.get("localhost:8080" + api)
        .then((res) => {
            articleRes.value = res.data
        })
}

onMounted(() => {
    queryArticle(route.query.api)
})

</script>

<template></template>

<style scoped></style>