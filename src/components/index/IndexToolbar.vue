<script setup lang="ts">
import { useRadioGroupStore, useSelectGroupStore } from '@/stores'

const selectGroupStore = useSelectGroupStore()
const radioGroupStore = useRadioGroupStore()

function handleRadioGroup(value: string) {
  console.log('handleRadioGroup : ', value)
  radioGroupStore.selected = radioGroupStore.data.find((data) => data.value == value)
}
function handleSelectGroup(value: string) {
  console.log('handleSelectGroup : ', value)
}
</script>
<template>
  <div class="flex justify-between">
    <div class="flex content-center items-center gap-4">
      <span>ค้นหาด้วย :</span>
      <BaseCheckbox
        name="group"
        v-for="(data, index) in radioGroupStore.data"
        @update:value="handleRadioGroup"
        :key="index"
        :slug="data.slug"
        :value="data.value"
      />
    </div>
    <div class="flex items-center gap-4 justify-end">
      <BaseSelect
        class="select-sm"
        @update:model-value="handleSelectGroup"
        :model-value="selectGroupStore.selected"
        :placeholder="selectGroupStore.placeholder"
        :options="selectGroupStore.data"
      />
      <BaseButton class="btn-wide btn-primary btn-sm"> ค้นหา </BaseButton>
    </div>
  </div>
</template>
