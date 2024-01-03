import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DisplayComponentVue from '../components/DisplayComponent.vue';
import ArticleComponentVue from '../components/ArticleComponent.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: DisplayComponentVue,
    },
    {
        path: '/article',
        name: 'article',
        component: ArticleComponentVue
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
