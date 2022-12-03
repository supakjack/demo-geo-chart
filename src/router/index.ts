import { router as r } from '@/router'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((route) => {
  if (route.name) return
  r.push({ name: 'index' })
})

export { router }
