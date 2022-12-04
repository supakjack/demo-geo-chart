<script setup lang="ts">
import { useVehicleCategoryStore, useVehicleVariantStore } from '@/stores'

const vehicleVariant = useVehicleVariantStore()
const vehicleCategory = useVehicleCategoryStore()
const inputAutoComplete = ref<string>('')
const isShowSuggest = ref<boolean>(false)

function handleUpdateCategory(value: string) {
    vehicleCategory.selected = vehicleCategory.data.find(
        (data) => data.value == value
    )
    vehicleVariant.selected = vehicleVariant.placeholder
}

function handleClickSuggest({ value }: Group) {
    isShowSuggest.value = false
    if (!value) return
    if (
        vehicleVariant.inSelected.find(
            (inSelected) => inSelected.value == value
        )
    )
        return
    const addData = vehicleVariant.data.find((data) => data.value == value)
    if (addData) vehicleVariant.inSelected.push(addData)
}

function handleClickBadge(value: string) {
    vehicleVariant.inSelected = vehicleVariant.inSelected.filter(
        (inSelected) => inSelected.value != value
    )
}
</script>
<template>
    <IndexBaseToolbar>
        <template #category>
            <span class="mt-2">ค้นหาด้วย :</span>
            <BaseCheckbox
                groupName="group"
                v-for="data in vehicleCategory.data"
                @update:value="handleUpdateCategory"
                :slug="data.slug"
                :value="data.value"
            />
        </template>

        <template #searchbar>
            <IndexAutoComplete
                v-model="inputAutoComplete"
                @focusin="isShowSuggest = true"
                @focusout="isShowSuggest = false"
                @click:suggestion="handleClickSuggest"
                :isShowSuggest="isShowSuggest"
                :placeholder="vehicleVariant.placeholder"
                :option="vehicleVariant.data"
            />
        </template>

        <template #tag>
            <BaseBadge
                class="mt-2"
                v-for="data in vehicleVariant.inSelected"
                @click="handleClickBadge(data.value)"
                :slug="data.slug"
            />
        </template>

        <template #submit>
            <BaseButton class="btn-wide btn-primary btn-sm"> ค้นหา </BaseButton>
        </template>
    </IndexBaseToolbar>
</template>
