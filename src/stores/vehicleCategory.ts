import { defineStore } from 'pinia'

export const useVehicleCategoryStore = defineStore('vehicleCategory', () => {
    const selected = ref<Group>()
    const data = computed<Group[]>(() => [
        { slug: 'รถยนต์', value: '1' },
        { slug: 'มอเตอร์ไซต์', value: '2' },
        { slug: 'จักรยาน', value: '3' }
    ])

    return {
        data,
        selected
    }
})
