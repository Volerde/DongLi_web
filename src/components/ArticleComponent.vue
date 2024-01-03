<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import CarouselComponent from './CarouselComponent.vue';

const route = useRoute()
const articleRes = ref({})

const queryArticle = (api) => {
    axios.get("/api" + api)
        .then((res) => {
            articleRes.value = res.data
        })
}


onMounted(() => {
    queryArticle(route.query.api)
})

</script>

<template>
    <CarouselComponent :imageList="articleRes.data" />
    <div class="text-style">图片总数：{{ articleRes.image_count }}</div>
    <div class="text-style">{{ articleRes.content }}</div>
</template>

<style scoped>
.text-style {
    padding: 30px 400px 0 400px;
    white-space: pre-wrap;
    text-align: center;
    line-height: 30px;
}
</style>