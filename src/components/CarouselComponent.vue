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
/* .el-carousel__item h3 {
    color: #475669;
    opacity: 1;
    line-height: calc(30vh);
    margin: 0;
    text-align: center;
} */

/* .el-carousel {
    min-width: calc(100vh);
} */
.fit-carousel {
    max-height: 500px;
}
</style>