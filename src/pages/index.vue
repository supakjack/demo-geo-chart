<script setup lang="ts">
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
onMounted(() => {
    const map = L.map('map').setView([13.32916, 459.865551], 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    const marker = L.marker([13.32916, 459.865551]).addTo(map)
})
</script>
<template>
    <div id="map" class="h-screen"></div>
</template>
