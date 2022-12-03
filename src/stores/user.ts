import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const { locale } = useI18n()
  return {}
})
