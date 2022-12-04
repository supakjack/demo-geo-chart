import { defineStore } from 'pinia'
import { useVehicleCategoryStore } from '@/stores'

export const useVehicleVariantStore = defineStore('vehicleVariant', () => {
    const vehicleCategoryStore = useVehicleCategoryStore()

    const type1Data = computed<Group[]>(() => [
        { slug: 'รถยนต์แดง', value: 'car-red' },
        { slug: 'รถยนต์ดำ', value: 'car-black' },
        { slug: 'รถยนต์เขียว', value: 'car-green' }
    ])

    const type2Data = computed<Group[]>(() => [
        { slug: 'มอเตอร์ไซต์แดง', value: 'motorcycle-red' },
        { slug: 'มอเตอร์ไซต์ดำ', value: 'motorcycle-black' },
        { slug: 'มอเตอร์ไซต์เขียว', value: 'motorcycle-green' }
    ])

    const type3Data = computed<Group[]>(() => [
        { slug: 'จักรยานแดง', value: 'bicycle-red' },
        { slug: 'จักรยานดำ', value: 'bicycle-black' },
        { slug: 'จักรยานเขียว', value: 'bicycle-green' }
    ])

    const selected = ref<Group | string>('กรุณาเลือกประเภทการค้นหาก่อน')
    const placeholder = computed<string>(() =>
        vehicleCategoryStore.selected
            ? 'กรุณาเลือกสีของ' + vehicleCategoryStore.selected.slug
            : 'กรุณาเลือกประเภทการค้นหาก่อน'
    )
    const inSelected = ref<Group[]>([])
    const data = computed<Group[]>(() => {
        if (!vehicleCategoryStore.selected) return []

        switch (vehicleCategoryStore.selected.value) {
            case '1':
                return type1Data.value
            case '2':
                return type2Data.value
            case '3':
                return type3Data.value
        }

        return []
    })

    return {
        data,
        selected,
        placeholder,
        inSelected
    }
})
