import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import i18n from '@/i18n'
import { router } from '@/router'
import '@/index.css'
import '@/assets/font.css'
import 'virtual:windi.css'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(i18n)
  .mount('#app')
