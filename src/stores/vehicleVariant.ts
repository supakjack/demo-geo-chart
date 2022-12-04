import { defineStore } from 'pinia'
import { useVehicleCategoryStore } from '@/stores'
import carRed from '@/assets/image/car-red.png'
import carGreen from '@/assets/image/car-green.png'
import carBlack from '@/assets/image/car-black.png'
import bikeRed from '@/assets/image/bike-red.png'
import bikeGreen from '@/assets/image/bike-green.png'
import bikeBlack from '@/assets/image/bike-black.png'
import motocycleRed from '@/assets/image/motorcycle-red.png'
import motocycleGreen from '@/assets/image/motorcycle-green.png'
import motocycleBlack from '@/assets/image/motorcycle-black.png'

export const useVehicleVariantStore = defineStore('vehicleVariant', () => {
    const vehicleCategoryStore = useVehicleCategoryStore()

    const type1Data = computed<Group[]>(() => [
        {
            slug: 'รถยนต์แดง',
            value: 'car-red',
            icon: carRed,
            location: [12.605443, 99.950003]
        },
        {
            slug: 'รถยนต์ดำ',
            value: 'car-black',
            icon: carBlack,
            location: [12.605443, 99.950003]
        },
        {
            slug: 'รถยนต์เขียว',
            value: 'car-green',
            icon: carGreen,
            location: [12.605443, 99.950003]
        }
    ])

    const type2Data = computed<Group[]>(() => [
        {
            slug: 'มอเตอร์ไซต์แดง',
            value: 'motorcycle-red',
            icon: motocycleRed,
            location: [12.605005, 99.949972]
        },
        {
            slug: 'มอเตอร์ไซต์ดำ',
            value: 'motorcycle-black',
            icon: motocycleBlack,
            location: [12.605005, 99.949972]
        },
        {
            slug: 'มอเตอร์ไซต์เขียว',
            value: 'motorcycle-green',
            icon: motocycleGreen,
            location: [12.605005, 99.949972]
        }
    ])

    const type3Data = computed<Group[]>(() => [
        {
            slug: 'จักรยานแดง',
            value: 'bicycle-red',
            icon: bikeRed,
            location: [18.365663, 103.639907]
        },
        {
            slug: 'จักรยานดำ',
            value: 'bicycle-black',
            icon: bikeBlack,
            location: [18.365663, 103.639907]
        },
        {
            slug: 'จักรยานเขียว',
            value: 'bicycle-green',
            icon: bikeGreen,
            location: [18.365663, 103.639907]
        }
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
