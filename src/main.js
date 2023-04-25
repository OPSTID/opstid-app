/**
 * OPSTID
 * Web Client
 * 
 * Where people find connections with others.
 * (C) 2023 OPSTID
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "vuetify/dist/vuetify.min.css"

import App from "./App.vue"

// START Pages
import pageIndex from "./pages/index.vue"
import pageP from "./pages/p.vue"
import pageShare from "./pages/share.vue"
import pageSearch from "./pages/search.vue"
import pageSettings from "./pages/settings.vue"
import pageNotFound from "./pages/notfound.vue"
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
        path: "/search",
        component: pageSearch
    },
    {
        path: "/settings",
        component: pageSettings
    },
    // 404 page
    { path: '/:catchAll(.*)', component: pageNotFound }
]

// create router
const router = createRouter({
    history: createWebHistory(),
    routes,
})

// init vuetify, the UI Library
const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount("#app")
