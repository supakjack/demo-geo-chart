<script setup lang="ts">
import { useLeaflet } from '@/composables'
const { L } = useLeaflet()

const prop = defineProps<{
    id: string
}>()

onMounted(() => {
    const map = L.map(prop.id).setView([13.32916, 459.865551], 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    const marker = L.marker([13.32916, 459.865551]).addTo(map)
})
</script>
<template>
    <div :id="id"></div>
</template>
