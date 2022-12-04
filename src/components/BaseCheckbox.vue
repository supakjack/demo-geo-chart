<script setup lang="ts">
defineProps<{
  value?: any
  slug?: string
  name?: string
}>()
const emit = defineEmits<{
  (event: 'update:value', value: any): void
}>()
</script>
<template>
  <div class="form-control">
    <label @click="emit('update:value', value)" class="cursor-pointer label flex gap-2">
      <slot>
        <input type="radio" :name="name" class="radio" :value="value" />
        <span class="label-text">{{ slug }}</span>
      </slot>
    </label>
  </div>
</template>
