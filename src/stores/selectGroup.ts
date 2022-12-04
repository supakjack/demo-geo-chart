import { defineStore } from 'pinia'
import { useRadioGroupStore } from '@/stores'

export const useSelectGroupStore = defineStore('selectGroup', () => {

  const radioGroupStore = useRadioGroupStore()

  const type1Data = computed<Group[]>(() => [
    { slug: "แดง", value: "red" },
    { slug: "ดำ", value: "black" },
  ])

  const type2Data = computed<Group[]>(() => [
    { slug: "เขียว", value: "green" },
    { slug: "เหลือง", value: "yellow" },
  ])

  const type3Data = computed<Group[]>(() => [
    { slug: "น้ำเงิน", value: "blue" },
    { slug: "ขาว", value: "white" },
  ])

  const placeholder = computed<string>(() => 'กรุณาเลือกกลุ่มก่อน')
  const selected = ref<Group | string>(placeholder.value)
  const data = computed<Group[]>(() => handleChange())

  function handleChange() {
    if (!radioGroupStore.selected) return []

    switch (radioGroupStore.selected.value) {
      case "1": return type1Data.value
      case "2": return type2Data.value
      case "3": return type3Data.value
    }

    return []
  }

  return {
    data,
    selected,
    placeholder
  }
})
