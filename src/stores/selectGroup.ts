import { defineStore } from 'pinia'
import { useRadioGroupStore } from '@/stores'

export const useSelectGroupStore = defineStore('selectGroup', () => {
    const radioGroupStore = useRadioGroupStore()

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
        radioGroupStore.selected
            ? 'กรุณาเลือกสีของ' + radioGroupStore.selected.slug
            : 'กรุณาเลือกประเภทการค้นหาก่อน'
    )
    const inSelected = ref<Group[]>([])
    const data = computed<Group[]>(() => handleChangeRadioGroup())

    function handleChangeRadioGroup() {
        if (!radioGroupStore.selected) return []

        switch (radioGroupStore.selected.value) {
            case '1':
                return type1Data.value
            case '2':
                return type2Data.value
            case '3':
                return type3Data.value
        }

        return []
    }

    function handleSelected(value: string) {
        if (inSelected.value.find((inSelected) => inSelected.value == value))
            return
        const addData = data.value.find((data) => data.value == value)
        if (addData) inSelected.value.push(addData)
    }

    function handleClickBadge(value: string) {
        inSelected.value = inSelected.value.filter(
            (inSelected) => inSelected.value != value
        )
    }

    return {
        data,
        selected,
        placeholder,
        inSelected,
        handleSelected,
        handleClickBadge
    }
})
