import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'


// Pages
import page_favorite from "./pages/favorite.vue";
import page_index from "./pages/index.vue";
import page_my from "./pages/my.vue";
import page_new from "./pages/new.vue";
import page_p from "./pages/p.vue";
import page_recent from "./pages/recent.vue";
import page_search from "./pages/search.vue";
import page_settings from "./pages/settings.vue";

// Vuetify
import './use-vuetify.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// OPSTID Custom CSS
import "./style.css"

const vuetify = createVuetify({
  components,
  directives,

})

// Router
const routes = [
  {
    path: "/favorite",
    component: page_favorite
  },
  {
    path: "/",
    component: page_index
  },
  {
    path: "/my",
    component: page_my
  },
  {
    path: "/new",
    component: page_new
  },
  {
    path: "/p",
    component: page_p
  },
  {
    path: "/recent",
    component: page_recent
  },
  {
    path: "/search",
    component: page_search
  },
  {
    path: "/settings",
    component: page_settings
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
});

createApp(App).use(vuetify).use(router).mount('#app')