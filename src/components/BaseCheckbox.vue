<script setup lang="ts">
defineProps<{
    value?: any
    slug?: string
    groupName?: string
}>()
const emit = defineEmits<{
    (event: 'update:value', value: any): void
}>()
</script>
<template>
    <div class="form-control">
        <label
            @click="emit('update:value', value)"
            class="cursor-pointer label flex gap-2"
        >
            <slot :value="value" :slug="slug" :groupName="groupName">
                <input
                    type="radio"
                    :name="groupName"
                    class="radio"
                    :value="value"
                />
                <span class="label-text">{{ slug }}</span>
            </slot>
        </label>
    </div>
</template>
