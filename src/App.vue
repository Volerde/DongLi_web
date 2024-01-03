<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
// import Home from './views/Home.vue';
import HeaderBar from './components/HeaderBar.vue'
// import IndexComponent from './pages/IndexComponent.vue';
const api = ref("")
const data = ref([])
const router = useRouter()
const getRes = () => {
  if (api.value = "/getNum") {
    axios.get("/api" + api.value)
      .then((res) => {
        data.value = res.data
        console.log("/api" + api.value);
        router.push({
          path: "/echart",
          query: {
            "api": api.value
          }
        })
      })
  } else {
    axios.get("/api" + api.value)
      .then((res) => {
        data.value = res.data.data;
        console.log("/api" + api.value);
        if (res.data.content != "") {
          router.push({
            path: "/article",
            query: {
              "api": api.value
            }
          })
        }
      }).catch(() => {
        data.value = []
      })
  }
}

const getHeaderBarValue = (value: string) => {
  api.value = value
}
</script>

<template>
  <el-container>
    <el-header>
      <HeaderBar @get-header-bar-value="getHeaderBarValue" />
    </el-header>
    <el-main>
      <el-row class="search">
        <el-col :span="12" :offset="6">
          <el-input v-model="api" placeholder="" disabled>
            <template #prepend>接口地址</template>
            <!-- <template #append>
            </template> -->
          </el-input>
        </el-col>
        <el-col :span="1">
          <RouterLink to="/">
            <el-button class="el-input" @click="getRes">搜索</el-button>
          </RouterLink>
        </el-col>
      </el-row>
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
  margin: 50px auto 50px auto;
}

.el-input {
  display: flex;
  justify-content: center;
  min-height: 40px;
}
</style>
