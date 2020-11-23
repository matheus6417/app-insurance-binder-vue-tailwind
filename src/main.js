import { createApp } from 'vue'
import './assets/main.scss'
import App from './App.vue'
import store from './store'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import VueTheMask from 'vue-the-mask'
let app = createApp(App)

let router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
})

if (import.meta.hot) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.acceptDeps('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(VueTheMask).use(store).use(router).mount('#app')
