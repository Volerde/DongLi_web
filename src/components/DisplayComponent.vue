<script setup lang="ts">
defineProps<{ res: never[] }>()
import { useRouter } from 'vue-router';
const router = useRouter()
const map = new Map()
let articleRes = ""


// 匠心传承
map.set(38, "/culture/Ingenuity/tie")
map.set(49, "/culture/Ingenuity/jiu")
map.set(62, "/culture/Ingenuity/bianzhu")
map.set(74, "/culture/Ingenuity/caobian")
map.set(83, "/culture/Ingenuity/tao")
map.set(93, "/culture/Ingenuity/fuzhu")
// 建筑工艺
map.set(106, "/culture/architecture/mudiao")
map.set(125, "/culture/architecture/huisu")
map.set(139, "/culture/architecture/dougong")
map.set(154, "/culture/architecture/muchuang")
//东漓美图
map.set(194, "/know/picture/craftsman")
map.set(215, "/know/picture/minsu")
map.set(235, "/know/picture/view")
map.set(282, "/know/picture/xiangtu")

const driveToArticle = (id) => {
    articleRes = map.get(id)
    router.push({
        path: "/article",
        query: {
            "api": articleRes
        }
    })
    console.log(articleRes);

}
</script>

<template>
    <el-space wrap>
        <el-card v-for="(value, index) in res" :key="index" class="box-card" style="width: 650px"
            @click="driveToArticle(value.ID)">
            <template #header>
                <div class="card-header fit-card-header">
                    <!-- <span>Card name</span> -->
                    <img :src="value.URL" class="image-style">
                </div>
            </template>
            <div>{{ value.Title }}</div>
        </el-card>
    </el-space>
</template>

<style scoped>
.fit-card-header {
    min-height: 400px;
}

.image-style {
    max-width: 600px;
}
</style>