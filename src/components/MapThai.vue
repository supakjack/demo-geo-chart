<script setup lang="ts">
import { useLeaflet } from '@/composables'
import { nanoid } from 'nanoid'
const { L } = useLeaflet()

const prop = defineProps<{
    id?: string
}>()

const genarateId = computed<string>(() => nanoid())
onMounted(() => {
    const map = L.map(prop.id || genarateId.value).setView([13.32916, 459.865551], 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)
    const customLabel: string =
        "<div> Test Maker Label </div>" +
        "<h1> Test Maker Label Tag </h1>" +
        "<input type='text'>";
    const marker = L.marker([13.32916, 459.865551]).addTo(map).bindPopup(customLabel);
})
</script>
<template>
    <div :id="id || genarateId"></div>
</template>
