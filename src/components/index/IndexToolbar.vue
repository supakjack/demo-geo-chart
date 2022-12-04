<script setup lang="ts">
import { useRadioGroupStore, useSelectGroupStore } from '@/stores'

const selectGroupStore = useSelectGroupStore()
const radioGroupStore = useRadioGroupStore()
const inputAutoComplete = ref<string>('')
const isClickSuggest = ref<boolean>(false)
const isFocusInput = ref<boolean>(false)
const isFocusSuggest = ref<boolean>(false)
const isShowSuggest = ref<boolean>(false)

function hundleInput(e: Event) {
    const { value } = e.target as HTMLTextAreaElement
    inputAutoComplete.value = value
}

function handleFocusInInput() {
    isFocusInput.value = true
    isShowSuggest.value = true
}

function handleFocusOutInput() {
    isFocusInput.value = false
}

function handleFocusInSuggest() {
    isFocusSuggest.value = true
    if (isClickSuggest.value) isShowSuggest.value = false
}

function handleFocusOutSuggest() {
    isFocusSuggest.value = false
}

function handleClickSuggest({ value }: Group) {
    isClickSuggest.value = true
    isShowSuggest.value = false
    if (!value) return
    if (
        selectGroupStore.inSelected.find(
            (inSelected) => inSelected.value == value
        )
    )
        return
    const addData = selectGroupStore.data.find((data) => data.value == value)
    if (addData) selectGroupStore.inSelected.push(addData)
}
</script>
<template>
    <div class="flex justify-between mt-4 mb-4">
        <div class="flex items-start gap-4">
            <span class="mt-2">ค้นหาด้วย :</span>
            <BaseCheckbox
                groupName="group"
                v-for="(data, index) in radioGroupStore.data"
                @update:value="radioGroupStore.handleSelected"
                :key="index"
                :slug="data.slug"
                :value="data.value"
            />
        </div>
        <div class="flex items-start gap-4 justify-end">
            <div class="flex flex-col w-xs">
                <IndexAutoComplete
                    @focusin:input="handleFocusInInput"
                    @focusout:input="handleFocusOutInput"
                    @focusin:suggest="handleFocusInSuggest"
                    @focusout:suggest="handleFocusOutSuggest"
                    :isShowSuggest="isShowSuggest"
                    @click:suggestion="handleClickSuggest"
                    :input="inputAutoComplete"
                    @update:input="hundleInput"
                    :placeholder="selectGroupStore.placeholder"
                    :option="selectGroupStore.data"
                />
                <div class="mt-1 flex gap-1 flex-wrap">
                    <BaseBadge
                        class="mt-2"
                        v-for="(data, index) in selectGroupStore.inSelected"
                        @click="selectGroupStore.handleClickBadge(data.value)"
                        :key="index"
                        :slug="data.slug"
                    />
                </div>
            </div>
            <BaseButton class="btn-wide btn-primary btn-sm"> ค้นหา </BaseButton>
        </div>
    </div>
</template>
