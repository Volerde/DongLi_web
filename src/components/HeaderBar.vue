<script setup lang="ts">
import { ref } from "vue";
const activeIndex = ref('0')
const emit = defineEmits(["getHeaderBarValue"])
const map = new Map()

map.set("0", "")

map.set("1-1", "/lexiangdongli/zhu")
map.set("1-2", "/lexiangdongli/eat")
map.set("1-3", "/lexiangdongli/wan")

map.set("2-1", "/culture/Ingenuity")
map.set("2-2", "/culture/architecture")

map.set("3-1", "/know/donglijianjie")
map.set("3-2", "/know/map")
map.set("3-3", "/know/yanxue")
map.set("3-4", "/know/picture")

map.set("4", "/getNum")

const handleSelect = (key: string, _keyPath: string[]) => {
    emit("getHeaderBarValue", map.get(key))
}
</script>

<template>
    <el-menu :defaulf-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <div class="flex-grow-1"></div>
        <div class="text-center">东漓古村</div>
        <div class="flex-grow-3" />
        <el-menu-item index="0">网站首页</el-menu-item>
        <el-sub-menu index="1">
            <template #title>乐享东漓</template>
            <el-menu-item index="1-1">住在东漓</el-menu-item>
            <el-menu-item index="1-2">食在东漓</el-menu-item>
            <el-menu-item index="1-3">玩在东漓</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>东漓文化</template>
            <el-menu-item index="2-1">匠心传承</el-menu-item>
            <el-menu-item index="2-2">建筑工艺</el-menu-item>
            <!-- <el-menu-item index="2-3">桂北民俗</el-menu-item> -->
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>了解东漓</template>
            <el-menu-item index="3-1">东漓简介</el-menu-item>
            <el-menu-item index="3-2">东漓地图</el-menu-item>
            <!-- <el-menu-item index="3-3">休闲度假</el-menu-item> -->
            <el-menu-item index="3-3">研学游学</el-menu-item>
            <!-- <el-menu-item index="3-4">团建拓展</el-menu-item> -->
            <el-menu-item index="3-4">东漓美图</el-menu-item>
        </el-sub-menu>
        <!-- <el-menu-item index="4">网站地图</el-menu-item> -->
        <el-menu-item index="4">统计</el-menu-item>
        <div class="flex-grow-1"></div>
    </el-menu>
</template>

<style scoped>
.flex-grow-3 {
    flex-grow: 3;
}

.flex-grow-1 {
    flex-grow: 1;
}

.text-center {
    margin: auto 0;
}
</style>