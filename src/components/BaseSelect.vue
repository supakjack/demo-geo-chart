<script setup lang="ts">
defineProps<{
    key?: string
    slug?: string
    placeholder?: string
    modelValue: any
    options?: any[]
}>()

const emit = defineEmits<{
    (event: 'update:modelValue', modelValue: any): void
}>()
</script>
<template>
    <select
        class="select select-bordered"
        v-model="modelValue"
        @change="emit('update:modelValue', modelValue)"
    >
        <option v-if="placeholder" disabled :value="placeholder">
            {{ placeholder }}
        </option>
        <option
            v-for="(data, index) in options"
            :key="index"
            :value="data[key || 'value']"
        >
            {{ data[slug || 'slug'] }}
        </option>
    </select>
</template>
