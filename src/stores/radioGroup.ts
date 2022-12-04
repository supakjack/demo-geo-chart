import { defineStore } from 'pinia'
import { useSelectGroupStore } from '@/stores'

export const useRadioGroupStore = defineStore('radioGroup', () => {
    const selectGroupStore = useSelectGroupStore()
    const selected = ref<Group>()
    const data = computed<Group[]>(() => [
        { slug: 'รถยนต์', value: '1' },
        { slug: 'มอเตอร์ไซต์', value: '2' },
        { slug: 'จักรยาน', value: '3' }
    ])

    function handleSelected(value: string) {
        selected.value = data.value.find((data) => data.value == value)
        selectGroupStore.selected = selectGroupStore.placeholder
    }

    return {
        data,
        selected,
        handleSelected
    }
})
