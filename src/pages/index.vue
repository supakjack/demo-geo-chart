<script setup lang="ts">
const marker = ref<Group[]>([])
function onSubmit(value: Group[]) {
    marker.value = []
    setTimeout(() => {
        marker.value = value
    }, 1000)
}
</script>
<template>
    <IndexToolbar @click:submit="onSubmit" />
    <progress v-if="!marker.length" class="progress w-full"></progress>
    <IndexCard :marker="marker" class="z-0" />
</template>
