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
        { slug: 'รถยนต์แดง', value: 'car-red' },
        { slug: 'รถยนต์ดำ', value: 'car-black' },
        {
            slug: 'รถยนต์เขียว',
            value: 'car-green',
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/524160-1584460656.jpg?crop=0.740xw:0.555xh;0.0529xw,0.322xh&resize=1200:*',
            la: 12.5,
            long: 99.50385
        }
    ])

    const type2Data = computed<Group[]>(() => [
        {
            slug: 'มอเตอร์ไซต์แดง',
            value: 'motorcycle-red',
            img: 'https://c8.alamy.com/comp/2FMHYXA/red-marlboro-ducati-motorbike-rider-two-wheeled-transport-motorcycles-vehicle-roads-racer-motorbikes-motorcycle-bike-riders-motoring-in-chorley-uk-2FMHYXA.jpg',
            la: 12.6,
            long: 99.60385
        },
        { slug: 'มอเตอร์ไซต์ดำ', value: 'motorcycle-black' },
        { slug: 'มอเตอร์ไซต์เขียว', value: 'motorcycle-green' }
    ])

    const type3Data = computed<Group[]>(() => [
        {
            slug: 'จักรยานแดง',
            value: 'bicycle-red',
            img: 'https://cdn.media.halfords.com/i/washford/566262/Apollo-Phaze-Mens-Mountain-Bike--Red---14-17-20-Frames.webp?fmt=auto&qlt=default&$sfcc_tile$&w=680',
            la: 12.611077,
            long: 99.895801
        },
        {
            slug: 'จักรยานดำ',
            value: 'bicycle-black',
            img: 'https://cdn.media.halfords.com/i/washford/340910/Carrera-Vengeance-Mens-Mountain-Bike---Black---XS-S-M-L-XL-Frames.webp?fmt=auto&qlt=default&$sfcc_tile$&w=456',
            la: 12.575799,
            long: 99.870385
        },
        {
            la: 12.5758,
            long: 99.978,
            slug: 'จักรยานเขียว',
            value: 'bicycle-green',
            img: 'data:image/jpeg;base64,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'
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
