<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios';
import { Bar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale
);
const route = useRoute()
const echartData = ref([])
const queryArticle = (api) => {
    axios.get("/api" + api)
        .then((res) => {
            echartData.value = res.data
        })
}


onMounted(() => {
    queryArticle(route.query.api)
})

const barChartData = computed(() => {
    const data = {
        labels: [""],
        datasets: [
            {
                data: [0],
                label: "数量",
                backgroundColor: "#39c5bb",
            },
        ],
    };
    for (let i = 0; i < echartData.value.length; i++) {
        data.labels[i] = echartData.value[i].title;
        data.datasets[0].data[i] = echartData.value[i].count;
    }
    return data;
});
const chartOptions = {
    responsive: true,
};
</script>

<template>
    <Bar class="chart" :data="barChartData" :options="chartOptions" />
</template>

<style scoped></style>