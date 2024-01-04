<script setup lang="ts">
defineProps<{ imageList: [] }>()


</script>

<template>
    <div>
        <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="(value, index) in imageList" :key="index">
                <img :src="value.URL" class="fit-carousel">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped>
.fit-carousel {
    max-height: 500px;
}
</style>