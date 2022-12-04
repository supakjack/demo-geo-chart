import { defineStore } from 'pinia'

export const useRadioGroupStore = defineStore('radioGroup', () => {
  const selected = ref<Group>()
  const data = computed<Group[]>(() => [
    { slug: "กลุ่ม", value: "1" },
    { slug: "เลขโคม", value: "2" },
    { slug: "เลขเสา", value: "3" },
  ])

  return {
    data,
    selected
  }
})
