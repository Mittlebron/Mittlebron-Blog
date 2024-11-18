import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WelcomeView from "../views/WelcomeView.vue";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home Page',
        component: HomeView
    },
    {
        path: '/welcome',
        name: 'Welcome Page',
        component: WelcomeView
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router