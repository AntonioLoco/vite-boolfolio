import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./pages/Homepage.vue";
import AboutUs from "./pages/AboutUs.vue";
import ProjectList from "./pages/ProjectList.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Homepage
        },
        {
            path: "/about-us",
            name: "about-us",
            component: AboutUs
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectList
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFoundPage,
        }
    ]
});

export { router }