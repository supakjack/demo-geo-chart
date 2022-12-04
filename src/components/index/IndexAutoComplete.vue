<script setup lang="ts">
const prop = defineProps<{
    key?: string
    slug?: string
    placeholder?: string
    input?: any
    option?: any[]
    isShowSuggest: boolean
}>()

const emit = defineEmits<{
    (event: 'update:input', input: Event): void
    (event: 'click:suggestion', suggestion: any): void
    (event: 'focusin:input'): void
    (event: 'focusout:input'): void
    (event: 'focusin:suggest'): void
    (event: 'focusout:suggest'): void
}>()

const suggestion = computed(() =>
    prop.input
        ? prop.option?.filter((option) =>
              option[prop.slug || 'slug']
                  .toLowerCase()
                  .includes(prop.input.toLowerCase())
          )
        : prop.option
)
</script>
<template>
    <div class="relative">
        <input
            @input="(e: Event) => emit('update:input', e)"
            type="text"
            class="input input-bordered input-sm w-full max-w-xs"
            :value="input"
            @focusin="emit('focusin:input')"
            @focusout="emit('focusout:input')"
            :placeholder="placeholder"
        />
        <ul
            v-if="isShowSuggest"
            @focusin="emit('focusin:suggest')"
            @focusout="emit('focusout:suggest')"
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
                <a>ไม่มีพบข้อมูล</a>
            </li>
        </ul>
    </div>
</template>
