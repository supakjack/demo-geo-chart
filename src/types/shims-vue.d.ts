declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
declare module '@intlify/vite-plugin-vue-i18n/messages' {
  import { LocaleMessages } from '@intlify/core-base'
  import { VueMessageType } from 'vue-i18n'
  const messages: LocaleMessages<VueMessageType>
  export default messages
}

declare module '@headlessui/vue'
declare module '@heroicons/vue/24/outline'
