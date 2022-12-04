<script setup lang="ts">
const prop = defineProps<{
    key?: string
    slug?: string
    placeholder?: string
    modelValue: string
    option?: any[]
    isShowSuggest: boolean
    noDataTitle?: string
}>()

const emit = defineEmits<{
    (event: 'click:suggestion', suggestion: any): void
}>()

const suggestion = computed(() =>
    prop.modelValue
        ? prop.option?.filter((option) =>
              option[prop.slug || 'slug']
                  .toLowerCase()
                  .includes(prop.modelValue.toLowerCase())
          )
        : prop.option
)
</script>
<template>
    <div class="relative">
        <input
            v-model="modelValue"
            type="text"
            class="input input-bordered input-sm w-full max-w-xs"
            :placeholder="placeholder"
        />
        <ul
            v-if="isShowSuggest"
            class="mt-3 text-sm dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full z-20 absolute overflow-y-auto grid grid-cols-1 max-h-48"
        >
            <li v-for="data in suggestion" :key="data[key || 'value']">
                <a @click="emit('click:suggestion', data)">{{
                    data[slug || 'slug']
                }}</a>
            </li>
            <li
                @click="emit('click:suggestion', false)"
                v-if="!suggestion?.length"
            >
                <a>{{ noDataTitle || 'ไม่มีพบข้อมูล' }}</a>
            </li>
        </ul>
    </div>
</template>
