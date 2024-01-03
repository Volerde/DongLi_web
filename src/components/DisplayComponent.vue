<script setup lang="ts">
defineProps<{ res: never[] }>()
import { useRouter } from 'vue-router';
const router = useRouter()
const map = new Map()
let articleRes = ""


// 匠心传承
map.set(368, "/culture/Ingenuity/tie")
map.set(380, "/culture/Ingenuity/jiu")
map.set(395, "/culture/Ingenuity/bianzhu")
map.set(409, "/culture/Ingenuity/caobian")
map.set(420, "/culture/Ingenuity/tao")
map.set(432, "/culture/Ingenuity/fuzhu")
// 建筑工艺
map.set(447, "/culture/architecture/mudiao")
map.set(467, "/culture/architecture/huisu")
map.set(483, "/culture/architecture/dougong")
map.set(500, "/culture/architecture/muchuang")
//东漓美图
map.set(548, "/know/picture/craftsman")
map.set(569, "/know/picture/minsu")
map.set(589, "/know/picture/view")
map.set(636, "/know/picture/xiangtu")

const driveToArticle = (id) => {
    articleRes = map.get(id)
    router.push({
        path: "/article",
        query: {
            "api": articleRes
        }
    })
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