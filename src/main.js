/**
 * OPSTID
 * Web Client
 * 
 * Where people find connections with others.
 * (C) 2023 OPSTID
 */
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

import "vuetify/dist/vuetify.min.css"
import "./style.css"

// import router
import router from "./pages/router"
//import i18n
import i18n from './lang/lang'

import App from "./App.vue"

// init vuetify, the UI Library
const vuetify = createVuetify({
    components,
    directives,
    theme:{
        defaultTheme: "light"
    }
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(i18n)
app.mount("#app")
