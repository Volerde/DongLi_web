<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
// import Home from './views/Home.vue';
import HeaderBar from './components/HeaderBar.vue'
// import IndexComponent from './pages/IndexComponent.vue';
const api = ref("")
const data = ref([])

const getRes = () => {
  axios.get("localhost:8080" + api)
    .then((res) => {
      data.value = res.data.data;
      console.log("localhost:8080" + api.value);
    })
}
</script>

<template>
  <el-container>
    <el-header>
      <HeaderBar />
    </el-header>
    <el-main>
      <div class="search">
        <el-input v-model="api" placeholder="Please input">
          <template #prepend>Http://</template>
          <template #append>
            <el-button @click="getRes">搜索</el-button>
          </template>
        </el-input>
      </div>
      <!-- <IndexComponent /> -->
      <!-- <router-view></router-view> -->
      <RouterView :res=data></RouterView>
    </el-main>
    <el-footer>

    </el-footer>
  </el-container>
</template>

<style scoped>
.search {
  max-width: 50%;
  margin: 50px auto 50px auto;
}

.el-input {
  display: flex;
  justify-content: center;
  min-height: 40px;
}
</style>
