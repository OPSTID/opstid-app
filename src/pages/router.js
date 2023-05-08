import { createRouter, createWebHistory } from "vue-router"

// START Pages
import pageIndex from "./index.vue"
import pageP from "./p.vue"
import pageShare from "./share.vue"
import pageMy from "./my.vue"
import pageSearch from "./search.vue"
import pageScan from "./scan.vue"
import pageSettings from "./settings.vue"
import pageChangeMainProfile from "./changeMainProfile.vue"
import pageBlockedProfiles from "./blockedProfiles.vue"
import pageAbout from "./about.vue"
import pageCautions from "./cautions.vue"
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
        path: "/search",
        component: pageSearch
    },
    {
        path: "/scan",
        component: pageScan
    },
    {
        path: "/settings",
        component: pageSettings
    },
    {
        path: "/settings/change-main-profile",
        component: pageChangeMainProfile
    },
    {
        path: "/settings/blocked-profiles",
        component: pageBlockedProfiles
    },
    {
        path: "/about",
        component: pageAbout
    },
    {
        path: "/cautions",
        component: pageCautions
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