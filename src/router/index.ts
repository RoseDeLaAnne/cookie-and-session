import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import LandView from "@/views/land/LandView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "land",
        component: LandView,
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/main/HomeView.vue"),
    },
    {
        path: "/music",
        name: "music",
        component: () => import("@/views/main/MusicView.vue"),
    },
    {
        path: "/instruments",
        name: "instruments",
        component: () => import("@/views/main/InstrumentsView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
