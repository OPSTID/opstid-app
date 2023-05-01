import { createRouter, createWebHistory } from "vue-router"

// START Pages
import pageIndex from "./index.vue"
import pageP from "./p.vue"
import pageShare from "./share.vue"
import pageMy from "./my.vue"
import pageChangeMainProfile from "./changeMainProfile.vue"
import pageSearch from "./search.vue"
import pageSettings from "./settings.vue"
import pageAbout from "./about.vue"
import pageNotFound from "./notfound.vue"
// END Pages

// define routes
const routes = [
    {
        path: "/",
        component: pageIndex
    },
    {
        path: "/p",
        component: pageP
    },
    {
        path: "/share/:myOpstidId",
        component: pageShare
    },
    {
        path: "/my",
        component: pageMy
    },
    {
        path: "/my/change-main-profile",
        component: pageChangeMainProfile
    },
    {
        path: "/search",
        component: pageSearch
    },
    {
        path: "/settings",
        component: pageSettings
    },
    {
        path: "/about",
        component: pageAbout
    },
    // 404 page
    { path: '/:catchAll(.*)', component: pageNotFound }
]

// create router
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router